/* custom style using tailwind js */

module.exports = {
    content: [
      './src/**/*.{html,js}',
    ],
    theme: {
      extend: {
        /*--------------- Custom color ------------*/
        colors: {
          primary: '#B9FF66',
          secondary: '#191A23',
          third: '#F3F3F3',
        },
        /*--------------- Custom color ------------*/
        /*--------------- Custom google font ------------*/
        fontFamily: {
          'space-grotesk': ['Space Grotesk', 'serif'],
        },
        /*--------------- Custom google font ------------*/
      },
    },
    plugins: [],
  }
/* custom style using tailwind js */