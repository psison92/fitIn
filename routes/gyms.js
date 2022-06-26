import { Router } from 'express'
import * as gymsCtrl from '../controllers/gyms.js'

const router = Router()

// GET -- localhost:3000
router.get('/', gymsCtrl.index)

export {
  router
}