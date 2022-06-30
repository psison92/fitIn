import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// POST -- localhost:3000/reviews/:id
router.post('/:id', isLoggedIn, reviewsCtrl.create)

export {
  router
}