import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET -- localhost:3000/reviews
router.get('/', isLoggedIn, reviewsCtrl.index)

// GET -- localhost:3000/reviews/new
router.get('/new', isLoggedIn, reviewsCtrl.new)

// POST -- localhost:3000/reviews/:id
router.post('/:id', isLoggedIn, reviewsCtrl.create)

export {
  router
}