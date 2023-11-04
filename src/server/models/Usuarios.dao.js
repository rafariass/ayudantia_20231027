import db from '../database/db.js'
import { encrypt, compare } from '../../utils/bcrypt.js'

export const register = async (email, pass) =>
  await db('INSERT INTO usuarios (id, email, pass) VALUES (DEFAULT, $1, $2) RETURNING *;', [email, encrypt(pass)])

export const login = async (email, pass) => {
  const [user] = await db('SELECT * FROM usuarios WHERE email = $1', [email])
  return compare(pass, user?.pass ?? '') ? user : null
}
