# ecommerce-luar

El proyecto de ecommerce está elaborado en React Js. conectado a Firebase / Firestore.
Funcionalidades:
Es navegable en home y muestra todos los productos disponibles con imagen, nombre y un botón de características.
Además se puede navegar por cada categoria : Sal, Salsas, Azucar, Té y Cerámica.
Al navegar características de producto muestra el detalle: imagen y nombre nuevamente, precio, stock, descripción y selección de cantidad de productos a comprar.
Luego de seleccionar la cantidad de productos, al clickear "Agregar al carrito" se cargará la cantidad de productos en la sección carrito y cambiará el botón por "ir al carrito" para poder ver los productos agregados hasta el momento.
Allí se podrá ver los productos seleccionados, costo total, se podrán eliminar individualmente los productos mediante el botón "eliminar" o todos juntos mediante el botón "vaciar carrito" y pedido de datos para generar la compra. Además cuenta con el botón "terminar compra" para generar el ID de la misma. En caso cart no tenga productos, mostrará un mensaje de "carrito vacío".
Las colecciones creadas en firestore son orders y productos.
Solamente se le dio estilos al navbar mediante css pero una vez que su funcionamiento sea el óptimo se dará estilos a toda la página incluyendo también Bootstrap.

