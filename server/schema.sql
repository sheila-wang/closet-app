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
  (4, 'green', 'short'),
  (5, 'red', 'mid'),
  (6, 'pink', 'long');