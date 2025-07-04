# 🏗️ Denuncias Arquitectura España

Plataforma anónima para denunciar malas condiciones laborales en despachos de arquitectura españoles.

## 🎯 Objetivo

Crear una comunidad transparente donde los profesionales de la arquitectura puedan compartir experiencias sobre condiciones laborales abusivas, salarios injustos y malas prácticas en el sector.

## ✨ Características

- ✅ **100% Anónimo** - No requiere registro de usuarios
- ✅ **Formulario seguro** - Validación y protección anti-spam
- ✅ **Moderación** - Todas las denuncias son verificadas antes de publicarse
- ✅ **Responsive** - Funciona en móviles, tablets y ordenadores
- ✅ **Gratuito** - Hosting y formularios sin coste

## 🚀 Configuración rápida

### 1. Subir a GitHub

1. Crea un repositorio en GitHub
2. Sube todos estos archivos al repositorio
3. Ve a Settings → Pages
4. Selecciona "Deploy from a branch" → "main"
5. Tu web estará disponible en `https://tu-usuario.github.io/planta-baixa`

### 2. Configurar formulario (Formspree)

1. Ve a [Formspree.io](https://formspree.io) y crea cuenta gratuita
2. Crea un nuevo formulario
3. Copia tu "Form ID" (ejemplo: `mvoqjdjl`)
4. En `index.html`, reemplaza `YOUR_FORM_ID` por tu ID real:
   ```html
   <form action="https://formspree.io/f/mvoqjdjl" method="POST">
   ```

### 3. Configurar notificaciones por email

En Formspree:
- Ve a tu formulario → Settings
- En "Email notifications" añade tu email
- Recibirás un email cada vez que alguien envíe una denuncia

## 📧 Flujo de trabajo

1. **Usuario envía denuncia** → Formulario web
2. **Recibes email** → Con todos los datos de la denuncia
3. **Revisas contenido** → Verificas que sea auténtico
4. **Publicas manualmente** → Añades la denuncia a la web

## 🛠️ Personalización

### Cambiar colores
En `styles.css`, modifica las variables de color:
```css
/* Cambiar el color principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Añadir más ciudades
En `index.html`, añade opciones al select:
```html
<option value="Salamanca">Salamanca</option>
<option value="Córdoba">Córdoba</option>
```

### Modificar campos del formulario
Puedes añadir o quitar campos según necesites en el formulario.

## 📊 Añadir nuevas denuncias

Para añadir una nueva denuncia verificada:

1. Edita `index.html`
2. Busca la sección `<section class="denuncias-section">`
3. Añade una nueva tarjeta:

```html
<div class="denuncia-card">
    <h3>Estudio *** (Ciudad)</h3>
    <p><strong>Salario:</strong> €X.XX/hora</p>
    <p>"Descripción de la experiencia..."</p>
</div>
```

## 💰 Monetización (opcional)

### Google AdSense
1. Solicita cuenta en [Google AdSense](https://adsense.google.com)
2. Una vez aprobado, añade códigos de anuncios en el HTML
3. Coloca anuncios discretos entre contenido

### Donaciones
- Añade botón de PayPal/Kofi en el footer
- Sé transparente sobre el uso de donaciones

## 🔒 Seguridad y legalidad

### Protecciones incluidas:
- Validación de formularios
- Sin archivos adjuntos (solo texto)
- Moderación manual antes de publicar
- No se almacenan datos personales

### Recomendaciones legales:
- ✅ Solo publica experiencias verificables
- ✅ Usa "Estudio ***" en lugar del nombre real
- ✅ Incluye disclaimer sobre veracidad
- ❌ No publiques información sin verificar
- ❌ No permitas ataques personales

## 📱 Versión móvil

La web es completamente responsive y funciona perfecto en móviles.

## 🆘 Soporte

Si tienes problemas:

1. **Formulario no funciona**: Verifica el Form ID de Formspree
2. **No llegan emails**: Revisa spam y configuración de Formspree
3. **Web no se ve bien**: Verifica que todos los archivos CSS estén subidos
4. **GitHub Pages no funciona**: Asegúrate de tener activado Pages en Settings

## 🔄 Futuras mejoras

- [ ] Sistema de filtros avanzados
- [ ] Estadísticas automáticas
- [ ] Búsqueda por texto
- [ ] API para datos públicos
- [ ] Integración con redes sociales
- [ ] Panel de administración web

## 📈 Analytics (opcional)

Para hacer seguimiento de visitas, añade Google Analytics:

1. Crea cuenta en [Google Analytics](https://analytics.google.com)
2. Añade el código de seguimiento en `<head>` del HTML

## 🤝 Contribuir

Si quieres mejorar el proyecto:
1. Haz fork del repositorio
2. Crea una rama con tu feature
3. Envía pull request

## 📄 Licencia

Proyecto de código abierto. Úsalo libremente para crear tu propia plataforma.

---

**⚠️ Importante**: Este proyecto tiene fines informativos. Asegúrate de cumplir con las leyes locales sobre protección de datos y difamación. 