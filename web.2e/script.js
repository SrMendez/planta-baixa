document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('denunciaForm');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Crear mensaje de éxito
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = '✅ ¡Denuncia enviada correctamente! Será revisada antes de publicarse.';
    form.insertBefore(successMessage, form.firstChild);
    
    // Manejar envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica
        if (!validateForm()) {
            return;
        }
        
        // Mostrar estado de carga
        showLoading();
        
        // Simular envío (reemplazar con Formspree)
        setTimeout(() => {
            showSuccess();
            resetForm();
        }, 2000);
        
        // Para Formspree real, descomenta esto:
        // submitToFormspree();
    });
    
    function validateForm() {
        const despacho = document.getElementById('despacho').value.trim();
        const ciudad = document.getElementById('ciudad').value;
        const experiencia = document.getElementById('experiencia').value.trim();
        
        if (!despacho) {
            alert('Por favor, introduce el nombre del despacho');
            return false;
        }
        
        if (!ciudad) {
            alert('Por favor, selecciona una ciudad');
            return false;
        }
        
        if (!experiencia || experiencia.length < 20) {
            alert('Por favor, describe tu experiencia con al menos 20 caracteres');
            return false;
        }
        
        return true;
    }
    
    function showLoading() {
        form.classList.add('loading');
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
    }
    
    function showSuccess() {
        form.classList.remove('loading');
        successMessage.style.display = 'block';
        submitButton.textContent = 'Enviar Denuncia';
        submitButton.disabled = false;
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth' });
    }
    
    function resetForm() {
        form.reset();
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
    
    // Función para envío real con Formspree
    function submitToFormspree() {
        const formData = new FormData(form);
        
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showSuccess();
                resetForm();
            } else {
                throw new Error('Error en el envío');
            }
        })
        .catch(error => {
            form.classList.remove('loading');
            submitButton.textContent = 'Enviar Denuncia';
            submitButton.disabled = false;
            alert('Error al enviar la denuncia. Por favor, inténtalo de nuevo.');
            console.error('Error:', error);
        });
    }
    
    // Contador de caracteres para textarea
    const experienciaTextarea = document.getElementById('experiencia');
    const charCounter = document.createElement('small');
    charCounter.style.display = 'block';
    charCounter.style.textAlign = 'right';
    charCounter.style.color = '#6c757d';
    experienciaTextarea.parentNode.appendChild(charCounter);
    
    experienciaTextarea.addEventListener('input', function() {
        const length = this.value.length;
        charCounter.textContent = `${length}/1000 caracteres`;
        
        if (length > 950) {
            charCounter.style.color = '#dc3545';
        } else if (length > 800) {
            charCounter.style.color = '#ffc107';
        } else {
            charCounter.style.color = '#6c757d';
        }
    });
});

// Funciones adicionales para futuras mejoras
function addNewDenuncia(data) {
    const denunciasSection = document.querySelector('.denuncias-section');
    const newCard = document.createElement('div');
    newCard.className = 'denuncia-card';
    
    newCard.innerHTML = `
        <h3>Estudio *** (${data.ciudad})</h3>
        <p><strong>Salario:</strong> €${data.salario || 'No especificado'}/hora</p>
        <p>"${data.experiencia}"</p>
    `;
    
    denunciasSection.appendChild(newCard);
}

// Función para filtrar denuncias (para futuras mejoras)
function filterDenuncias(ciudad, salario) {
    const cards = document.querySelectorAll('.denuncia-card');
    
    cards.forEach(card => {
        let show = true;
        
        if (ciudad && !card.textContent.includes(ciudad)) {
            show = false;
        }
        
        if (salario) {
            // Implementar lógica de filtro por salario
        }
        
        card.style.display = show ? 'block' : 'none';
    });
} 