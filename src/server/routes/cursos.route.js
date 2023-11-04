import express from 'express'
import * as cursos from '../controllers/cursos.controller.js'
import { verifyToken } from '../middlewares/cursos.middleware.js'

const router = express.Router()

router.get('/cursos', verifyToken, cursos.findCourse)
router.get('/cursos/:id', verifyToken, cursos.findByIdCourse)
router.post('/cursos', verifyToken, cursos.saveCourse)
router.put('/cursos/:id', verifyToken, cursos.updateCourse)
router.delete('/cursos/:id', verifyToken, cursos.deleteCourse)

export default router
