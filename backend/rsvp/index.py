import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Сохраняет ответ гостя о присутствии на свадьбе в базу данных"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    attending = body.get('attending', '')
    guests_count = int(body.get('guests_count', 1))
    alcohol = body.get('alcohol', [])
    comment = body.get('comment', '').strip()

    if not name or attending not in ('yes', 'no'):
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Заполните имя и выберите ответ'})
        }

    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        f"INSERT INTO {schema}.rsvp (name, attending, guests_count, alcohol, comment) VALUES (%s, %s, %s, %s, %s)",
        (name, attending, guests_count if attending == 'yes' else 0, alcohol or None, comment or None)
    )
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }