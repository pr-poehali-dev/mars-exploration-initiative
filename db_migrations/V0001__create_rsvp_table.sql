CREATE TABLE IF NOT EXISTS t_p90224569_mars_exploration_ini.rsvp (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  attending TEXT NOT NULL,
  guests_count INTEGER DEFAULT 1,
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);