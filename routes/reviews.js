import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET -- localhost:3000/reviews
router.get('/', isLoggedIn, reviewsCtrl.index)

// GET -- localhost:3000/reviews/:gymId/new
router.get('/:gymId/new', isLoggedIn, reviewsCtrl.new)

export {
  router
}