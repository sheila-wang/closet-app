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
  (3, 'white', 'short'),
  (4, 'white', 'short'),
  (5, 'white', 'short'),
  (6, 'beige', 'short'),
  (7, 'beige', 'long'),
  (8, 'beige', 'long'),
  (9, 'brown', 'short'),
  (10, 'pink', 'short'),
  (11, 'pink', 'short'),
  (12, 'pink', 'short'),
  (13, 'pink', 'short'),
  (14, 'blue', 'short'),
  (15, 'blue', 'short'),
  (16, 'gray', 'short'),
  (17, 'gray', 'short'),
  (18, 'black', 'short'),
  (19, 'black', 'short'),
  (20, 'black', 'short')
  ;

-- query in elephantsql

SELECT *
FROM dresses
WHERE color = 'pink'
AND length = 'short';