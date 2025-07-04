# 🏗️ Planta Baixa - Instruccions Completes

## 🎯 **Què has aconseguit**

Has creat una **plataforma professional** per denunciar les males condicions laborals en arquitectura amb:

✅ **Estructura moderna**: Despatxos amb estadístiques reals
✅ **Filtres funcionals**: Cerca per nom, salari i valoració  
✅ **Comentaris expandibles**: Múltiples experiències per despatx
✅ **100% responsiva**: Funciona perfecte en mòbil
✅ **Totalment gratuïta**: Hosting i formularis sense cost

---

## 🚀 **Pròxims passos**

### 1. **Puja a GitHub** (5 minuts)
```
✅ GitHub.com → New repository → "planta-baixa"
✅ Upload files → Arrastra tots els arxius
✅ Settings → Pages → Deploy from branch (main)
```

### 2. **Configura Formspree** (2 minuts)
```
✅ Formspree.io → Registra't → New Form
✅ Copia Form ID → Edita index.html
✅ Reemplaça "YOUR_FORM_ID" pel teu ID real
```

### 3. **La teva web estarà a:**
`https://Info-amable.github.io/planta-baixa`

---

## 📧 **Com funciona el flux**

### **Quan algú envia una experiència:**
1. **Reb un email** amb tota la informació
2. **Reveixes el contingut** (verifica que sigui real)
3. **Afeixes manualment** l'experiència a la web
4. **Es publica** instantàniament

### **Format de l'email que rebràs:**
```
De: noreply@formspree.io
Assumpte: Nova experiència - Planta Baixa

Nom del despatx: Estudio XYZ
Salari: 3.50 €/hora
Valoració: 2 (Dolent)
Tipus: Pràctiques
Experiència: "Ambient molt tòxic..."
```

---

## ✏️ **Com afegir noves experiències**

### **Pas 1**: Quan aproves una experiència
1. **GitHub** → `planta-baixa` → `index.html` → ✏️ Edit
2. **Busca** una tarjeta existent (per exemple, "Estudio Alpha")
3. **Copia** tota la secció `<div class="despatx-card">...</div>`

### **Pas 2**: Adapta la informació
```html
<div class="despatx-card" data-salari="3.5" data-valoracio="2">
    <div class="despatx-header">
        <h3>Nom del Despatx Nou</h3>
        <div class="despatx-stats">
            <div class="stat-item">
                <span class="label">Valoració mitjana</span>
                <span class="value">⭐⭐ 2.0/5</span>
            </div>
            <div class="stat-item">
                <span class="label">Salari mitjà</span>
                <span class="value">€3.50/hora</span>
            </div>
            <div class="stat-item">
                <span class="label">Experiències</span>
                <span class="value">1 comentari</span>
            </div>
        </div>
    </div>
    <!-- Resta del codi igual -->
</div>
```

### **Pas 3**: Commit changes
- **Missatge**: "Afegida experiència: Nom del Despatx"
- **Clic**: "Commit changes"
- **Resultat**: Publicat en 30 segons

---

## 🔧 **Personalització ràpida**

### **Canviar colors**
`styles.css` → Busca `#667eea` → Canvia pel color que vulguis

### **Afegir més filtres**
`index.html` → Secció `.filters` → Afegeix nous `<select>`

### **Modificar textos**
`index.html` → Edita directament els textos

### **Canviar estadístiques del header**
`index.html` → Secció `.stats-header` → Modifica números

---

## 📊 **Gestió de comentaris múltiples**

### **Si un despatx ja existeix:**
1. **Busca** la seva targeta existent
2. **Dins de** `<div class="comentaris-complerts">`
3. **Afegeix** un nou comentari:

```html
<div class="comentari">
    <div class="comentari-header">
        <span class="valoracio">⭐⭐⭐ 3/5</span>
        <span class="salari">€5.00/hora</span>
        <span class="data">Des 2024</span>
    </div>
    <p>"Nova experiència del mateix despatx..."</p>
</div>
```

4. **Actualitza** les estadístiques (valoració mitjana, salari mitjà)
5. **Modifica** el nombre de comentaris

---

## 🔒 **Consells de seguretat**

### **Què publicar:**
✅ **Experiències verificables** amb detalls específics
✅ **Salaris reals** reportats pels usuaris
✅ **Condicions laborals** objectives
✅ **Dates aproximades** per contexte

### **Què NO publicar:**
❌ **Noms complets** de persones
❌ **Informació personal** identificable
❌ **Acusacions** sense base
❌ **Atacs personals** o insults

### **Com verificar:**
- **Detalls específics** que només algú que hi hagi estat sabria
- **Coherència** en la informació
- **Llenguatge** professional, no venjatiu

---

## 📈 **Monitorització i millores**

### **Estadístiques que pots seguir:**
- **Visites** (Google Analytics - opcional)
- **Formularis enviats** (Formspree dashboard)
- **Despatxos més buscats** (filtres més utilitzats)

### **Millores futures:**
- **Més filtres** (per localització, tipus de contracte)
- **Gràfics** amb estadístiques
- **Sistema de voting** per comentaris
- **Exportar dades** a Excel/CSV

---

## 💰 **Monetització (opcional)**

### **Quan tinguis trànsit (500+ visites/mes):**
1. **Google AdSense** → Anuncis discrets
2. **Donacions** → PayPal/Kofi
3. **Serveis premium** → Alertes, estadístiques
4. **Consultoria** → Assessorament laboral

### **Expectatives realistes:**
- **0-100 visites/mes**: €0-5
- **100-500 visites/mes**: €5-25  
- **500+ visites/mes**: €25-100+

---

## 🆘 **Resolució de problemes**

### **El formulari no funciona**
- Verifica el Form ID a Formspree
- Comprova que l'email estigui configurat

### **No reben emails**
- Revisa spam/correu brossa
- Verifica configuració de notificacions a Formspree

### **La web no es veu bé**
- Comprova que tots els arxius estiguin pujats
- Verifica que GitHub Pages estigui activat

### **Els filtres no funcionen**
- Comprova que script.js estigui carregat
- Verifica la consola del navegador per errors

---

## 🔄 **Actualitzacions des d'aquest xat**

### **Mètode recomanat:**
1. **Dius què vols canviar**: "Vull afegir un camp nou"
2. **Jo edito els arxius** aquí al xat
3. **Copies el codi** i l'enganxes a GitHub
4. **Commit changes** → Publicat!

### **Exemples d'actualitzacions:**
- Afegir nous camps al formulari
- Canviar colors i dissenys
- Modificar textos i traduccions
- Afegir noves funcionalitats

---

## 🎯 **Objectiu final**

Crear **transparència real** en el sector de l'arquitectura a Catalunya i Espanya. Cada experiència compartida ajuda a:

- **Protegir** futurs professionals
- **Pressionar** despatxos amb males pràctiques
- **Reconèixer** despatxos ètics
- **Millorar** les condicions generals del sector

---

## 📞 **Suport continu**

**Sempre pots tornar a aquest xat per:**
- Actualitzar funcionalitats
- Resoldre problemes tècnics
- Afegir millores
- Optimitzar la web

**La teva plataforma està llesta per canviar el sector! 🚀** 