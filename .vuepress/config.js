module.exports = {
  title: 'Prácticas bluuweb',
  description: 'Aprende desarrollando proyectos',
  base: '/practicas/',
  locales:{
    '/':{
      lang: 'es-ES'
    }
  },
  themeConfig:{
    nav: [
      { text: 'Guías', link: 'https://bluuweb.github.io/' },
      // { text: 'Guia', link: '/docs/' },
      { text: 'Youtube', link: 'https://youtube.com/bluuweb' },
      { text: 'Curso Vue 3', link: 'http://curso-vue-js-udemy.bluuweb.cl' },
      { text: 'Curso React', link: 'http://curso-react-js-udemy.bluuweb.cl' }
    ],
    sidebar:
      [
        '/',
        '/03-card/',
        '/01-api-paises/',
        '/02-dark-mode/',
      ]
  }
 
}


{/* <img :src="$withBase('/img/compu-1.gif')"> */}