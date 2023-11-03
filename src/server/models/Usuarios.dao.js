import db from '../database/db.js'

export const register = async (email, pass) =>
  await db('INSERT INTO usuarios (id, email, pass) VALUES (DEFAULT, $1, $2) RETURNING *;', [email, pass])

export const login = async (email, pass) =>
  await db('SELECT * FROM usuarios WHERE email = $1 AND pass = $2;', [email, pass])
