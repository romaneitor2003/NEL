# 🏆 Neo Egoist League — Blue Lock Fan App

Aplicación web interactiva dedicada a los equipos de la **Neo Egoist League** del manga/anime *Blue Lock*. Permite explorar los planteles de los 5 clubes con sus jugadores, posiciones y Masters.

---

## 🌐 Demo en vivo

> *(Añade aquí el enlace de despliegue cuando lo tengas, por ejemplo: https://romaneitor2003.github.io/NEL)*

---

## 📁 Estructura del proyecto

```
NEL/
├── index.html       # Estructura principal de la app
├── style.css        # Estilos visuales y diseño responsive
├── app.js           # Lógica de navegación entre secciones
├── manifest.json    # Configuración de la PWA
├── sw.js            # Service Worker para funcionamiento offline
└── icons/
    ├── icon-192.png # Icono PWA (192x192)
    └── icon-512.png # Icono PWA (512x512)
```

---

## ⚙️ Tecnologías utilizadas

- **HTML5** — Estructura semántica con etiquetas como `<header>`, `<main>`, `<section>` y `<nav>`
- **CSS3** — Diseño visual, colores por equipo, grid de jugadores y diseño responsive con media queries
- **JavaScript (Vanilla)** — Navegación dinámica entre secciones sin recargar la página
- **PWA (Progressive Web App)** — Instalable en móvil gracias al `manifest.json` y Service Worker

---

## 📱 Responsive Design

La aplicación se adapta correctamente a distintos dispositivos:

- 📱 Móvil (< 600px)
- 📟 Tablet (600px – 1024px)
- 🖥️ Escritorio (> 1024px)

---

## 🏟️ Equipos disponibles

| Club | Master |
|------|--------|
| Bastard München | Noel Noa |
| FC Barcha | Lavinho |
| Manshine City | Chris Prince |
| Ubers | Marc Snuffy |
| Paris X Gen | Julian Loki |

---

## 🔧 Cómo ejecutar el proyecto localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/romaneitor2003/NEL.git
   ```
2. Abre el archivo `index.html` en tu navegador.

> No requiere instalación de dependencias ni servidor backend.

---

## 📲 Instalación como PWA

1. Abre la app desde un navegador compatible (Chrome, Edge, Safari)
2. Busca la opción **"Añadir a pantalla de inicio"** o **"Instalar app"**
3. ¡Listo! La app se instala como si fuera nativa

---

## ♿ Accesibilidad

- Atributos `alt` descriptivos en todas las imágenes
- Estructura lógica del DOM con etiquetas semánticas
- Tooltips informativos en las abreviaturas de posiciones (ej: `MCO`, `CD`, `POR`)

---

## 📌 Características del código

### `index.html`
Contiene la estructura de todas las secciones de equipos. Cada sección tiene un ID único y se activa/desactiva dinámicamente mediante JavaScript.

### `style.css`
Define el tema visual oscuro de la app, los colores identificativos de cada equipo (inspirados en sus países de origen) y el layout responsive con CSS Grid.

### `app.js`
Gestiona la función `cargar(seccion)` que oculta todas las secciones y muestra únicamente la seleccionada, simulando una navegación SPA sin recargar la página.

### `manifest.json`
Configura la PWA con nombre, iconos, colores de tema y modo de visualización `standalone` para que la app pueda instalarse en dispositivos móviles.

### `sw.js`
Service Worker que permite el funcionamiento offline básico de la aplicación mediante caché de recursos.

---

## 👤 Autor

**romaneitor2003**  
[GitHub](https://github.com/romaneitor2003)
