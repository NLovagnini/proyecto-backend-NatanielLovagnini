import express from 'express'
import morgan from 'morgan'
import productRoutes from './routes/products'
import cartRoutes from './routes/cart'


const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/products', productRoutes)
app.use('/cart', cartRoutes)


//Server online

const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`SERVER ONLINE ON PORT ${PORT}`)
})
