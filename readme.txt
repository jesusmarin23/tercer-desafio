http://localhost:8080/products : devolverá todos los 10 productos.

http://localhost:8080/products?limit=5 : devolverá sólo los primeros 5 de los 10 productos.

http://localhost:8080/products/2 : devolverá sólo el producto con id=2.

http://localhost:8080/products/34123123 : al no existir el id del producto, este devolverá un objeto con un error indicando que el producto no existe.