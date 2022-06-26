import { Router } from 'express'
import * as gymsCtrl from '../controllers/gyms.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET -- localhost:3000
router.get('/', gymsCtrl.index)

// POST -- localhost:3000
router.post('/', isLoggedIn, gymsCtrl.create)

export {
  router
}