import { Router } from 'express';
import { getStudents, getStudentsCount, getStudent, createStudent, deleteStudent, updateStudent } from '../controllers/Students'

const router = Router() 


/**
 * @swagger
 * tags:
 * name: Students
 * description: The students managing API
 */

/**
 * @swagger
 * /students:
 *  get:
 *   summary: Get all students
 *   tags: [Students]
 */
router.get('/students', getStudents)

/**
 * @swagger
 * /students/count:
 *  get:
 *   summary: Get count of all students
 *   tags: [Students]
 */
router.get('/students/count', getStudentsCount)

/**
 * @swagger
 * /student/:id:
 *  get:
 *   summary: Get someone of the students by id
 *   tags: [Students]
 */
router.get('/student/:id', getStudent)

/**
 * @swagger
 * /student:
 *  post:
 *   summary: Create a new student
 *   tags: [Students]
 */
router.post('/student', createStudent)

/**
 * @swagger
 * /student/:id:
 *  delete:
 *   summary: Delete a student by id
 *   tags: [Students]
 */
router.delete('/student/:id', deleteStudent)

/**
 * @swagger
 * /student/:id:
 *  put:
 *   summary: Update a student by id
 *   tags: [Students]
 */
router.put('/student/:id', updateStudent)

export default router
