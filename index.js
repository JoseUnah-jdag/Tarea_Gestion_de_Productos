import express from 'express';
import { loadEnvFile } from 'node:process';
import productosRouter from './routes/productos.routes.js';

loadEnvFile()

const app = express()

app.use(express.json())

app.use('/productos',productosRouter)

app.use((req, res) => {
    res.status(404).json({
        message: "No existe este recurso"
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("servidor activo")
});