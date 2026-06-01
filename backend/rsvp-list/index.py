import json
import os
import psycopg2


ADMIN_PASSWORD = "101122"


def handler(event: dict, context) -> dict:
    """Возвращает список ответов гостей со статистикой алкоголя (защищено паролем)"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    params = event.get('queryStringParameters') or {}
    password = params.get('password', '')
    if password != ADMIN_PASSWORD:
        return {
            'statusCode': 401,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Неверный пароль'})
        }

    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        f"SELECT id, name, attending, guests_count, alcohol, comment, created_at FROM {schema}.rsvp ORDER BY created_at DESC"
    )
    rows = cur.fetchall()
    cur.close()
    conn.close()

    guests = [
        {
            'id': r[0],
            'name': r[1],
            'attending': r[2],
            'guests_count': r[3],
            'alcohol': r[4] or [],
            'comment': r[5],
            'created_at': r[6].strftime('%d.%m.%Y %H:%M') if r[6] else ''
        }
        for r in rows
    ]

    total_yes = sum(1 for g in guests if g['attending'] == 'yes')
    total_no = sum(1 for g in guests if g['attending'] == 'no')
    total_people = sum(g['guests_count'] for g in guests if g['attending'] == 'yes')

    alcohol_counts = {}
    for g in guests:
        if g['attending'] == 'yes':
            for drink in g['alcohol']:
                alcohol_counts[drink] = alcohol_counts.get(drink, 0) + 1

    total_alcohol_answers = sum(alcohol_counts.values())
    alcohol_stats = [
        {
            'name': drink,
            'count': count,
            'percent': round(count / total_alcohol_answers * 100) if total_alcohol_answers > 0 else 0
        }
        for drink, count in sorted(alcohol_counts.items(), key=lambda x: -x[1])
    ]

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({
            'guests': guests,
            'stats': {
                'total_yes': total_yes,
                'total_no': total_no,
                'total_people': total_people,
                'alcohol': alcohol_stats
            }
        }, ensure_ascii=False)
    }