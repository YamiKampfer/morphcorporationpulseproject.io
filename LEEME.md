# Corporación Morph: web de la serie (versión para editar)

Es una web estática: no necesita instalar nada. Archivos:

- `index.html`: estructura de la página (títulos y textos fijos de cada sección).
- `content.js`: **todo el contenido editable** (personajes, capítulos, tráiler, galería, frases de Aurora).
- `styles.css`: colores y diseño.
- `app.js`: el código que arma la página (no hace falta tocarlo).
- `assets/`: tus imágenes. Ya incluye la foto de Aurora.

## Verla en tu computadora con Visual Studio Code
1. Abrí la carpeta con **Archivo > Abrir carpeta**.
2. Instalá la extensión **Live Server** (de Ritwick Dey).
3. Click derecho sobre `index.html` > **Open with Live Server**. Se actualiza sola al guardar.

## Cómo cargar contenido (todo en `content.js`)
- **Tráiler o capítulos:** pegá el link de YouTube o de un archivo `.mp4` en `url`.
- **Fotos:** copiá la imagen a `assets/` y escribí `"assets/nombre.jpg"` en `image` o `poster`. También sirve un link https.
- **Galería:** agregá líneas dentro de `GALLERY`, por ejemplo `{ src: "assets/foto1.jpg", caption: "Descripción" }`.
- **Personajes:** completá `age`, `personality`, `story` e `image`. Lo que dejes vacío no se muestra.
- **Textos de El mundo (arena, apuestas, élite):** completá `text` de cada uno en `WORLD`.

## Subirla a GitHub y publicarla gratis
1. Creá un repositorio nuevo en github.com y subí **todo el contenido de esta carpeta**.
2. En el repositorio: **Settings > Pages > Build and deployment**, elegí **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guardá.
3. En un minuto te da el link de tu web. Más adelante podés conectarle un dominio propio en la misma pantalla.

## Importante
- La **Zona +18** de esta web no aloja nada: muestra un aviso de mayoría de edad y, si la persona confirma, abre el link de tu otro sitio. Pegá ese link en `ADULT.url` dentro de `content.js`. Para ocultar la sección, poné `enabled: false`.
- El contenido +18 tiene que estar en un servicio que lo permita. Revisá sus normas de uso antes de subirlo. GitHub no lo aloja si es sexualmente sugerente de forma gratuita o violento de forma gratuita.
- El aviso es una confirmación con un clic, no una verificación real de edad.
- Si cambiás algo en esta copia, la de Higgsfield no se entera (y al revés).
