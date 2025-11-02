import productos from '../db/local/productos.json' with { type: 'json' }


export class ProductosService {

    static async getProductos() {
        return productos
    }

    static async getProductoById(id) {
        return productos.find((producto) => {
            return producto.id === id
        })
    }

    static async createProducto(producto) {
        const id = Date.now()
        const newProducto = { id, ...producto }
        productos.push(newProducto)
        return newProducto
    }

    static async updateProducto(producto,id) {
        let index = productos.findIndex((_producto) => {
            return _producto.id === id
        })
        if(index === -1){
            return null
        }
        else{
            productos[index]=producto
        }
        return producto
    }

    static async deleteProducto(id) {
        let index = productos.findIndex((_producto) => {
            return _producto.id === id
        })
        if(index === -1){
            return {"error":"producto no encontrado"}
        }
        else{
            productos.splice(index,1)
        }
        //return producto
    }

    static async getProductosDisponibles(){
        return productos.filter((producto)=>{
            return producto.disponible===true
        })
    }
}