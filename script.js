document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('experienciaForm');
    const submitButton = form.querySelector('button[type="submit"]');
    const searchInput = document.getElementById('search');
    const salariFilter = document.getElementById('filter-salari');
    const valoracioFilter = document.getElementById('filter-valoracio');
    
    // Crear mensaje de éxito
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = 'Experiència enviada correctament. Serà revisada abans de ser publicada.';
    form.insertBefore(successMessage, form.firstChild);
    
    // Manejar envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        showLoading();
        
        // Simular envío (reemplazar con Formspree real)
        setTimeout(() => {
            showSuccess();
            resetForm();
        }, 2000);
        
        // Para Formspree real, descomenta esto:
        // submitToFormspree();
    });
    
    // Validación del formulario
    function validateForm() {
        const despatx = document.getElementById('despatx').value.trim();
        const salari = document.getElementById('salari').value;
        const valoracio = document.getElementById('valoracio').value;
        const experiencia = document.getElementById('experiencia').value.trim();
        
        if (!despatx) {
            alert('Si us plau, introdueix el nom del despatx');
            return false;
        }
        
        if (!salari || salari <= 0) {
            alert('Si us plau, introdueix un salari vàlid');
            return false;
        }
        
        if (!valoracio) {
            alert('Si us plau, selecciona una valoració');
            return false;
        }
        
        if (!experiencia || experiencia.length < 20) {
            alert('Si us plau, descriu la teva experiència amb almenys 20 caràcters');
            return false;
        }
        
        return true;
    }
    
    function showLoading() {
        form.classList.add('loading');
        submitButton.textContent = 'Enviant...';
        submitButton.disabled = true;
    }
    
    function showSuccess() {
        form.classList.remove('loading');
        successMessage.style.display = 'block';
        submitButton.textContent = 'Enviar';
        submitButton.disabled = false;
        
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
            submitButton.textContent = 'Enviar';
            submitButton.disabled = false;
            alert('Error al enviar l\'experiència. Si us plau, intenta-ho de nou.');
            console.error('Error:', error);
        });
    }
    
    // Contador de caracteres para textarea
    const experienciaTextarea = document.getElementById('experiencia');
    const charCounter = document.createElement('small');
    charCounter.style.display = 'block';
    charCounter.style.textAlign = 'right';
    charCounter.style.color = '#999';
    charCounter.style.marginTop = '0.5rem';
    charCounter.style.fontSize = '13px';
    charCounter.style.fontWeight = '300';
    experienciaTextarea.parentNode.appendChild(charCounter);
    
    experienciaTextarea.addEventListener('input', function() {
        const length = this.value.length;
        charCounter.textContent = `${length}/1000 caràcters`;
        
        if (length > 950) {
            charCounter.style.color = '#000';
        } else if (length > 800) {
            charCounter.style.color = '#666';
        } else {
            charCounter.style.color = '#999';
        }
    });
    
    // Filtros y búsqueda
    function filterDespachos() {
        const searchTerm = searchInput.value.toLowerCase();
        const salariRange = salariFilter.value;
        const valoracioSelected = valoracioFilter.value;
        
        const articles = document.querySelectorAll('.despacho');
        
        articles.forEach(article => {
            let show = true;
            
            // Filtro por búsqueda
            if (searchTerm) {
                const despachoName = article.querySelector('h2').textContent.toLowerCase();
                if (!despachoName.includes(searchTerm)) {
                    show = false;
                }
            }
            
            // Filtro por salario
            if (salariRange && show) {
                const salari = parseFloat(article.dataset.salari);
                switch (salariRange) {
                    case '0-3':
                        if (salari > 3) show = false;
                        break;
                    case '3-6':
                        if (salari <= 3 || salari > 6) show = false;
                        break;
                    case '6-10':
                        if (salari <= 6 || salari > 10) show = false;
                        break;
                    case '10+':
                        if (salari <= 10) show = false;
                        break;
                }
            }
            
            // Filtro por valoración
            if (valoracioSelected && show) {
                const valoracio = article.dataset.valoracio;
                if (valoracio !== valoracioSelected) {
                    show = false;
                }
            }
            
            // Mostrar/ocultar artículo
            article.style.display = show ? 'block' : 'none';
        });
    }
    
    // Event listeners para filtros
    searchInput.addEventListener('input', filterDespachos);
    salariFilter.addEventListener('change', filterDespachos);
    valoracioFilter.addEventListener('change', filterDespachos);
    
    // Inicializar contador de caracteres
    if (experienciaTextarea.value) {
        experienciaTextarea.dispatchEvent(new Event('input'));
    }
});

// Función para expandir/contraer comentarios
function toggleComentaris(button) {
    const article = button.closest('.despacho');
    const comentaris = article.querySelector('.comentaris');
    const isVisible = comentaris.style.display !== 'none';
    
    if (isVisible) {
        comentaris.style.display = 'none';
        button.textContent = 'Veure experiències';
    } else {
        comentaris.style.display = 'block';
        button.textContent = 'Amagar experiències';
    }
}

// Función para añadir nuevo despacho
function addNewDespacho(data) {
    const despachos = document.querySelector('.despachos');
    const newArticle = document.createElement('article');
    newArticle.className = 'despacho';
    newArticle.dataset.salari = data.salari;
    newArticle.dataset.valoracio = data.valoracio;
    
    const valoracioText = data.valoracio === 1 ? 'Molt dolent' : 
                         data.valoracio === 2 ? 'Dolent' :
                         data.valoracio === 3 ? 'Acceptable' :
                         data.valoracio === 4 ? 'Bon' : 'Excel·lent';
    
    newArticle.innerHTML = `
        <header class="despacho-header">
            <h2>${data.despatx}</h2>
            <div class="meta">
                <span class="salari">${data.salari}€/h</span>
                <span class="valoracio">${data.valoracio}/5</span>
                <span class="comentaris">1 experiència</span>
                <span class="location">Nova</span>
            </div>
        </header>
        
        <div class="preview">
            <p>"${data.experiencia.length > 150 ? data.experiencia.substring(0, 150) + '...' : data.experiencia}"</p>
        </div>
        
        <button class="toggle" onclick="toggleComentaris(this)">
            Veure experiències
        </button>
        
        <div class="comentaris" style="display: none;">
            <div class="comentari">
                <div class="comentari-meta">
                    <span class="valoracio-num">${data.valoracio}/5</span>
                    <span class="salari-comentari">${data.salari}€/h</span>
                    <span class="data">Ara mateix</span>
                    <span class="tipus">${data.tipus || 'Experiència'}</span>
                </div>
                <p>${data.experiencia}</p>
            </div>
        </div>
    `;
    
    despachos.appendChild(newArticle);
}

// Función para añadir comentario a despacho existente
function addComentariToDespacho(despachoName, data) {
    const articles = document.querySelectorAll('.despacho');
    let targetArticle = null;
    
    articles.forEach(article => {
        const h2 = article.querySelector('h2');
        if (h2.textContent.toLowerCase().includes(despachoName.toLowerCase())) {
            targetArticle = article;
        }
    });
    
    if (targetArticle) {
        const comentaris = targetArticle.querySelector('.comentaris');
        const newComentari = document.createElement('div');
        newComentari.className = 'comentari';
        
        newComentari.innerHTML = `
            <div class="comentari-meta">
                <span class="valoracio-num">${data.valoracio}/5</span>
                <span class="salari-comentari">${data.salari}€/h</span>
                <span class="data">Ara mateix</span>
                <span class="tipus">${data.tipus || 'Experiència'}</span>
            </div>
            <p>${data.experiencia}</p>
        `;
        
        comentaris.appendChild(newComentari);
        
        // Actualizar contador de experiencias
        const comentarisCount = targetArticle.querySelector('.comentaris .comentari').length;
        const metaComentaris = targetArticle.querySelector('.meta .comentaris');
        metaComentaris.textContent = `${comentarisCount} experiències`;
    }
}

// Función para ordenar despachos
function sortDespachos(criteria) {
    const container = document.querySelector('.despachos');
    const articles = Array.from(container.querySelectorAll('.despacho'));
    
    articles.sort((a, b) => {
        switch (criteria) {
            case 'salari-asc':
                return parseFloat(a.dataset.salari) - parseFloat(b.dataset.salari);
            case 'salari-desc':
                return parseFloat(b.dataset.salari) - parseFloat(a.dataset.salari);
            case 'valoracio-asc':
                return parseInt(a.dataset.valoracio) - parseInt(b.dataset.valoracio);
            case 'valoracio-desc':
                return parseInt(b.dataset.valoracio) - parseInt(a.dataset.valoracio);
            case 'alfabetic':
                const nameA = a.querySelector('h2').textContent;
                const nameB = b.querySelector('h2').textContent;
                return nameA.localeCompare(nameB);
            default:
                return 0;
        }
    });
    
    // Reordenar en el DOM
    articles.forEach(article => container.appendChild(article));
}

// Función para estadísticas básicas
function updateStats() {
    const articles = document.querySelectorAll('.despacho');
    const salaris = Array.from(articles).map(a => parseFloat(a.dataset.salari)).filter(s => !isNaN(s));
    const valoracions = Array.from(articles).map(a => parseInt(a.dataset.valoracio)).filter(v => !isNaN(v));
    
    if (salaris.length > 0) {
        const avgSalari = (salaris.reduce((a, b) => a + b, 0) / salaris.length).toFixed(2);
        const avgValoració = (valoracions.reduce((a, b) => a + b, 0) / valoracions.length).toFixed(1);
        
        console.log(`Estadístiques: ${articles.length} despatxos, salari mitjà: €${avgSalari}/h, valoració mitjana: ${avgValoració}/5`);
    }
}

// Inicializar tooltips si es necesario
document.addEventListener('DOMContentLoaded', function() {
    // Añadir tooltips a los iconos de valoración
    const valoracions = document.querySelectorAll('.valoracio');
    valoracions.forEach(valoracio => {
        valoracio.title = 'Valoració de l\'experiència';
    });
    
    // Añadir tooltips a los salarios
    const salaris = document.querySelectorAll('.salari');
    salaris.forEach(salari => {
        salari.title = 'Salari per hora reportat';
    });
}); 