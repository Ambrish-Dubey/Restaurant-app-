import express from 'express'
import {homeController, formSubmit, editController, updateController, deleteController } from '../controllers/homeController.js'

import {loginController, buyController, registerController, heroController, localhostController, searchSubmit} from '../controllers/userController.js'
const route = express.Router()



route.get('/', localhostController)
route.post('/', searchSubmit)
route.get('/login/:id', loginController)
route.post('/buy',buyController)
route.get('/registerUser',registerController)
route.post('/registerUser',heroController)

export default route