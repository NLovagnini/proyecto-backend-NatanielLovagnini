import {Router} from 'express'
import Api from '../apiClass'
const router = Router()
const api = new Api('/dataBase/products.json')
const multer = require('multer')

//multer config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname+"/public/uploads")
    },
    filename: function (req, file, cb){
        cb(null, file.originalname )
    }
})

router.use(multer({storage}).single("thumbnail"))




router.get('/', async (req, res) =>{
    const products = await api.getAll()
    res.json(products)
})

router.get('/:id', async (req, res) =>{
    const {id} = req.params
    const product = await api.getById(id)
    res.json(product)
})

router.post('/', async (req, res) =>{
    const obj = req.body
    const objImg = req.file
    obj.thumbnail = `/uploads/${objImg.filename}`
    const product = await api.addProduct(obj)
    res.json(product)
})

export default router