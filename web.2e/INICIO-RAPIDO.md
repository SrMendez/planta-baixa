# 🚀 INICIO RÁPIDO - 5 Minutos

## ✅ Paso 1: Subir a GitHub (2 min)
1. Ve a [GitHub.com](https://github.com) e inicia sesión
2. Clic en "New repository" (botón verde)
3. Nombre: `planta-baixa` (o el que prefieras)
4. ✅ Marca "Public"
5. ✅ NO marques "Add README" (ya tenemos uno)
6. Clic "Create repository"

## ✅ Paso 2: Subir archivos (1 min)
1. En la página del repositorio nuevo, clic "uploading an existing file"
2. Arrastra TODOS los archivos de este proyecto
3. Escribe: "Primera versión de la web"
4. Clic "Commit changes"

## ✅ Paso 3: Activar GitHub Pages (1 min)
1. En tu repositorio → Clic "Settings" (arriba)
2. Scroll down → Clic "Pages" (menú izquierda)
3. En "Source" → Selecciona "Deploy from a branch"
4. En "Branch" → Selecciona "main" → Clic "Save"
5. ¡Espera 2-3 minutos y tu web estará online!

## ✅ Paso 4: Configurar formulario (1 min)
1. Ve a [Formspree.io](https://formspree.io)
2. Clic "Get Started" → Regístrate gratis
3. "New Form" → Nombre: "Denuncias Arquitectura"
4. Copia tu "Form ID" (ej: `xoqklmno`)
5. En GitHub → Edita `index.html` → Busca `YOUR_FORM_ID` → Reemplaza por tu ID

## 🎉 ¡LISTO!

Tu web estará en: `https://TU-USUARIO.github.io/planta-baixa`

## 📧 Recibir emails
- Ve a Formspree → Tu formulario → Settings → Email notifications
- Añade tu email personal
- ¡Ahora recibirás cada denuncia por email!

## 📝 Añadir denuncias
Cuando recibas una denuncia por email y la apruebes:

1. Ve a GitHub → Tu repositorio → `index.html` → ✏️ (editar)
2. Busca: `<div class="denuncia-card">` (ejemplo existente)
3. Copia y pega esa sección
4. Cambia el contenido por la nueva denuncia
5. "Commit changes"

**Formato ejemplo:**
```html
<div class="denuncia-card">
    <h3>Estudio *** (Madrid)</h3>
    <p><strong>Salario:</strong> €3.50/hora</p>
    <p>"Descripción de la experiencia del usuario..."</p>
</div>
```

## 🔧 Personalizar
- **Colores**: Edita `styles.css`
- **Textos**: Edita `index.html`
- **Ciudades**: Añade opciones en el formulario

## ⚠️ Importante
- ✅ Solo publica denuncias reales y verificadas
- ✅ Usa "Estudio ***" en lugar del nombre real
- ✅ No publiques ataques personales
- ✅ Sé responsable con la información

## 🆘 ¿Problemas?
- **Formulario no funciona**: Verifica el Form ID de Formspree
- **Web no aparece**: Espera 5-10 min tras activar GitHub Pages
- **No llegan emails**: Revisa spam y configuración de Formspree

---

**🎯 Meta**: Crear transparencia en el sector y proteger a futuros arquitectos de condiciones abusivas. 