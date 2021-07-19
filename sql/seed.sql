INSERT INTO department (id, depName)
VALUES (1, "Geology");
VALUES (10, "Physics");
VALUES (100, "Comp Sci");

INSERT INTO depRole (id, title, salary, department_id)
VALUES ("HR", 50.000, 10);
VALUES ("Professor", 90.000, 10);
VALUES ("Grad Student", 40.000, 10);

VALUES ("HR", 60.000, 1);
VALUES ("Professor", 100.000, 1);
VALUES ("Grad Student", 40.000, 1);

VALUES ("HR", 50.000, 100);
VALUES ("Professor", 120.000, 100);
VALUES ("Grad Student", 40.000, 100);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ("guy", "buddy", 1, null);
VALUES ("pal", "buddy", 2, null);
VALUES ("friend", "buddy", 3, null);

VALUES ("pal", "guy", 4, null);
VALUES ("buddy", "guy", 5, null);
VALUES ("friend", "guy", 6, null);

VALUES ("buddy", "pal", 7, null);
VALUES ("guy", "pal", 8, null);
VALUES ("friend", "pal", 9, null);