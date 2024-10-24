import express from 'express'
import {homeController, formSubmit, editController, updateController, deleteController } from '../controllers/homeController.js'


const route = express.Router()

route.get('/', homeController)
route.post('/', formSubmit)
route.get('/edit/:id', editController)
route.post('/edit/:id', updateController)
route.get('/delete/:id', deleteController)
export default route