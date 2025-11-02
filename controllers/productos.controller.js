import { ProductosService } from '../services/productos.services.js'
import { sendResponse } from '../helpers/send_response.js'
import { validateproductos } from '../schemas/productos.schema.js'

export const getProductos = async (req, res) => {
    try {
        const productos = await ProductosService.getProductos();
        sendResponse({ res, message: "Lista de productos", data: productos })
    } catch (e) {
        sendResponse({ res, message: e.message, data: null, statusCode: 500 })
    }
}

export const getProductoById = async (req, res) => {
    const { id } = req.params
    const producto = await ProductosService.getProductoById(parseInt(id))
    if (producto == null) {
        return sendResponse({res, message: "Producto no encontrado", data: null, statusCode: 404 })
    }
    sendResponse({res, message: "Producto obtenido", data: producto})
}

export const createProducto = async (req, res) => {
    let producto={...req.body,"fecha_ingreso":new Date().toISOString()}
    const { success, error, data: safeData } = validateproductos(producto)

    const existProducto = await ProductosService.getProductoById(parseInt(safeData.id))
    if (!existProducto===false) {
        return sendResponse({ res, message: "EL id ya existe"})
    }

    if (!success) {
        return sendResponse({ res, message: "ocurrio un error", data: error.issues, statusCode: 400 })
    }
    const data = await ProductosService.createProducto(safeData)

    sendResponse({ res, message: "Producto creado con exito", data: data})
}

export const updateProducto = async (req, res) => {
    const { id } = req.params
    let productoActualizado={"id":parseInt(id),...req.body,"fecha_ingreso":new Date().toISOString()}
    const { success, error, data: safeData } = validateproductos(productoActualizado)

    if (!success) {
        return sendResponse({ res, message: "ocurrio un error", data: error.issues, statusCode: 400 })
    }
    const productoAnterior=await ProductosService.getProductoById(parseInt(id))
    if (productoAnterior==null){
        return sendResponse({ res, message: "El producto no existe", statusCode: 404 })   
    }
    const data = await ProductosService.updateProducto(safeData,parseInt(id))

    sendResponse({ res, message: "Producto actualizado con exito", data: data})
}

export const deleteProducto = async (req, res) => {
    const { id } = req.params

    const deleteProducto = await ProductosService.getProductoById(parseInt(id))
    if (!deleteProducto) {
        return sendResponse({ res, message: "No existe el producto", statusCode: 404 })
    }

    await ProductosService.deleteProducto(parseInt(id))

    sendResponse({ res, message: "Producto eliminado con exito", data: deleteProducto})
}

export const getProductosDisponibles = async (req, res) => {
    try {
        const productosDisponibles = await ProductosService.getProductosDisponibles();
        sendResponse({ res, message: "Listado de productos disponibles", data: productosDisponibles})
    } catch (e) {
        sendResponse({ res, message: e.message, statusCode: 500 })
    }
}