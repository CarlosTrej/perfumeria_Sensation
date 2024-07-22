document.addEventListener('DOMContentLoaded', function () {
    // Creamos un contenedor <div> para el footer
    var footerContainer = document.createElement('div');
    // Utilizamos fetch para obtener el contenido del archivo footer.html
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            // Insertamos el contenido en el contenedor
            footerContainer.innerHTML =`    
            <footer>
            <div class="container_footer">
                <div class="box__footer">
                    <div class="logo">
                      <a href="../index.html">     
                        <span class='bi bi-house-door-fill'></span>
                      </a>
                    </div>
                    <div class="terms">
                    </div>
                </div>
                <div class="box__footer">
                    <h2><a href="../index.html"style="text-decoration: none;"> Nosotros</a></h2>
                    
                </div>
                <div class="box__footer">
                    <h2><a href="/pages/products.html" style="text-decoration: none;"> Productos</a> </h2>
                </div><br>
                <div class="box__footer">
                    <h2>Redes Sociales</h2>
                    <a href="#"><i class="bi bi-facebook" style="width: 10%; height: 10%"></i></a>
                    <a href="#"><i class="bi bi-instagram" style="width: 10%; height: 10%"></i></a>
                </div>
            <div class="box__copyright">
                <hr>
                <p>Todos los derechos reservados &copy<b> Sensation.com</b></p>
            </div>
          </footer>`;
            // Agregamos el contenedor al final del body
            document.body.appendChild(footerContainer);
        })
        .catch(error => console.error('Error al cargar el footer:', error));
});