import * as z from 'zod'

const productosSchema = z.object({
    id: z.number(),
    nombre: z.string(),
    precio: z.number().positive(),
    descripcion: z.string().min(10),
    disponible: z.boolean(),
    fecha_ingreso: z.string()
}).strict()

export const validateproductos = (producto) => {
    return productosSchema.safeParse(producto)
}