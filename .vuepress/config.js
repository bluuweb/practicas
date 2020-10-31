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
      { text: 'Curso Vue.js', link: 'http://curso-vue-js-udemy.bluuweb.cl' }
    ],
    sidebar:
      [
        '/',
        '/01-api-paises/',
      ]
  }
 
}


{/* <img :src="$withBase('/img/compu-1.gif')"> */}