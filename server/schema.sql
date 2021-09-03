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
  (2, 'black', 'mid'),
  (3, 'blue', 'long'),
  (4, 'white', 'short'),
  (5, 'red', 'mid'),
  (6, 'pink', 'long');
  
-- query

SELECT *
FROM dresses
WHERE color = 'white'
AND length = 'short';