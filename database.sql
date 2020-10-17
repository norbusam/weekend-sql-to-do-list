--DB name
-- weekend-to-do-app
--create table
CREATE TABLE "tasks"(
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(50) NOT NULL,
"description" VARCHAR(250) NOT NULL,
"completed" BOOLEAN DEFAULT FALSE);

--sample task
INSERT INTO "tasks"("name", "description")
VALUES( 'Norbu', 'Cook dinner');

INSERT INTO "tasks"("name", "description")
VALUES( 'John', 'lawn the mown');

INSERT INTO "tasks"("name", "description")
VALUES( 'Greta', 'grocery shopping');
