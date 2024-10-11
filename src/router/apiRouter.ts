 import {Router} from 'express'
import apiController from '../controller/apiController'

 const router = Router()

 router.route('/main/call').get(apiController.self)

 export default router