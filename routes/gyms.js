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

// GET -- localhost:3000/gyms/:id/edit
router.get('/:id/edit', isLoggedIn, gymsCtrl.edit)

// GET -- localhost:3000/gyms/:id/new-review
router.get('/:id/new-review', isLoggedIn, gymsCtrl.newReview)

// POST -- localhost:3000/gyms
router.post('/', isLoggedIn, gymsCtrl.create)

// POST -- localhost:3000/gyms/:id/reviews
router.post('/:id/reviews', isLoggedIn, gymsCtrl.createReview)

// PUT -- localhost:3000/gyms/:id
router.put('/:id', isLoggedIn, gymsCtrl.update)

export {
  router
}