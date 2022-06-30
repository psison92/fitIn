import { Router } from 'express'
import * as gymsCtrl from '../controllers/gyms.js'

const router = Router()

// GET -- localhost:3000/gyms
router.get('/', gymsCtrl.index)

// POST -- localhost:3000/gyms
router.post('/', gymsCtrl.create)

// POST -- localhost:3000/gyms/search
router.post('/search', gymsCtrl.gymSearch)


export {
  router
}