CREATE DATABASE IF NOT EXISTS SCHOOL;

USE SCHOOL;

CREATE TABLE IF NOT EXISTS Alumnos (
  NUMCONTROL int(50) NOT NULL,
  NOMBRE varchar(255) NOT NULL,
  APELLIDOP varchar(255) NOT NULL,
  APELLIDOM varchar(255),
  CURP varchar(100) NOT NULL,
  FECHANAC datetime,
  GRADO varchar(255) NOT NULL,
  GRUPO varchar(255) NOT NULL,
  ESPECIALIDAD varchar(255) NOT NULL, 
  PRIMARY KEY (NUMCONTROL)
)

INSERT INTO Alumnos (NUMCONTROL, NOMBRE, APELLIDOP, APELLIDOM, CURP, GRADO, GRUPO, ESPECIALIDAD) VALUES
(1, 'Juan', 'Perez', 'Lopez', 'PELJ123456HDFR', '3', 'A', 'Sistemas Computacionales'),
(2, 'Maria', 'Gonzalez', 'Lopez', 'GOLM123456HDFR', '3', 'A', 'Sistemas Computacionales'),
(3, 'Pedro', 'Ramirez', 'Lopez', 'RALP123456HDFR', '3', 'A', 'Sistemas Computacionales');
