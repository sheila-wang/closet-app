-- one time copy paste into elephantsql

DROP TABLE IF EXISTS dresses;

CREATE TABLE dresses (
  id SERIAL NOT NULL,
  color VARCHAR NOT NULL,
  length VARCHAR NOT NULL
);

INSERT INTO dresses
VALUES
  (1, 'white', 'short'),
  (2, 'white', 'short'),
  (3, 'white', 'long'),
  (4, 'black', 'short'),
  (5, 'red', 'mid'),
  (6, 'pink', 'long');

-- query in elephantsql

SELECT *
FROM dresses
WHERE color = 'white'
AND length = 'short';