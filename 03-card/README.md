# Card

Desafío nivel "Novato (Newbie)", aunque para mi no es tan fácil jijij 😜

## Objetivo

- [frontendmentor.io](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ)
- [https://desafio-card-bluuweb.netlify.app/](https://desafio-card-bluuweb.netlify.app/)
- [github](https://github.com/bluuweb/desafio-card)

## Requisitos

- [Fundamentos de HTML y CSS](https://www.youtube.com/watch?v=rr2H086z16s&list=PLPl81lqbj-4LKo66cEts5yC_AjOvqKptm)
- [Sass](https://www.youtube.com/watch?v=Nro1WwTdCK4&list=PLPl81lqbj-4I4VwUdjbV2iFg7wispiXKP)

## Preguntas y Respuestas

- [https://discord.gg/xSceUPh](https://discord.gg/xSceUPh)

## Extensiones VSC

- [Tema e Iconos](https://marketplace.visualstudio.com/items?itemName=sldobri.bunker)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Live Sass Compile](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Recursos

- [https://photoshop.adobe.com/](https://photoshop.adobe.com/)
- [page-ruler-redux (extensión)](https://chrome.google.com/webstore/detail/page-ruler-redux/giejhjebcalaheckengmchjekofhhmal)
- [colorpick (extensión)](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg)
- [normalize.css](https://necolas.github.io/normalize.css/)
- [font](https://fonts.google.com/specimen/Kumbh+Sans?query=Kumbh+Sans)
- [sass](https://sass-lang.com/guide)
- [< main >](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/main)
- [< article >](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/article)
- [color hsl](https://developer.mozilla.org/es/docs/Web/CSS/color_value)
- [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- []()

## Apoya el canal de bluuweb! ❤

[<img :src="$withBase('/img/vue-js.jpg')">](http://curso-vue-js-udemy.bluuweb.cl)
[<img :src="$withBase('/img/react-js.jpg')">](http://curso-react-js-udemy.bluuweb.cl)

## Estructura de archivos

- index.html
- estilos.scss
- images/
- css/
  - normalize.css
  - estilos.css (se genera automáticamente)

## HTML

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Card</title>

    <link
      rel="shortcut icon"
      href="./images/favicon-32x32.png"
      type="image/x-icon"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./css/normalize.css" />
    <link rel="stylesheet" href="./css/estilos.css" />
  </head>

  <body>
    <main class="flex">
      <article class="card">
        <img src="./images/bg-pattern-card.svg" alt="" class="card-header" />
        <div class="card-body">
          <img src="./images/image-victor.jpg" alt="" class="card-body-img" />
          <h1 class="card-body-title">
            Víctor charst
            <span>26</span>
          </h1>
          <p class="card-body-text">London</p>
        </div>
        <div class="card-footer">
          <div class="card-footer-social">
            <h3>80K</h3>
            <p>Followers</p>
          </div>
          <div class="card-footer-social">
            <h3>803K</h3>
            <p>Likes</p>
          </div>
          <div class="card-footer-social">
            <h3>1.4K</h3>
            <p>Photos</p>
          </div>
        </div>
      </article>
    </main>
  </body>
</html>
```

- [box-sizing](https://css-tricks.com/box-sizing/)

## Colores

```scss
:root {
  --dark-cyan: hsl(185, 75%, 39%);
  --very-dark: hsl(229, 23%, 23%);
  --dark-gray: hsl(227, 10%, 46%);
}
```

## body
```scss
html {
  box-sizing: border-box;
  font-size: 62.5%; // 1 rem = 10 px
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-family: "Kumbh Sans", sans-serif;
  background-color: var(--dark-cyan);
}
```

## flex

- [guide-to-flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

```scss
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

## card

- [overflox](https://developer.mozilla.org/es/docs/Web/CSS/overflow)

```scss
.card {
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  max-width: 320px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.315);
}
```

## card-header

- [Selector principal "&" (solo sass)](https://sass-lang.com/documentation/style-rules/parent-selector)
- [espacios fantasmas (css-tricks)](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)
- [espacios fantasmas (EDteam)](https://ed.team/blog/css-espacios-fantasma-en-las-imagenes-y-como-solucionarlos)

```scss
.card {
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  max-width: 320px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.315);

  &-header {
    width: 100%;
    display: block;
  }
}
```

## card-body

```scss
//agregar variable
// --light-gray:  hsl(227, 10%, 90%);
&-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid var(--light-gray);
}
```

## card-body-img

```scss
&-img {
  border: 5px solid white;
  background-color: white;
  border-radius: 50%;
  margin-top: calc(-48px - 5px);
}
```

## card-body-title

```scss
&-title {
  margin: 0;
  margin-top: 2rem;
  color: var(--very-dark);
  font-size: 1.8rem;

  & span {
    color: var(--dark-gray);
    font-weight: 400;
  }
}
```

## card-body-text

```scss
&-text {
  font-size: 1.7rem;
  color: var(--dark-gray);
  margin-bottom: 2rem;
}
```

## card-footer

```scss
&-footer {
  display: flex;
  justify-content: space-evenly;

  &-social {
    text-align: center;

    h3 {
      margin-top: 2rem;
      margin-bottom: 0.5rem;
      font-size: 2rem;
      color: var(--very-dark);
    }

    p {
      margin-top: 0;
      margin-bottom: 2rem;
      letter-spacing: 1px;
      color: var(--dark-gray);
      font-weight: 700;
      font-size: 1.2rem;
    }
  }
}
```

## Fondo
```scss
body {
    font-family: 'Kumbh Sans', sans-serif;
    background-color: var(--dark-cyan);
    background-image: url('../images/bg-pattern-top.svg'), url('../images/bg-pattern-bottom.svg');
    background-repeat: no-repeat, no-repeat;
    background-position: right 50vw bottom 50vh, left 50vw top 50vh;
}
```
