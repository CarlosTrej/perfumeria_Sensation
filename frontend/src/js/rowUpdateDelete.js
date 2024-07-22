    


    async function getProduct() {
        const productId = document.getElementById('productId').value;
        try {
            const response = await fetch(`http://localhost:3000/api/v1/products/${productId}`);
            const data = await response.json();
    
            if (response.ok) {
                clearProductDetails();
                const productDetails = document.getElementById('productDetails');
                
                if (data.id_perfume !== undefined && data.nombre !== undefined && data.costo !== undefined && data.cantidad !== undefined && data.img !== undefined) {
            productDetails.innerHTML = `
                <p data-original-value="${data.id_perfume}"><strong>ID: </strong> <span class="editable" contenteditable="false">${data.id_perfume}</span></p>
                <img src="${data.img}" alt="Product Image" style="max-width: 100px;">
                <p data-original-value="${data.nombre}"><strong>Nombre: </strong> <span class="editable" contenteditable="true" style="display: inline-block; text-align: center;">${data.nombre}</span></p>
                <p data-original-value="${data.costo}"><strong>Costo: </strong> <span class="editable" contenteditable="true" style="display: inline-block; text-align: center;">${data.costo}</span></p>
                <p data-original-value="${data.cantidad}"><strong>Cantidad: </strong> <span class="editable" contenteditable="true" style="display: inline-block; text-align: center;">${data.cantidad}</span></p>
            `;
            document.getElementById('productCard').style.display = 'block';
        } else {
            showAlert('error', 'No hay productos con ese identificador.');
        }
            } else {
                showAlert('error', `Error: ${data.message}`);
            }
        } catch (error) {
            showAlert('error', 'Error de red. Inténtalo de nuevo.');
        }
    }
    
    
    
    function showAlert(type, message) {
        // Puedes personalizar la lógica para mostrar alertas aquí
        console.error(`${type}: ${message}`);
        // Por ejemplo, puedes usar una librería como SweetAlert para mostrar alertas visuales.
    }
    
    
    async function deleteProduct() {
                const productId = document.getElementById('productId').value;
                const confirmDelete = await Swal.fire({
                    title: '¿Estás seguro?',
                    text: `¿Quieres eliminar el producto con ID ${productId}?`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Sí, eliminar'
                });
    
                if (confirmDelete.isConfirmed) {
                    try {
                        const response = await fetch(`http://localhost:3000/api/v1/products/${productId}`, {
                            method: 'DELETE'
                        });
                        const data = await response.json();
    
                        if (response.ok) {
                            showAlert('success', data.message);
                            clearProductDetails();
                            document.getElementById('productCard').style.display = 'none';
                        } else {
                            showAlert('error', `Error: ${data.message}`);
                        }
                    } catch (error) {
                        showAlert('error', 'Error de red. Inténtalo de nuevo.');
                    }
                }
            }
    
    
            
    
    //EDITAR CAMPOS
    function createInputField(value, editable) {
        const input = document.createElement('input');
        input.value = value;
        input.readOnly = !editable; 
        input.style.display = 'inline-block';
        input.style.textAlign = 'center';
        return input;
    }
    
    function editProduct() {
        const productDetails = document.getElementById('productDetails');
        const fields = productDetails.querySelectorAll('p');
    
        const labels = ['ID', 'Nombre', 'Costo', 'Cantidad', 'Imagen'];
    
        fields.forEach((field, index) => {
            const label = document.createElement('label');
            label.textContent = labels[index];
            label.style.display = 'block'; 
            const text = field.textContent.split(': ')[1];
    
            const editable = index !== 0; 
            const originalValue = field.getAttribute('data-original-value');
            const element = createInputField(editable ? originalValue : text, editable);
    
            field.innerHTML = '';
            field.appendChild(label);
            field.appendChild(element);
        });
    
        const editButton = document.querySelector('.btn-warning');
        editButton.textContent = 'Guardar Cambios';
        editButton.onclick = saveChanges;
    }
    
    //EDITAR CAMPOS
    async function saveChanges() {
        const productId = document.getElementById('productId').value;
        const productDetails = document.getElementById('productDetails');
        const inputs = productDetails.querySelectorAll('input');
    
        const updatedProduct = {
            nombre: inputs[1].value,
            costo: inputs[2].value,
            cantidad: inputs[3].value,
            // No incluir img en los datos actualizados
        };
    
        try {
            const response = await fetch(`http://localhost:3000/api/v1/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            });
    
            if (response.ok) {
                const data = await response.json();
                showAlert('success', data.message);
                clearProductDetails();
                document.getElementById('productCard').style.display = 'none';
            } else {
                const errorData = await response.json();
                showAlert('error', `Error (${response.status}): ${errorData.message}`);
            }
        } catch (error) {
            showAlert('error', 'Error de red. Inténtalo de nuevo.');
        }
    }
    
            function showAlert(icon, text) {
                Swal.fire({
                    icon: icon,
                    text: text,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
    
            function clearProductDetails() {
        const productDetails = document.getElementById('productDetails');
        const fields = productDetails.querySelectorAll('p');
    
        fields.forEach((field) => {
            const text = field.textContent.split(': ')[1];
            const element = createInputField(text, false); // Utiliza false para que los campos no sean editables
            field.innerHTML = '';
            field.appendChild(element);
        });
    
        const editButton = document.querySelector('.btn-warning');
        editButton.textContent = 'Editar Producto';
        editButton.onclick = editProduct; // Vuelve a asignar la función original al botón de edición
    }


    