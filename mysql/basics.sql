CREATE DATABASE Practice ;
use Practice;


CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL
);

CREATE TABLE jobs (
    jobs_id varchar(10) PRIMARY KEY,
    Job_title VARCHAR(50) NOT NULL
);

create table employees (
	employee_id int primary key,
    first_name  varchar(50),
    last_name varchar(50),
    email 	varchar(100),
    hire_date date,
    job_id varchar(10),
    department_id int,
    salary decimal(10, 2),
    foreign key (job_id) references jobs(jobs_id),
    foreign key (department_id) references departments(department_id)
    
    );
  
    -- insert into dapartments 
    
    insert into departments (department_id, department_name ) values (10, 'Sales');
	insert into departments (department_id, department_name ) values (20, 'IT');
    insert into departments (department_id, department_name ) values (30, 'HR');

-- insert into Jobs 
    insert into jobs (jobs_id, Job_title) values ('SA_MAN', 'Sales Manager');
	insert into jobs (jobs_id, Job_title) values ('SA_REP', 'Sales Representative');
	insert into jobs (jobs_id, Job_title) values ('IT_PROG', 'Programmer');
    insert into jobs (jobs_id, Job_title) values ('HR_REP', 'HR Representative');

-- insert into Employees 
	insert into employees (employee_id, first_name, last_name, email, hire_date, job_id, department_id, salary)
    values ( 101, 'Naman', 'Jain', 'naman123@gmail.com', curdate(), 'SA_MAN', 10, 100000);
    insert into employees (employee_id, first_name, last_name, email, hire_date, job_id, department_id, salary)
    values ( 102, 'Nancy', 'Sharma', 'nancy@gmail.com', curdate(), 'IT_PROG', 20, 200000);
    insert into employees (employee_id, first_name, last_name, email, hire_date, job_id, department_id, salary)
    values ( 103, 'Pavani', 'K', 'pavani@gmail.com', curdate(), 'HR_REP', 30, 150000);
    
    
    -- simple select statement 
    
    Select *
    from employees;

	-- Select the specific columns
    Select first_name, last_name, email
    from employees;
    
    -- Select with where clause
    
    Select *
    from employees 
    where department_id = 10;
    
    select * 
    from employees
    order by last_name desc;
    
	select * 
    from employees
    order by employee_id asc;
    
    
    -- Select with join
    
    Select e.first_name, e.last_name, d.department_name 
    from employees e
    join departments d on e.department_id = d.department_id;
    
	Select e.first_name, e.last_name, j.Job_title 
    from employees e
    join jobs j on e.job_id = j.jobs_id;
    
Select employee_id, first_name,email from employees UNION select department_name from departments;

select e.first_name, e.email, d.department_name from employees e join departments d ON e.department_id=d.department_id;

