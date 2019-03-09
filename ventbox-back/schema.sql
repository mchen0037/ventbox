DROP TABLE IF EXISTS vents;

CREATE TABLE vents (
	id SERIAL,
	vent TEXT,
	likes INTEGER,
	polarity REAL,
	timestamp TIMESTAMP
);
