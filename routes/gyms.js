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
router.get('/:id/reviews/new-review', isLoggedIn, gymsCtrl.newReview)

// GET -- localhost:3000/gyms/:id/edit-review
router.get('/:id/reviews/:reviewId/edit-review', isLoggedIn, gymsCtrl.editReview)

// POST -- localhost:3000/gyms
router.post('/', isLoggedIn, gymsCtrl.create)

// POST -- localhost:3000/gyms/search
router.post('/search', gymsCtrl.gymSearch)

// POST -- localhost:3000/gyms/:id/reviews
router.post('/:id/reviews', isLoggedIn, gymsCtrl.createReview)

// PUT -- localhost:3000/gyms/:id
router.put('/:id', isLoggedIn, gymsCtrl.update)

// PUT -- localhost:3000/gyms/:id/reviews/:reviewId
router.put('/:id/reviews', isLoggedIn, gymsCtrl.updateReview)

// DELETE -- localhost:3000/gyms/:id
router.delete('/:id', isLoggedIn, gymsCtrl.delete)

export {
  router
}