import db from '../database/db.js'

export const findCourse = async () => await db('SELECT * FROM cursos;')

export const findByIdCourse = async () => {}

export const saveCourse = async () => {}

export const updateCourse = async () => {}

export const deleteCourse = async () => {}
