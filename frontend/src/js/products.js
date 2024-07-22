
const API = "http://localhost:3000/api/v1/products";
const productosPromise = fetch(API);
let itemsProducts= document.getElementById("list-products");

productosPromise
.then(function(data)
{ 
    return data.json(); 

})
.then(function(data)
{
    addItem(data)

})
.catch(function(error)
{
    console.log(error);

})/* productosPromise */


function addItem(products){
  if (typeof products === 'object' && products !== null && Array.isArray(products.productos)) {
    products = products.productos; 
  }
  products = Array.isArray(products) ? products : [];
        products.forEach(function(item){
          let other = format(item.costo)
          itemsProducts.innerHTML +=`
          <br><div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" >
                <div class="card " style="height: 650px;">
                  <img src="${item.img}" class="card-img-top" height= "50%" alt="...">
                   <div class="card-body" margin-bottom= "15px">
                      <center><h5 class="card-title" style="font-weight: 600;">${item.nombre}</h5>
                      <p class="card-text">Presentación</p>
                      <p class="card-text">${item.cantidad} ml</p>
                      <p class="card-text">$${other} MXN</p> </center><br>
                      <center><a type="button" onclick="redirect(${item.id_perfume})" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#qwerty" style="background-color: #978a67; border: 5px outset #5c4e26;">Detalles</a></center>
                    </div>
                </div><br>
              </div>
          <br>
          `
          let element = {
            id:item.id_perfume,
            name:item.nombre,
            img: item.img,
            size: item.cantidad,
            precio: item.costo,
          }
          localStorage.setItem(item.id_perfume, JSON.stringify(element));
        })
        
}//function

function redirect(x){
    setTimeout(function(){
        location.href = `./details.html?id=${x}`;
    },1000);

}/* redirect */
        
function format(num){
        if(num < 1000){
          return num;
        }else if(!isNaN(num)){
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1,');
        num = num.split('').reverse().join('').replace(/^[\.]/,'');
        return num;
        }
}/* format */  
      
function alertDescription(description){
    Swal.fire({
      title: '<strong>Descripción</strong>',
      icon: 'info',
      html:
        `${description.value}`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
    })
}/* alertDescription */
