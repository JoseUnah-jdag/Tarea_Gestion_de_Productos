INSTRUCCIONES PARA EJECUTAR EL PROYECTO

1. instalar las dependecias ejecutando "npm install"
2. crear el archivo de variables de entorno (.env) colocando un puerto determinado
3. iniciar el servidor ejecutando el comando "npm run  dev"
4. enviar la solicitud usando REST client con las siguiente estructura:
    1. obtencion de todos los productos

        GET http://localhost:<-puerto->/productos/

    2. obtencion de un producto por su id

        GET http://localhost:<-puerto->/productos/<-id->

    3. creacion de nuevo producto

        POST http://localhost:<-puerto->/productos/
        Content-Type: application/json

        {
        "id": <-numero->,
        "nombre": <-string->,
        "precio": <-numero positivo->,
        "descripcion": <-string mayor a 10 caracteres->,
        "disponible": <-booleano->
        }

    4. actualizacion de un producto

        PUT http://localhost:<-puerto->/productos/<-id->
        Content-Type: application/json

        {
        "nombre": <-string->,
        "precio": <-numero positivo->,
        "descripcion": <-string mayor a 10 caracteres->,
        "disponible": <-booleano->
        }

    5. eliminar un producto

        DELETE http://localhost:<-puerto->/productos/<-id->

    6. obtencion de los productos disponibles

        GET http://localhost:<-puerto->/productos/disponibles