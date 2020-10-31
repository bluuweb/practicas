# API Países
A base del desafío de [Dorian Desings](https://www.youtube.com/user/DorianDesigns)

## Recursos
* [https://www.frontendmentor.io/challenges/](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)
* Family: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
* [https://cdnjs.com/libraries/font-awesome](https://cdnjs.com/libraries/font-awesome)
* [REST Countries API](https://restcountries.eu)
* [https://necolas.github.io/normalize.css/8.0.1/normalize.css](https://necolas.github.io/normalize.css/8.0.1/normalize.css)

## Utilidades
* [https://color.adobe.com/es/create/image](https://color.adobe.com/es/create/image)
* [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [https://tailwindcss.com/docs/grid-template-columns](https://tailwindcss.com/docs/grid-template-columns)
* [https://css-tricks.com/box-sizing/](https://css-tricks.com/box-sizing/)

## Base HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Países</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/estilos.css">
    
</head>
<body>
    <nav class="navbar">
        <div class="container navbar-content">
            <h1>Where in the world?</h1>
            <button>Dark Mode</button>
        </div>
    </nav>

    <header class="container filter-content my-2">
        <form id="formulario">
            <input type="text" placeholder="Search for a country" id="inputTexto">
        </form>
        <div>
            <select id="filtroSelect">
                <option value="">Filter by Region</option>
                <option value="">Todos</option>
                <option value="Africa">África</option>
                <option value="Americas">América</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceanía</option>
            </select>
        </div>
    </header>

    <main class="container grid" id="banderas">
       
        <article class="card">
            <img src="https://restcountries.eu/data/ala.svg" alt="" class="img-fluid">
            <div class="card-content">
                <h3>Germany</h3>
                <p>
                    <b>Population: </b>
                    81.770.900
                </p>
                <p>
                    <b>Region: </b>
                    Europe
                </p>
                <p>
                    <b>Capital: </b>
                    Berlín
                </p>
            </div>
        </article>

    </main>

    <!-- El orden de los js es importante -->
    <script src="js/darkmode.js"></script>
    <script src="js/app.js"></script>
    <script src="js/formulario.js"></script>
    <script src="js/option.js"></script>

</body>
</html>
```

## Base CSS
```css
/* :root {
    --color-bg: #bdbdbd;
    --color-bg-secondary: #ffffff;
    --color-text: #000000;
} */

html {
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    --color-bg: #FAFAFA;
    --color-bg-secondary: #ffffff;
    --color-text: #000000;
    font-family: 'Nunito Sans', sans-serif;
    background-color: var(--color-bg);
    color: var(--color-text);
}

.my-2 {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.container {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}

.img-fluid {
    width: 100%;
}

.navbar {
    background-color: var(--color-bg-secondary);
}

.navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.filter-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 4rem;
}


.card {
    background-color: var(--color-bg-secondary);
    border-radius: 0.375rem;
}

.card img {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
}

.card-content {
    padding: 2rem;
}

.card-content h3 {
    margin-bottom: 2rem;
}

@media (max-width: 1000px) {
    .grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (max-width: 750px) {
    .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 600px) {
    .navbar-content {
        font-size: 0.7rem;
    }

    .filter-content {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .grid {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
```

## Dark Mode (button)
- [https://www.w3schools.com/css/css3_buttons.asp](https://www.w3schools.com/css/css3_buttons.asp)
- [https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_fade](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_fade)
- [https://fontawesome.com/icons/sun?style=solid](https://fontawesome.com/icons/sun?style=solid)
- [https://fontawesome.com/icons/moon?style=solid](https://fontawesome.com/icons/moon?style=solid)

```html
<button class="btn-dark-mode">
    <i class="fas fa-moon"></i>
    <i class="fas fa-sun"></i>
    Dark Mode
</button>
```

```css
.btn-dark-mode {
    background-color: var(--color-bg-secondary);
    opacity: 1;
    transition: 0.3s;
    color: var(--color-text);
    border: none;
    cursor: pointer; /* border none lo borra */
    outline: none; /* quitamos el borde al hacer click */
}

.btn-dark-mode:hover {
    opacity: 0.6;
}
```

- [https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode)
- [https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
```css
body {
    --color-bg: #FAFAFA;
    --color-bg-secondary: #ffffff;
    --color-text: #000000;
    font-family: 'Nunito Sans', sans-serif;
    background-color: var(--color-bg);
    color: var(--color-text);
}

body.dark-theme {
    --color-bg: #202D36;
    --color-bg-secondary: #2B3743;
    --color-text:#ffffff;
}
```

```js
const btnDark = document.querySelector('.btn-dark-mode');

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    if(document.body.className === 'dark-theme'){
        btnDark.innerHTML = `
            <i class="fas fa-sun"></i>
            Light Mode
        `
    }else{
        btnDark.innerHTML = `
            <i class="fas fa-moon"></i>
            Dark Mode
        `
    }
})
```

## Box-shadow
- [https://developer.mozilla.org/es/docs/Web/CSS/box-shadow](https://developer.mozilla.org/es/docs/Web/CSS/box-shadow)
- [https://tailwindcss.com/docs/box-shadow#app](https://tailwindcss.com/docs/box-shadow#app)

```css
.navbar {
    background-color: var(--color-bg-secondary);
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
    background-color: var(--color-bg-secondary);
    border-radius: 0.375rem;
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
```

## Search
- [https://fontawesome.com/icons/search?style=solid](https://fontawesome.com/icons/search?style=solid)

```html
<form class="form-search">
    <i class="fas fa-search"></i>
    <input type="text" placeholder="Search for a country...">
</form>
```

```css
.form-search {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 1rem;
    background-color: var(--color-bg-secondary);
    border-radius: 0.375rem;
}

.form-search i{
    color: var(--color-text);
    opacity: 0.5;
}

.form-search input {
    border: none;
    outline: none;
    background-color: var(--color-bg-secondary);
    margin-left: 1rem;
    /* width: 300px; */
    color: var(--color-text);
}
```

## Filter
- [https://www.w3schools.com/howto/howto_custom_select.asp](https://www.w3schools.com/howto/howto_custom_select.asp)
- [https://stackoverflow.com/questions/7208786/how-to-style-the-option-of-an-html-select-element](https://stackoverflow.com/questions/7208786/how-to-style-the-option-of-an-html-select-element)

```html
<div class="custom-select">
    <select>
        <option value="" active>Filter by Region</option>
        <option value="africa">África</option>
        <option value="america">América</option>
        <option value="asia">Asia</option>
        <option value="europe">Europa</option>
        <option value="oceania">Oceanía</option>
    </select>
</div>
```

```js
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
```

```css
/* The container must be positioned relative: */
.custom-select {
    position: relative;
    width: 200px;
}

.custom-select select {
    display: none; /*hide original SELECT element: */
}

.select-selected {
    background-color: var(--color-bg-secondary);
    border-radius: 0.375rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

/* Style the arrow inside the select element: */
.select-selected:after {
    position: absolute;
    content: "";
    top: 21px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: var(--color-text) transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
    border-color: transparent transparent var(--color-text); transparent;
    top: 14px;
}

/* style the items (options), including the selected item: */
.select-items div,.select-selected {
    color: var(--color-text);
    padding: 18px 16px;
    cursor: pointer;
    height: 52.4px;
}

/* Style items (options): */
.select-items {
    margin-top: 0.3rem;
    position: absolute;
    background-color: var(--color-bg-secondary);
    /* background-color: red; */
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
    border-radius: 0.375rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

/* Hide the items when the select box is closed: */
.select-hide {
    display: none;
}

.select-items div:hover, .same-as-selected {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 0.375rem;
}
```

```css
@media (max-width: 600px) {
    .navbar {
        font-size: .7rem;
    }

    .filter-content {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .grid {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    
    .form-search {
        margin-bottom: 1rem;
        width: 100%;
    }

    .form-search input{
        width: 85%;
    }

}
```

## Crear archivos JS
Aquí el orden es importante:
```html
<script src="js/darkmode.js"></script>
<script src="js/app.js"></script>
<script src="js/formulario.js"></script>
<script src="js/option.js"></script>
```

## Pintar Países (app.js)

```html
<section class="container grid" id="banderas"></section>
```

```js
const banderas = document.querySelector('#banderas')

document.addEventListener("DOMContentLoaded", function(event) {
    // console.log("DOM fully loaded and parsed");
    fetchData()
});

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        banderillas(data)

        formularioReal(data) // activa formulario search
        filtrarDatos(data) // activa filtros region

    } catch (error) {
        console.log(error)
    }
}

const banderillas = (data) => {

    let elementos = ''

    for (let [index, item] of data.entries()){
            // console.log(item)
            elementos += `
            <div class="card">
            <img src="${item.flag}" alt="Bandera ${item.name}" class="img-fluid">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p>
                        <b>Population: </b>
                        ${item.population}
                    </p>
                    <p>
                        <b>Region: </b>
                        ${item.region}
                    </p>
                    <p>
                        <b>Capital: </b>
                        ${item.capital}
                    </p>
                </div>
            </div>
            `
    }

    banderas.innerHTML = elementos

}
```

## Search (formulario.js)
```html
<form class="form-search" id="formulario">
    <i class="fas fa-search"></i>
    <input type="text" placeholder="Search for a country..." id="inputTexto">
</form>
```

```js
const formulario = document.querySelector('#formulario');
const inputTexto = document.querySelector('#inputTexto');

const formularioReal = (data) => {
    // console.log(data)
    formulario.addEventListener('keyup', async(e) => {
        e.preventDefault()

        const textoCliente = inputTexto.value.toLowerCase()
        // console.log(textoCliente)

        const formularioFiltrado = data.filter(item => {
            const textoApi = item.name.toLowerCase()
            if (textoApi.indexOf(textoCliente) !== -1) {
                return item
            }
        })
        banderillas(formularioFiltrado)
    
    })
}
```

## Región (option.js)

```html
<div class="custom-select">
    <select id="filtroSelect">
        <option value="">Filter by Region</option>
        <option value="">Todos</option>
        <option value="Africa">África</option>
        <option value="Americas">América</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceanía</option>
    </select>
</div>
```

1. Envolver todo en la función ``filtrarDatos``
2. Crear la query que llamará al filtro de Región.

```js{1,35,48-55}
const filtrarDatos = (data) => {

  var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;

      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        console.log(s)
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {

            console.log(s.options[i])

            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }

            this.setAttribute("class", "same-as-selected");
            
            // Agregar
            const query = s.options[i].value
            // console.log(query)
            if (query === '') {
                banderillas(data)
            } else {
                const filterData = data.filter(item => item.region === query)
                banderillas(filterData)
            }
            
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);

}
```

## Click en País
app.js
```js{24-26}
const banderillas = (data) => {

    let elementos = ''

    for (let [index, item] of data.entries()){
            // console.log(item)
            elementos += `
            <div class="card">
            <img src="${item.flag}" alt="Bandera ${item.name}" class="img-fluid">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p>
                        <b>Population: </b>
                        ${item.population}
                    </p>
                    <p>
                        <b>Region: </b>
                        ${item.region}
                    </p>
                    <p>
                        <b>Capital: </b>
                        ${item.capital}
                    </p>
                    <p>
                        <a href="pais.html?name=${item.name}">${item.name}</a>
                    </p>
                </div>
            </div>
            `
    }

    banderas.innerHTML = elementos

}
```

pais.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Países Vainilla CSS y JS</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/estilos.css">
    
</head>
<body class="">
    <nav class="navbar">
        <div class="container navbar-content">
            <h1>Where in the world?</h1>
            <button class="btn-dark-mode">
                <i class="fas fa-moon"></i>
                Dark Mode
            </button>
        </div>
    </nav>

    <section class="container filter-content my-2">
        <a href="index.html" class="btn-back">
            Back
        </a>
    </section>

    <section class="container grid" id="bandera">
       
    </section>


    <script src="js/darkmode.js"></script>
    <script src="js/pais.js"></script>

</body>
</html>
```

```css
.btn-back {
    text-decoration: none;
    background-color: var(--color-bg);
    transition: 0.3s;
    color: var(--color-text);
    border: none;
    cursor: pointer; /* border none lo borra */
    outline: none; /* quitamos el borde al hacer click */
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 0.375rem;
}

.btn-back:hover {
    opacity: 0.6;
    background-color: black;
    color: white;
}
```

pais.js
```js
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    fetchData()
});

const fetchData = async () => {
    try {
        // const res = await fetch(`https://restcountries.eu/rest/v2/name/${params}`)
        // const data = await res.json()
        const res = await fetch('api.json')
        const data = await res.json()
        const filterData = data.filter(item => item.name === params)
        console.log(filterData)
        banderillas(filterData)
    } catch (error) {
        console.log(error)
    }
}

const bandera = document.getElementById('bandera')

const banderillas = (data) => {
    let elementos = ''
    for (let [index, item] of data.entries()){
        elementos += `
        <div class="card">
        <img src="${item.flag}" alt="Bandera ${item.name}" class="img-fluid">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>
                    <b>Population: </b>
                    ${item.population}
                </p>
                <p>
                    <b>Region: </b>
                    ${item.region}
                </p>
                <p>
                    <b>Capital: </b>
                    ${item.capital}
                </p>
                <p>
                    <b>alpha3Code: </b>
                    ${item.alpha3Code}
                </p>
                <p>
                    <b>demonym: </b>
                    ${item.demonym}
                </p>
                <p>
                    <b>topLevelDomain: </b>
                    ${item.topLevelDomain[0]}
                </p>
            </div>
        </div>
        `
    }
    bandera.innerHTML = elementos
}
```