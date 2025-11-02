import { Router } from 'express'
import { getProductos, getProductoById, createProducto, updateProducto, deleteProducto, getProductosDisponibles } from '../controllers/productos.controller.js'

const productosRouter = Router()

productosRouter.get('/',getProductos)
productosRouter.get('/disponibles/',getProductosDisponibles)
productosRouter.get('/:id',getProductoById)
productosRouter.post('/',createProducto)
productosRouter.put('/:id',updateProducto)
productosRouter.delete('/:id',deleteProducto)

export default productosRouter