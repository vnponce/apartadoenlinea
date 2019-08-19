const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'title': ['Libre Caslon Display'],
        'body': ['Roboto'],
      },
      colors: {
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
