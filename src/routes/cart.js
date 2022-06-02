import {Router} from 'express'
import Api from '../apiClass'
const router = Router()
const api = new Api('/dataBase/cart.json')

export default router