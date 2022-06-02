import fs from 'fs'

export default class Api{
    constructor(DBRoute){
        this.DBRoute = __dirname + DBRoute
    }


    async getAll(){
        try {
            const allArray = await fs.promises.readFile(this.DBRoute, 'utf-8')
            return JSON.parse(allArray)
        } catch (error) {
            throw new Error (`ERROR: ${error}`)
        }
    }

    async getById(id){
        try {
            const allArray =  await this.getAll()
            const productById = todos.find(product=> product.id == id)
            return productById
        } catch (error) {
            throw new Error (`ERROR: ${error}. Producto no encontrado`)
        }
    }

    async addProduct(product){
        try {
            const allArray =  await this.getAll()
            let id
            allArray.length === 0
            ?id = 1
            :id = allArray[todos.lenght-1].id+1

            allArray.push({...product,id})
            
            await fs.promises.writeFile(this.DBRoute, JSON.stringify(allArray))
            return id
        } catch (error) {
            throw new Error (`ERROR: ${error}`)
        }
    }
}