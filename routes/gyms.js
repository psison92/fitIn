import { Router } from 'express'
import * as gymsCtrl from '../controllers/gyms.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET -- localhost:3000/gyms
router.get('/', gymsCtrl.index)

// GET -- localhost:3000/gyms/:id
router.get('/:id', isLoggedIn, gymsCtrl.show)

// POST -- localhost:3000/gyms
router.post('/', isLoggedIn, gymsCtrl.create)

// POST -- localhost:3000/gyms/search
router.post('/search', gymsCtrl.gymSearch)

// DELETE -- localhost:3000/gyms/:id/reviews/:reviewId
router.delete('/:id/reviews/:reviewId', isLoggedIn, gymsCtrl.deleteReview)

export {
  router
}