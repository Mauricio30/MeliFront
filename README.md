# Iniciar el proyecto

## Scripts disponibles

En del directorio del proyecto, puedes ejecutar:

### `npm start`

Corre la aplicación en modo desarrollador
Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.
## Endpoints habilitados

http://localhost:3000/ => ruta de entrada.

http://localhost:3000/items?search=:q => buscar lista de productos, ejemplo: http://localhost:3000/items?search=Mesa.

http://localhost:3000/items/:item => buscar producto especifico, ejemplo http://localhost:3000/items/MLA919632701

Para que el proyecto pueda llamar a los servicios correctamente se debe iniciar el server de este repositorio [MeliBack](https://github.com/Mauricio30/meli-back)
