const data = [
  {
    id: '1',
    title: 'Tronix App',
    description:
      'Tronix is an electronic  application. Connect with like minded users as you build your own custom profile, communicate and share music via the newsfeed.',
    image: {
      src: 'https://www2.wi-tronix.com/wp-content/uploads/2022/08/New-Wi-Tronix-Website.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://tronixapp.vercel.app/',
    },
    technologies: [
      '#javascript',
      '#react-native',
      '#react-native-web',
      '#react-navigation',
    ],
  },
  {
    id: '2',
    title: 'Minfin - Currency Rates',
    description:
      'Minfin Currency - application with all necessary information about currency: from currency rates - to the nearest places where you can exchange currency in your city.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1671563302/portfolio/projects/minfin/Screenshot_2022-12-20_at_21.06.43_vl5h6k.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://apps.apple.com/us/app/minfin-currency-rates/id1574863878',
    },
    technologies: [
      '#react-native',
      '#mobx-keystone',
      '#i18next',
      '#firebase-analytics',
      '#google-maps',
    ],
  },
  {
    id: '3',
    title: 'Swatch Series (Desktop Only)',
    description:
      'A react native app with animations made with react. The app is based on the Swatch Movies Series',
    image: {
      src: 'https://i0.wp.com/marketbusinesstimes.com/wp-content/uploads/2023/04/1_11zon-2023-04-09T151008.480.jpg?fit=800%2C409&ssl=1',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: '',
    },
    technologies: [
      '#react-native',
      '#expo',
      '#react-native-reanimated',
      '#react-navigation',
    ],
  },
  {
    id: '4',
    title: 'Apiko Marketplace',
    description:
      'An online marketplace made with React. The project was developed on 8th Apiko Intensive.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348072/portfolio/projects/react-marketplace/apiko-marketplace-lg_xppe9n.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      
    },
    technologies: [
      '#react',
      '#redux',
      '#socket.io',
      '#scss',
      '#formik',
      '#react-window',
      '#restapi',
    ],
  },
  {
    id: '5',
    title: 'Places App',
    description:
      'A MERN app to let users share their experience of places along with Details. It is user friendly and can be useful to many others.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348070/portfolio/projects/mern-places/mern-places-lg_xf6zom.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://yourplaces-sv.netlify.app/',
    },
    technologies: [
      '#react',
      '#nodejs',
      '#express',
      '#mongodb',
      '#react-query',
      '#react-transition-group',
      '#mongoose',
      '#jwt',
      '#aws',
    ],
  },
  {
    id: '6',
    title: 'eCommerce Mobile App',
    description:
      'A Mobile eCommerce application built with React Native that includes cart functionality, push notifications, user authentication and user orders',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-shop/rn-shop-lg_fofglf.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
     
    },
    technologies: [
      '#react-native',
      'expo',
      '#redux',
      '#redux-toolkit',
      '#react-navigation',
      '#nodejs',
    ],
  },
  {
    id: '7',
    title: 'Places Mobile App',
    description:
      'A Mobile application for sharing places that people visit from all over the world. Uses React Native, TypeScript, MobX and Native Device Features',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-places/rn-places-lg_ljyikm.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      
    },
    technologies: [
      '#react-native',
      '#typescript',
      '#expo',
      '#mobx',
      '#sqlite',
      '#react-native-maps',
      '#expo-location',
    ],
  },
  {
    id: '8',
    title: 'Shopping Cart',
    description:
      'Simple eCommerce cart application built with React and TypeScript. Uses SWR hook to fetch the data from the API and Styled Components',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/react-shop-cart/rn-shop-cart-lg_w3qxn6.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
     
    },
    technologies: [
      '#react',
      '#typescript',
      '#material-ui',
      '#styled-components',
      '#swr',
      '#fakestoreapi',
    ],
  },
];

export default data;
