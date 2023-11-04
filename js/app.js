console.log("El archivo javascript ya está importado");
const urlApi="https://prodpagfin-4e9a.restdb.io/rest/producto?apikey=65449c448d9cf6ad37753303";
const appproductos = {
    listarProductos: ()=>{
        const contenedor=document.getElementById("contenedorProductos");
        let contenidoHTML="";
        fetch(urlApi).then(respuesta=>respuesta.json()).then(productos=>{
            console.log(productos);
            for(const producto of productos){
                contenidoHTML +=`
                <div>
                    <img src="${producto.imagen}" class="img-thumbnail"/>
                    <h4>${producto.nombre}</h4>
                    <h5>$ ${producto.costo}</h5>
                    <details>
                        <summary>Descripción</summary>
                        ${producto.descripcion}
                        </details>
                        <a href="#" onclick="appproductos.editarProducto('${producto._id}')">Editar</a>
                        <a href="#" onclick="appproductos.eliminarProducto('${producto._id}','${producto.nombre}')">Eliminar</a>
                </div>
                    `;
            };
            console.log(contenidoHTML)
            contenedor.innerHTML=contenidoHTML;
        })
    },
    
    eliminarProducto: (idAEliminar,nombreABorrar)=>{
        Swal.fire({
          title: `¿Está seguro que desea borrar al producto ${nombreABorrar}`,
          text: "No podrás revertir esta operación",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Si, quiero borrarlo!'
        }).then((result) => {
          if (result.isConfirmed) { 
            const urlApi=`https://prodpagfin-4e9a.restdb.io/rest/producto/${idAEliminar}?apikey=65449c448d9cf6ad37753303`;
        fetch(urlApi, {
          method: 'DELETE'
          })
          .then(response => {
            console.log(response);
            return appproductos.listarProductos();
          }).then(response =>{
            Swal.fire(
              'Eliminado!',
              `El producto ${nombreABorrar} fue borrado .`,
              'satisfactoriamente'
            )
          });
          }
        })
      },

    guardarProducto: ()=>{
        const txtId=document.getElementById("txtId")
        const txtNombre=document.getElementById("txtNombre")
        const txtCosto=document.getElementById("txtCosto")
        const txtImagen=document.getElementById("txtImagen")
        const txtDescripcion=document.getElementById("txtDescripcion")
        let urlApi='';
        let methodHttp='';

        if(txtId.value==='') {
            urlApi="https://prodpagfin-4e9a.restdb.io/rest/producto/${idAEliminar}?apikey=65449c448d9cf6ad37753303";
            methodHttp="POST";
        }
        else{ 
            urlApi=`https://prodpagfin-4e9a.restdb.io/rest/producto/${txtId.value}?apikey=65449c448d9cf6ad37753303`;
            methodHttp="PUT";
        }
        const ProductoAGuardar={
        "costo": txtCosto.value,
        "nombre": txtNombre.value,
        "imagen": txtImagen.value,
        "descripcion": txtDescripcion.value
    };
    console.log(ProductoAGuardar)
    fetch(urlApi, {
        method:methodHttp,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ProductoAGuardar)
    })
    .then(response=> {
        console.log(response);
        window.location.href="index.html";
    });
    console.log(ProductoAGuardar)
},



editarProducto:(idProductoAEditar)=>{ 
    const urlApi=`https://prodpagfin-4e9a.restdb.io/rest/producto/${idProductoAEditar}}?apikey=65449c448d9cf6ad37753303`;

    fetch(urlApi
        ).then(res => res.json())
          .then(producto => {
            document.getElementById("txtId").value=producto._id;
            document.getElementById("txtNombre").value=producto.nombre;
            document.getElementById("txtCosto").value=producto.costo;
            document.getElementById("txtImagen").value=producto.imagen;
            document.getElementById("txtDescripcion").value=producto.descripcion;
            const ventanaEditar=document.getElementById(`agregarEditarModal`);
            let ventana=new bootstrap.Modal(ventanaEditar);
            ventana.show(); 
        });
        }
}
appproductos.listarProductos();