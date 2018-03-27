DROP DATABASE IF EXISTS database_1;
CREATE DATABASE database_1;
c database_1;
CREATE TABLE table_1
(
  _id SERIAL PRIMARY KEY,
  _name VARCHAR(50) NOT NULL
);
CREATE TABLE table_2
(
  _id2 SERIAL PRIMARY KEY,
  _name2 VARCHAR(50) NOT NULL,
  _id INT,
  FOREIGN KEY (_id) REFERENCES table_1(_id),
  value1 VARCHAR(50) NOT NULL,
  value2 VARCHAR(50) NOT NULL
);

INSERT INTO table_1
(_name)
VALUES ('');
INSERT INTO table_2
  (_name2, _id, value1, value2)
VALUES
  ('', 0, '', '');

SELECT * FROM table_1;
SELECT * FROM table_2;
