# Axel Ruiz Polo · Portafolio

Portafolio personal de Axel Ruiz Polo, desarrollador Full Stack Junior en Barranquilla, Colombia.

**Ver en vivo:** https://arp34.github.io/

## Idea

La página es una *ficha técnica* (datasheet), como la hoja de especificaciones de un componente: bloque de título, características, datos clave, especificaciones, una tabla de proyectos y un historial de revisiones con mi trayectoria.

## Tecnologías

HTML, CSS y JavaScript sin frameworks ni paso de compilación. Se publica tal cual con GitHub Pages.

- Español e inglés, con botón para cambiar de idioma (se recuerda con `localStorage`).
- Modo claro y oscuro (sigue el del sistema y recuerda la elección).
- Diseño adaptable (móvil y escritorio), navegable con teclado y respetando `prefers-reduced-motion`.

## Estructura

```
index.html          Estructura de la página
css/styles.css      Todos los estilos (variables de color y fuentes al principio)
js/content.js       Todo el texto (ES/EN), proyectos, stack y trayectoria
js/main.js          Idioma, tema, listas y tablas, y botón de copiar correo
assets/img/         Foto y favicon
assets/cv/          Hoja de vida en PDF
```

## Cómo añadir un proyecto

1. Añade un objeto al array `PROJECTS` de `js/content.js` (`id`, `ref`, `name`, `repo`, `tech`).
2. Añade sus textos `projects.<id>.kind`, `.desc` y `.role` en `TEXT.es` y en `TEXT.en`.

No hace falta tocar el HTML: `main.js` pinta la lista a partir de esos datos.

## Al cambiar el CSS o el JavaScript

En `index.html`, los enlaces llevan un número de versión: `css/styles.css?v=2`, `js/main.js?v=2`, `js/content.js?v=2`. Cuando cambies alguno de esos archivos, sube el número (`?v=3`). Así los navegadores y GitHub Pages no usan la copia antigua que tienen guardada en caché.

## Verlo en local

Abre `index.html` en el navegador o, mejor, sirve la carpeta:

```bash
python -m http.server 5500
```

y entra a http://localhost:5500.

## Contacto

- Correo: axelpolo3477@gmail.com
- LinkedIn: https://www.linkedin.com/in/axel-ruiz-polo/
- GitHub: https://github.com/Arp34
