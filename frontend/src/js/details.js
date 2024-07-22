

let itemsProducts= document.getElementById("list-products-details");
let buttonCar = document.getElementById("button-id");


function serachURL(){

    let URL = location.search;
    let params = new URLSearchParams(URL);
    let idParam = params.get("id");
    return idParam;

}

window.onload = function(){
    const idsesion = searchSesion();
    initSesion(idsesion);
    const idProducto = serachURL();
    
    if(idProducto==null){
      console.log(idProducto)
      location.href="./products.html"
    }else{
      let iD= JSON.parse(localStorage.getItem(idProducto));
      addItem(iD)
    }

}/* window.onload */



function addItem(iD){
  
  
      itemsProducts.innerHTML =`
      <br>
      <div class="g-col-1 col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
      <div class="g-col-4 col-sm-12 col-md-5 col-lg-4 col-xl-4" id="content-detail"><br>
          <h3 class="card-title"><b>${iD.name}</b></h3><br><br>
          <h4 class="card-title"><b>Presentación</b></h4><br>
          <h4 class="card-title">${iD.size}</h4><br>
          <br> 
          <h4 class="card-text">$${iD.precio} Mxn</h4><br>
          <a type="submit" onclick="redirectCar(${iD.id})"  class="btn btn-success" data-bs-toggle="modal" data-bs-target="#qwerty" style="background-color: #978a67;   border: 5px outset #5c4e26;">
              <b>Agregar al carrito</b>
          </a>   
      </div>  
      <div class="g-col-7 col-sm-12 col-md-6 col-lg-7 col-xl-7" >
        <img src="${iD.img}" id="img-detail" class="card-img-top" height= "550px">
      </div>
       
      `
  }//function

  function redirectCar(x){

    searchSesion();
    if(searchSesion() == null){
      alertModal("Necesitas logearte para poder comprar");
      setTimeout(function(){
        location.href = `./products.html`;
      },3000);
    }else{
      setTimeout(function(){
        location.href = `./carritoCompras.html?id=${x}`;
      },500);
    }

}/* redirect */

function alertModal(text){
  Swal.fire({
      title: 'Inicia Sesión',
      text: `¡${text}!`,
      icon: 'warning',   
      showConfirmButton: false,
      timer: 2500,
      
      
    })
}/* function alertModal */
