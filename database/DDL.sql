-- DROP DATABASE ayudantia_backend;
-- DROP TABLE usuarios;
-- DROP TABLE cursos;

CREATE DATABASE ayudantia_backend;

\c ayudantia_backend;

CREATE TABLE usuarios (
  id        SERIAL        NOT NULL,
  email     VARCHAR(50)   NOT NULL    UNIQUE,
  pass      VARCHAR(50)   NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE cursos (
  id        SERIAL        NOT NULL,
  lenguage  VARCHAR(30)   NOT NULL,
  nivel     VARCHAR(15)   NOT NULL    CHECK (nivel IN ('principiante', 'intermedio', 'avanzado')),
  PRIMARY KEY (id)
);
