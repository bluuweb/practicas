# Card POKE API

Utilizando el ejemplo de la sección anterior, realizaremos una práctica muy sencilla consumiendo la API de Pokemon.

:::warning Atención!
Se recomienda utilizar la api antes de fin de mes, ya que puede presentar problemas de servidor.
Es una API gratuita por ende se les acaba generalmente su cuota de hosting por demasiadas solicitudes acumuladas durante el mes.
:::

## Objetivo

- [https://card-poke-simple.netlify.app/](https://card-poke-simple.netlify.app/)
- [github](https://github.com/bluuweb/suscribete-por-la-card/tree/01-pokeapi)

## Requisitos

- [Construcción de CARD HTML y CSS](https://youtu.be/Xe_qNR1mmCg)
- [Curso JavaScript DOM](https://www.youtube.com/playlist?list=PLPl81lqbj-4I2ZOzryjPKxfhK3BzTlaJ7)

## Preguntas y Respuestas

- [https://discord.gg/xSceUPh](https://discord.gg/xSceUPh)

## Extensiones VSC

- [Tema e Iconos](https://marketplace.visualstudio.com/items?itemName=sldobri.bunker)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Live Sass Compile](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Recursos

- [https://pokeapi.co/](https://pokeapi.co/)
- [Math Random](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random)
- [Async Await](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona)
- [Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)
- [DOMContentLoaded](https://developer.mozilla.org/es/docs/Web/Events/DOMContentLoaded)
- [Fragment](https://developer.mozilla.org/es/docs/Web/API/Document/createDocumentFragment)

## Apoya el canal de bluuweb! ❤

[<img :src="$withBase('/img/vue-js.jpg')">](http://curso-vue-js-udemy.bluuweb.cl)
[<img :src="$withBase('/img/react-js.jpg')">](http://curso-react-js-udemy.bluuweb.cl)

## Redes sociales

- [Youtube](https://www.youtube.com/bluuweb)
- [Bluuweb.org](https://bluuweb.org)
- [Discord](https://discord.gg/xSceUPh)
- [Twitch](https://www.twitch.tv/bluuweb)
- [Instagram](https://www.instagram.com/bluuweb_youtube)
- [Facebook](https://www.facebook.com/bluuweb)
- [Twitter](https://twitter.com/bluuweb)

## HTML

```html
<body>
  <main class="flex"></main>

  <template id="card">
    <article class="card">
      <img
        src="./images/bg-pattern-card.svg"
        alt="imagen header card"
        class="card-header"
      />
      <div class="card-body">
        <img
          src="./images/image-victor.jpg"
          alt="imagen de vitoko"
          class="card-body-img"
        />
        <h1 class="card-body-title">
          Victor charst
          <span>26</span>
        </h1>
        <p class="card-body-text">London</p>
      </div>
      <div class="card-footer">
        <div class="card-footer-social">
          <h3>80K</h3>
          <p>Ataque</p>
        </div>
        <div class="card-footer-social">
          <h3>803K</h3>
          <p>Ataque Especial</p>
        </div>
        <div class="card-footer-social">
          <h3>1.4K</h3>
          <p>Defensa</p>
        </div>
      </div>
    </article>
  </template>

  <script src="./js/app.js"></script>
</body>
```

## CSS
```scss
&-img {
    width: 200px;
    height: 200px;
    border: 5px solid white;
    border-radius: 50%;
    margin-top: calc(-100px - 5px);
    background-color: white;
}
```

## JS

```js
console.log("suscríbete y comparte ❤");

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
  const ramdom = getRandomInt(1, 152);
  fetchData(ramdom);
});

const fetchData = async (id) => {
  try {
    console.log(id);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    console.log(data);

    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      imgJuego: data.sprites.front_default,
      imgCvg: data.sprites.other.dream_world.front_default,
      nombre: data.name,
      experiencia: data.base_experience,
      hp: data.stats[0].base_stat,
      ataque: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      especial: data.stats[3].base_stat,
    };

    pintarCard(pokemon);
  } catch (error) {
    console.log(error);
  }
};

const pintarCard = (pokemon) => {
  const flex = document.querySelector(".flex");
  const template = document.getElementById("card").content;
  const clone = template.cloneNode(true);
  const fragment = document.createDocumentFragment();

  clone.querySelector(".card-body-img").setAttribute("src", pokemon.imgCvg);
  // clone.querySelector('.card-body-img').setAttribute('src', pokemon.imgJuego)
  clone.querySelector(
    ".card-body-title"
  ).innerHTML = `${pokemon.nombre} <span>${pokemon.hp}hp</span>`;
  clone.querySelector(".card-body-text").textContent =
    pokemon.experiencia + " exp";
  clone.querySelectorAll(".card-footer-social h3")[0].textContent =
    pokemon.ataque + "K";
  clone.querySelectorAll(".card-footer-social h3")[1].textContent =
    pokemon.especial + "K";
  clone.querySelectorAll(".card-footer-social h3")[2].textContent =
    pokemon.defensa + "K";

  fragment.appendChild(clone);
  flex.appendChild(fragment);
};
```
