# Dark Mode
Aprendamos a crear temas oscuros para nuestros desarrollos web con CSS y Javascript.

## Recursos
- [https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
- [https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [https://codepen.io/2kool2/pen/abzgPzJ](https://codepen.io/2kool2/pen/abzgPzJ)
- [https://www.dilmodev.com/implementing-dark-mode/](https://www.dilmodev.com/implementing-dark-mode/)
- [https://codepen.io/adhuham/pen/GRJxpQr](https://codepen.io/adhuham/pen/GRJxpQr)

## Tema oscuro
Hace un tiempo comenzaron a aparecer diferentes sitios web que ofrecían la posibilidad de cambiar el diseño a un tema oscuro, es por esto que nosotros trataremos de implementar nuestro propio Dark Mode a nuestro proyecto web.

Ejemplo:
- [https://www.youtube.com/](https://www.youtube.com/)
- [https://twitter.com/settings/display](https://twitter.com/settings/display)
- [https://duckduckgo.com/settings#theme](https://duckduckgo.com/settings#theme)

## Requisitos
- Conocimientos de HTML y CSS: [Curso de HTML y CSS](https://www.youtube.com/watch?v=rr2H086z16s&list=PLPl81lqbj-4LKo66cEts5yC_AjOvqKptm)
- Conocimientos de Javascript: [Curso de Javascript](https://www.youtube.com/watch?v=Zwcqq-7IDI0&list=PLPl81lqbj-4I11QPam9ApoT7tGbmyBg9P)

## HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DarkMode</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body class="dark-theme">
    <h1>Mi theme Dark</h1>
    <button id="boton">Cambiar</button>

    <script src="app.js"></script>
</body>
</html>
```

## Variables CSS
Creamos una clase "dark-theme" que en caso de ser utilizada, reemplazará nuestra variables globales del body.

```css
body {
    --color-bg: #DDDDDD;
    --color-text: #EE6352;
}

body.dark-theme {
    --color-bg: rgb(53,53,53);
    --color-text: wheat;
}

body {
    background-color: var(--color-bg);
}

h1 {
    color: var(--color-text);
}
```

## Detectar Configuración
- [https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

1. Si por ejemplo en Windows no está activado el modo oscuro, esta configuración no se leerá.
2. En caso de que exista la configuración de modo oscuro, se reescribirán las variables globales del body y tendremos una nueva clase llamada "light-theme".
```css
@media (prefers-color-scheme: dark) {

    body {
        --color-bg: rgb(53,53,53);
        --color-text: wheat;
    }

    body.light-theme {
        --color-bg: #DDDDDD;
        --color-text: #EE6352;
    }
    
}
```

## Dark en Windows 10
1. Configuración
2. Colores
3. Elige tu color: "Oscuro" || "Claro"

## Botón personalizado
```js
const boton = document.querySelector('#boton');
const prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

boton.addEventListener('click', () => {
    console.log('diste click')
    console.log(prefresDarkScheme)
    if (prefresDarkScheme.matches) {
        document.body.classList.toggle('light-theme')
    } else {
        document.body.classList.toggle('dark-theme')
    }
})
```

## LocalStorage
- [https://codepen.io/adhuham/pen/YzXayaq](https://codepen.io/adhuham/pen/YzXayaq)

Paso 1:
```js
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.toggle('dark-theme');
} else if (currentTheme === 'light') {
    document.body.classList.toggle('light-theme');
}
```

Paso 2:
```js
boton.addEventListener('click', () => {
    let theme;
    if (prefresDarkScheme.matches) {
        document.body.classList.toggle('light-theme')
        theme = document.body.classList.contains('light-theme') ? 'light' : 'dark'
    } else {
        document.body.classList.toggle('dark-theme')
        theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    }
    localStorage.setItem('theme', theme)
})
```

## Theme-color
No me funcionó :(

1. [con-meta.netlify.app](con-meta.netlify.app)
2. [https://sin-meta-dark.netlify.app](https://sin-meta-dark.netlify.app)

1. [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color)

```html
<meta name="color-scheme" content="dark light">
```

```css
:root {
  color-scheme: light dark; /* both supported */
}
```

## Imágenes
Una buena regla es disminuir un poco el brillo y el contraste de las imágenes.
[https://picsum.photos/](https://picsum.photos/)

```css
body {
    --color-bg: #DDDDDD;
    --color-text: #EE6352;
}

body.dark-theme {
    --color-bg: rgb(53,53,53);
    --color-text: wheat;
}

body.dark-theme img {
    filter: brightness(.8) contrast(1.2);
}

@media (prefers-color-scheme: dark) {

    img {
        filter: brightness(.8) contrast(1.2);
    }
    
}
```

## Más por aprender...
1. [https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#design](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#design)
2. [https://alexandersandberg.com/theme-switcher/](https://alexandersandberg.com/theme-switcher/)
3. [https://github.com/alexandersandberg/theme-switcher](https://github.com/alexandersandberg/theme-switcher)
4. [https://chrismorgan.info/blog/dark-theme-implementation/](https://chrismorgan.info/blog/dark-theme-implementation/)
5. [https://codepen.io/2kool2/pen/abzgPzJ](https://codepen.io/2kool2/pen/abzgPzJ)




