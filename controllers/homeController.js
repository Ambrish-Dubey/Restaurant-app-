import { name } from 'ejs'
import schema from '../models/model.js'

import schema3 from '../models/food.js'

const homeController = async (req,res)=>
    {
        console.log('homeController')
        console.log(req.body)
        const doc = await schema3.find()
        console.log(doc)
        const obj = {doc:doc}
        res.render('index',obj)
    }

const formSubmit = async (req,res)=>
    {
        console.log('formSubmit')
        console.log(req.body)
        const {name,description,price,img} = req.body
        const fields = {name,description,price,img}
        const doc =  schema3(fields)
        await doc.save()
        console.log('Doc saved:-',doc)
        res.redirect('/admin')
    }
const editController = async (req,res)=>
    {

        //const updateWith = {name:name,age:age,location:location}
        console.log('editController')
        const id = req.params.id
        //console.log('hh',req.body)
        let {name,description,price,img} = req.body
        //const updateWith = {}
        const doc = await schema3.findById(id)
        name = doc.name
        description = doc.description
        price = doc.price
        console.log('The name,description,price,img:- ',name,description,price,img)
        //console.log('hi',req.body)
        //console.log(doc)
        const obj = {id:req.params,name:name,description:description,price:price,img:img}
        console.log('req.params',req.params)
        res.render('edit',obj)
    }

const updateController = async (req,res)=>
    {
        console.log('updateController')
        console.log('req.params',req.params)
        const {name,description,price,img:img} = req.body
        const updateWith = {name:name,description:description,price:price,img:img} //left from database, right from name field from req.body.
        const doc = await schema3.findByIdAndUpdate(req.params.id,updateWith)
        res.redirect('/admin')
    }

const deleteController = async (req,res)=>
    {
        console.log('deleteController')
        console.log('req.params',req.params)
        const id = req.params.id
        const doc = await schema3.findByIdAndDelete(id)
        res.redirect('/admin')
    }

export  {homeController, formSubmit, editController, updateController, deleteController }