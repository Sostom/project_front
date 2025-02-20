
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'MiMob',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: "stylesheet",  href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"},

      { rel: "shortcut icon", type: "image/x-icon", href:"/img/logos/logos.png"},
      { rel: "stylesheet",  href: "/css/bootstrap.min.css"},
      { rel: "stylesheet",  href: "/css/owl.carousel.css"},
      { rel: "stylesheet",  href: "/css/owl.transitions.css"},
      { rel: "stylesheet",  href: "/css/animate.css"},
      { rel: "stylesheet",  href: "/css/meanmenu.min.css"},
      { rel: "stylesheet",  href: "/css/font-awesome.min.css"},
      { rel: "stylesheet",  href: "/css/themify-icons.css"},
      { rel: "stylesheet",  href: "/css/flaticon.css"},
      { rel: "stylesheet",  href: "/css/venobox.css"},
      { rel: "stylesheet",  href: "/css/magnific.min.css"},
      { rel: "stylesheet",  href: "/css/style.css"},
      { rel: "stylesheet",  href: "/css/responsive.css"}
    ],
  script: [
      { src: "/js/vendor/jquery-1.12.4.min.js"},
      { src: "/js/bootstrap.min.js"},
      { src: "/js/owl.carousel.min.js"},
      { src: "/js/jquery.counterup.min.js"},
      { src: "/js/waypoints.js"},
      { src: "/js/magnific.min.js"},
      { src: "/js/wow.min.js"},
      { src: "/js/venobox.min.js"},
      { src: "/js/jquery.meanmenu.js"},
      { src: "/js/form-validator.min.js"},
      { src: "/js/plugins.js"},

    ]

  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
  
  router: {
    middleware:['auth'],
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          type: 'Bearer',
          maxAge: 18000,
        },
        
        autoLogout:false,
        
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: 'https://projectapi-production-4fc2.up.railway.app/api/login', method: 'post', propertyName: 'access_token' },
          user: { url: 'https://projectapi-production-4fc2.up.railway.app/api/user', method: 'get', propertyName: 'content' },
          logout: false
        },
      },
    }
  },

  axios: {
    baseURL: "https://projectapi-production-4fc2.up.railway.app/api",
    credentials:true
  },

}
