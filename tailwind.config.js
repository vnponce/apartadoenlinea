const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'title': ['Libre Caslon Display'],
        'body': ['Roboto'],
      },
      colors: {
        brand: {
          orange: '#ef7d07',
          yellow: '#fdeb1a',
          green: '#087a35',
          gray: colors.gray[100],
          grayOpt: '#f1f1f1',
          icons: '#686868',
        },
        primary: '#ef7d07',
        secondaryYellow: '#fdeb1a',
        secondaryGreen: '#087a35',
        regularText: '#838383',
        regularBackground: colors.gray[100],
        // regularBackground: '#f1f1f1',
      }
    },
      /*
    colors: {
      ...colors,
      primary: '#ef7d07',
      secondaryYellow: '#fdeb1a',
      secondaryGreen: '#087a35',
      regularText: '#838383',
      // regularBackground: colors.gray[100],
      regularBackground: '#f1f1f1',
    }
    */
  },
    variants: {
        backgroundColor: ['responsive', 'odd', 'even', 'hover'],
        flexDirection: ['responsive', 'odd', 'even'],
    },
  plugins: []
}
