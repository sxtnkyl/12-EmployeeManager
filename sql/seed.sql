INSERT INTO department (id, depName)
VALUES (1, "Geology"),
 (10, "Physics"),
 (100, "Comp Sci");

INSERT INTO depRole (title, salary, department_id)
VALUES ("HR", 50.000, 10),
 ("Professor", 90.000, 10),
 ("Grad Student", 40.000, 10),

 ("HR", 60.000, 1),
 ("Professor", 100.000, 1),
 ("Grad Student", 40.000, 1),

 ("HR", 50.000, 100),
 ("Professor", 120.000, 100),
 ("Grad Student", 40.000, 100);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("guy", "buddy", 1, null),
("pal", "buddy", 2, null),
("friend", "buddy", 3, null),

("pal", "guy", 4, null),
("buddy", "guy", 5, null),
("friend", "guy", 6, null),

("buddy", "pal", 7, null),
("guy", "pal", 8, null),
("friend", "pal", 9, null);