import * as sql from '../models/Cursos.dao.js'
import HTTP_STATUS from '../../config/constants.js'

export const findCourse = (_, res) =>
  sql.findCourse()
    .then((cursos) => res.status(HTTP_STATUS.ok.code).json(cursos))
    .catch((error) => res.status(HTTP_STATUS.internal_server_error.code).json(error))

export const findByIdCourse = (req, res) => {}

export const saveCourse = (req, res) => {}

export const updateCourse = (req, res) => {}

export const deleteCourse = (req, res) => {}
