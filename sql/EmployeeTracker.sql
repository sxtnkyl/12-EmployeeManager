
USE EmployeeTracker;

CREATE TABLE department (
  id INT NOT NULL,
  depName VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

-- role --
CREATE TABLE depRole (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  -- link depid to department > department id --
  department_id INT NOT NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  -- ref to role id --
  role_id INT NOT NULL,
  -- ref to employee id --
  manager_id INT,
  PRIMARY KEY (id)
);