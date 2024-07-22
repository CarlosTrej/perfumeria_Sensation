



let form = document.querySelector("#add-form");
cloud();
let cloudImage;
                        
function cloud (){
    let myWidget = cloudinary.createUploadWidget({
        cloudName: 'rookiesquad', 
        uploadPreset: 'vmuljc8k'}, (error, result) => { 
          if (!error && result && result.event === "success") { 

            cloudImage = JSON.stringify(result.info.secure_url) 
            
          }
        }
      )
      document.getElementById("upload_widget").addEventListener("click", function(){
          myWidget.open();
        }, false);
}

form.addEventListener("submit",function(e){

  e.preventDefault();
  let addLocalStorage =[];
  addLocalStorage.length
  let nombre = document.getElementById("name");
  
  let tamano = document.getElementById("size");
  let precio = document.getElementById("price");
  let precio_number = parseFloat(precio.value);

  if(nombre.value.length == 0){
      alertModal("El campo nombre no puede quedar vacío");
  }else{
         
        if(precio_number <=0){
            alertModal("Verifíca el precio del producto");
          }else{
        if(cloudImage == null){
            //alertModal("Se necesita una imagen.")
        }else{
          fetch('http://localhost:3000/api/v1/products', {
            method: 'POST',
            body: JSON.stringify({
                "nombre": nombre.value,
                "costo": precio.value,
                "cantidad": tamano.value,
                "img": cloudImage.replace('\"', '')
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(resp => resp.json())  // Agrega esto para parsear la respuesta JSON
            .then(data => {
                console.log(data);  // Imprime la respuesta en la consola
                validTrue();
                clear(nombre, tamano, precio);
                setTimeout(function() {
                  location.reload();
              }, 3000);
            })
            .catch(function (error) {
              console.error(error);
              res.status(500).json({ message: 'No se pudo crear el producto.', error: error });
            });

                  }
              }
          }
  

});/* form addEventlistener *//* validaciones */

function validTrue(){
  Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Nuevo producto añadido.',
      showConfirmButton: false,
      timer: 1500
    })
}/*  validTrue */

function alertModal(text){
  Swal.fire({
      title: 'Alerta',
      text: `¡${text}!`,
      icon: 'warning',
      cancelButtonColor: '#d33',
      cancelButtonText: "Okay"
    })
}/* function alertModal */

function clear(nombre ,tamano, precio){
  nombre.value = "";
  tamano.value = "";
  precio.value = "";
}/* clear */
