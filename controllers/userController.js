import schema2 from '../models/consumer.js'
import schema3 from '../models/food.js'


const loginController = async (req, res) => {
    try {
        console.log('req.body',req.body)
        console.log('req.params',req.params.id)

        const doc = schema2.findById({_id:req.params.id})
        console.log(doc)

        res.render('loginUser')
    } catch (error) {
        console.log(error)
    }
}

const registerController = async (req, res) => {
    try {
        console.log('req.body',req.body)
        console.log('req.params',req.params)
        res.render('RegisterUser')
    } catch (error) {
        console.log(error)
    }
}

const heroController = async (req, res) => {
    try {
        console.log('req.body',req.body)
        console.log('req.params',req.params)

        const {email,password} = req.body

        if(!email || !password){return res.send('Please send details')}

        const doc = await schema2.findOne({email})

        if(doc){return res.send('Please log in')}

        const doc2 = await schema2({email,password})
        await doc2.save()

        //res.send('User registered')

        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}

const buyController = async (req, res) => {
    try {
        console.log('buyController')
        console.log(req.body)
        console.log(req.params)
        res.render('Buy')
    } catch (error) {
        console.log(error)
    }
}

const localhostController = async (req,res)=>
    {
        //console.log('homeController')
        //console.log(req.body)
        console.log(req.params.name)
        let obj;
        if (req.params.name)
            {
            const doc = await schema3.find({name:req.params.name})
            console.log(doc)
            obj = {doc:doc}
            }
        else
        {
            const doc = await schema3.find()
            console.log(doc)
            obj = {doc:doc}
        }
        res.render('hero',obj)
    }

const searchSubmit = async (req,res)=>
    {
        console.log('searchSubmit')
        console.log(req.params)
        console.log(req.body)
        const doc = await schema3.find({name:req.body.name})
        const obj = {doc:doc}
        res.render('hero',obj)
    }
export { loginController, buyController, registerController, heroController, localhostController, searchSubmit }