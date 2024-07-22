
  function searchSesion() {
    let sesion = sessionStorage.getItem('sesion');
    return sesion;
  }
  
  window.onload = function () {
    const idsesion = searchSesion();
    initSesion(idsesion);
  } /* window.onload */
  
  function initSesion(idsesion) {
    let iconSesion = document.getElementById("sesiontools");
    if (searchSesion() != null) {
      let isAdmin = sessionStorage.getItem('adminSesion');
  
      if (isAdmin  != null) {
        // Vista para administrador
        console.log("vista admin");
        iconSesion.innerHTML=`
        <a class="navbar-brand" href="./../index.html">
            <img src="/src/images/logo.png" width="50" height="50" class="d-inline-block align-top" alt="">
            Sensation</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
            <a class="nav-link" href="./../index.html">Administrador<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
            <a class="nav-link" href="./contacto_form.html">Contacto</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Productos
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="./products.html">
                <p class ="opcionesNavBar">Perfumes</p></a>
                </div>
            </li>
       
        </ul>
        <form class="form-inline my-2 my-lg-0" id="formBlack" style="color: black;">
        <ul class="nav-item active dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:xlarge; color: black;">
            Bienvenido
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="nav-link" type="submit" id="navbarScrollingDropdow" href="./addcard.html?usuarioactivo=${idsesion}" style="font-size:large; color: black;">
              <p class ="opcionesNavBar">Agregar Nuevo Producto</p>
            </a>
            <a class="nav-link"href="./rowUpdateDelete.html" >
                <p class ="opcionesNavBar">Gestionar Productos</p>
            </a>
            <a style=" font-size: 1.2em; cursor: pointer; color:black;" class="nav-link" type="click" id="cerrarsesion" style="font-size:large; color: black;">
                <p class ="opcionesNavBar">Cerrar Sesión</p>
            </a>
            <a class="nav-link"href="./carritoCompras.html" >
                <p class ="opcionesNavBar"><p class ="opcionesNavBar">Compras</p><i id="icono" class="bi bi-cart4"></i> 
            </a>
            </div>
            </ul>
            <ul class="nav-item active">
            
            </ul>
        </form>
        </div>`;
      } else {
        // Vista para usuario normal
        console.log("vista usuario normal");
        iconSesion.innerHTML=`
        <a class="navbar-brand" href="./../index.html">
            <img src="/src/images/logo.png" width="50" height="50" class="d-inline-block align-top" alt="">
            Sensation</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
            <a class="nav-link" href="./../index.html">Inicio <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
            <a class="nav-link" href="./contacto_form.html">Contacto</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Productos
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="./products.html">
                <p class ="opcionesNavBar">Perfumes</p></a>
                </div>
            </li>
       
        </ul>
        <form class="form-inline my-2 my-lg-0" id="formBlack" style="color: black;">
        <ul class="nav-item active dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size:xlarge; color: black;">
            Bienvenido
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                </a>
            <a style=" font-size: 1.2em; cursor: pointer; color:black;" class="nav-link" type="click" id="cerrarsesion" style="font-size:large; color: black;">
                <p class ="opcionesNavBar">Cerrar Sesión</p>
            </a>
            <a class="nav-link"href="./carritoCompras.html" >
                <p class ="opcionesNavBar"><p class ="opcionesNavBar">Compras</p><i id="icono" class="bi bi-cart4"></i> </a>
            </div>
            </ul>
            <ul class="nav-item active">
            
            </ul>
        </form>
        </div>`;
      }//else
  
      let button = iconSesion.querySelector("#cerrarsesion");
      if (button.getAttribute('listener') !== 'true') {
        button.addEventListener('click', function (e) {
          alertmodall()
        })
      }
    } else {
        console.log("vista sin registro");
        iconSesion.innerHTML=`
            <a class="navbar-brand" href="../index.html">
            <img src="../src/images/logo.png" width="50" height="50" class="d-inline-block align-top" alt="">
        Sensation</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
            <a class="nav-link" href="../index.html">Inicio <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
            <a class="nav-link" href="contacto_form.html">Contacto</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Productos
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="products.html"><p class ="opcionesNavBar">Perfumes</p></a>
                </div>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            
            <ul class="nav-item active dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i   id ="icono" class="bi bi-people-fill"></i>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="logIn.html"><p class ="opcionesNavBar">Inicia sesión</p></a>
                <a class="dropdown-item" href="registro.html"><p class ="opcionesNavBar">Registro</p></a>
                </div>
            </ul>
        </form>
        </div>`;
    }
  } /* initSesion */
  
  function alertmodall() {
    Swal.fire({
      title: '¿Quieres cerrar tu sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0E8784',
      cancelButtonColor: 'black',
      confirmButtonText: 'Cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Haz cerrado sesión');
        sessionStorage.removeItem('sesion');
        sessionStorage.removeItem('adminSesion');
        location.href = "./../index.html";
      }
    });
  }
  
  