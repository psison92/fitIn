import { Router } from 'express'
import * as gymsCtrl from '../controllers/gyms.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET -- localhost:3000/gyms
router.get('/', gymsCtrl.index)

// GET -- localhost:3000/gyms/new
router.get('/new', isLoggedIn, gymsCtrl.new)

// GET -- localhost:3000/gyms/:id
router.get('/:id', gymsCtrl.show)

// POST -- localhost:3000/gyms
router.post('/', isLoggedIn, gymsCtrl.create)

export {
  router
}