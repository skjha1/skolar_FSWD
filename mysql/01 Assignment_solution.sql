-- Problem 1: Create and Insert
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department VARCHAR(50),
    age INT
);

INSERT INTO students (student_id, first_name, last_name, department, age) VALUES (1, 'Amit', 'Kumar', 'Computer Science', 21);
INSERT INTO students (student_id, first_name, last_name, department, age) VALUES (2, 'Neha', 'Sharma', 'Mechanical', 22);
INSERT INTO students (student_id, first_name, last_name, department, age) VALUES (3, 'Raj', 'Verma', 'Electrical', 20);
INSERT INTO students (student_id, first_name, last_name, department, age) VALUES (4, 'Priya', 'Singh', 'Computer Science', 19);
INSERT INTO students (student_id, first_name, last_name, department, age) VALUES (5, 'Arjun', 'Patel', 'Civil', 23);

-- Problem 2: Select and Where
SELECT * FROM students WHERE department = 'Computer Science';

-- Problem 3: Inner Join
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

INSERT INTO departments (dept_id, dept_name) VALUES (1, 'Computer Science');
INSERT INTO departments (dept_id, dept_name) VALUES (2, 'Mechanical');
INSERT INTO departments (dept_id, dept_name) VALUES (3, 'Electrical');

SELECT s.student_id, s.first_name, s.last_name, d.dept_name, s.age
FROM students s
INNER JOIN departments d ON s.department = d.dept_name;

-- Problem 4: Left Join
SELECT d.dept_name, s.student_id, s.first_name, s.last_name, s.age
FROM departments d
LEFT JOIN students s ON d.dept_name = s.department;

-- Problem 5: Aggregation
SELECT department, AVG(age) AS avg_age
FROM students
GROUP BY department;

-- Problem 6: Group By and Having
SELECT department, AVG(age) AS avg_age
FROM students
GROUP BY department
HAVING AVG(age) > 20;

-- Problem 7: Subquery
SELECT *
FROM students
WHERE age > (SELECT AVG(age) FROM students);

-- SET SQL_SAFE_UPDATES = 0;

-- Problem 8: Update
UPDATE students
SET age = age + 1
WHERE department = 'Mechanical';

Select * 
from students;

-- Problem 9: Delete
DELETE FROM students
WHERE age < 20;

-- Problem 10: Create View
CREATE VIEW senior_students AS
SELECT * FROM students
WHERE age > 21;
