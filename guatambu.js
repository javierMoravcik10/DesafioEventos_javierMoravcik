const btn = document.querySelector("#btnComprar");
const felicitar = document.querySelector("#felicitar");


class Producto {
        constructor(articuloMarca, imagen, precio, detalle, comprar1, coleccion) {
            this.articuloMarca = articuloMarca;
            this.imagen = imagen;
            this.precio = precio;
            this.detalle = detalle;
            this.comprar1 = comprar1;
            this.coleccion = coleccion;
        }
      }
      
      const productos = [
        new Producto("Medias-Soquetes", "./Imagenes/soquetes.jpg", "$2300", "Producto 80% algodón, 20% lycra.", "Felicitaciones, compra realizada", "Coleccion invierno 2022"),
        new Producto("Pantalon-Joggin", "./Imagenes/item20482foto93379th.jpg", "$7300", "Producto 100% algodón peruano", "Felicitaciones, compra realizada", "Coleccion invierno 2021/2022"),
        new Producto("Remera-Cuello Base", "./Imagenes/item21268foto94870th.jpg", "$6599", "Producto 100% algodón peruano", "Felicitaciones, compra realizada", "Coleccion verano 2022")
      ]
      
      function mostrarDetalle(producto){
      
        const contenedorProductos = document.getElementById("contenedorDeProductos");
        contenedorProductos.innerHTML = "";
      
        contenedorDeProductos.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.articuloMarca}">
          <h3>${producto.articuloMarca}</h3>
          <p>Precio: ${producto.precio}</p>
          <p>${producto.detalle}</p>
          <p>${producto.coleccion}</p>         
        `;
      }

      function crearBotonVolver(){
        const botonVolver = document.createElement("button");
        botonVolver.classList.add("boton-volver");
        botonVolver.innerText = "Volver";
        botonVolver.addEventListener("click", () => {
          mostrarProductos(productos);
        }
        )
        document.getElementById("contenedorDeProductos").prepend(botonVolver);
      }
      
      function crearBotonVerDetalle(producto){
        const buttonVD = document.createElement("button");
        buttonVD.classList.add("boton-VerDetalle");
        buttonVD.innerText = "Ver detalles";
        buttonVD.addEventListener("click", () => {
            mostrarDetalle(producto);
            crearBotonVolver();
          })
        return buttonVD;
      }

      
      function comprarProducto(producto){
              
        const contenedorProductos = document.getElementById("contenedorDeProductos");
        contenedorProductos.innerHTML = "";
      
          const divProducto2 = document.createElement("div");
          divProducto2.classList.add("producto");
        contenedorDeProductos.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.articuloMarca}">
        <h3>Usted compro este producto por: ${producto.precio}</h3>
        <h4>${producto.comprar1}</h4>         
        `;
      }

      function crearBotonComprarProducto(producto){
        const buttonCP = document.createElement("button");
        buttonCP.classList.add("botonComprarProducto");
        buttonCP.innerText = "Comprar Producto";
        buttonCP.addEventListener("click", () => {
            comprarProducto(producto);
            crearBotonVolver();
          })
        return buttonCP;
      }


      function mostrarProductos(productos) {
      
        const contenedorProductos =  document.getElementById("contenedorDeProductos");
        contenedorProductos.innerHTML = "";
      
        productos.forEach(producto => {
          const divProducto = document.createElement("div");
          divProducto.classList.add("producto");
          divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.articuloMarca}">
            <h3>${producto.articuloMarca}</h3>
            <p>Precio: ${producto.precio}</p>
          `;
          

          const botonVerDetalle = crearBotonVerDetalle(producto)
          divProducto.appendChild(botonVerDetalle);         
          const botonComprarProducto = crearBotonComprarProducto(producto)
          divProducto.appendChild(botonComprarProducto);     
          contenedorDeProductos.appendChild(divProducto);
        })
      }
      
      mostrarProductos(productos);


                  


btnComprar.addEventListener("click", (e) => {
  const texto = document.createElement("p");
  texto.innerText = "Compraste el producto";

  felicitar.append(texto)

})
