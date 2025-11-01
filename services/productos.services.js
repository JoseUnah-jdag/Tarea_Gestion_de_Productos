import productos from '../db/local/productos.json' with { type: 'json' }


export class ProdcutosService {

    static async getProductos() {
        return productos
    }

    static async getProductoId(id) {
        return productos.find((todo) => {
            return productos.id === id
        })
    }

    static async createProducto(producto) {
        const id = Date.now()
        const newProducto = { id, ...producto }
        productos.push(newProducto)
        return newProducto
    }

    static async updateProducto(producto) {
        let index = productos.find((todo) => {
            return productos.id === id
        })
        if(index === -1){
            return {"error":"producto no encontrado"}
        }
        else{
            productos[index]=producto
        }
        return producto
    }

    static async deleteProducto(producto) {
        let index = productos.find((todo) => {
            return productos.id === id
        })
        if(index === -1){
            return {"error":"producto no encontrado"}
        }
        else{
            productos.splice(index,1)
        }
        return producto
    }

    static async getProductosDisponibles(){
        return productos.filter((producto)=>{
            producto.disponible===true
        })
    }
}