// path: ./my-app/src/admin/app.js

import AuthLogo from './extensions/logo.png';
import MenuLogo from './extensions/logo.png';
import favicon from './extensions/favicon.ico';



export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ['es'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: '#f6ecfc',
          primary200: '#e0c1f4',
          primary500: '#ac73e6',
          primary600: '#9736e8',
          primary700: '#8312d1',
          danger700: '#b72b1a'
        },
      },
      
      // overwrite dark theme properties
      dark: {
         // ...
      }
    },
    // Extend the translations
    translations: {
      es: {
        'app.components.LeftMenu.navbrand.title': 'ponteGEEK',
        'app.components.LeftMenu.navbrand.workplace': 'Creador de contenido',
        'app.components.HomePage.welcome': 'Bienvenidos GEEK`s',
        'app.components.HomePage.welcome.again': 'Bienvenidos GEEK`s',
        "app.components.HomePage.welcomeBlock.content.again": "Estamos encantados de estés aquí, acompañándonos. Aquí, encontrarás un espacio para compartir tus ideas, explorar tu creatividad a través de la producción de contenido cautivador e innovador. ¡Manos a la obra y que comience la magia!",
        'Auth.form.welcome.subtitle': 'Este es el creador de contenido de ponteGEEK, inicia sesión',
        "Auth.form.email.placeholder": "darthvader@pontegeek.com",
        
      },
    },
   // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap() {},
};
