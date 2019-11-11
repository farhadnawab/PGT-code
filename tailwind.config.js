module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#003763',
        'secondary': '#F6B221',
        'tertiary': '#808083',
        'green': '#00A451'
      },
      letterSpacing:{
          'wider': '3px',
          'widest': '6px'
      },
      fontFamily: {
        'mont': 'Montserrat',
        'myriadpro': 'MyriadPro',
        'opensans': 'Open Sans'
      },
      fontSize: {
        '2xs': '0.65em',
        '3xs': '0.55em',
        '4xs': '0.45em'
      },
      borderRadius: {
        'br-15': '15px'
      }
    }
  },
  variants: ['responsive', 'hover', 'focus', 'group-hover'],
  plugins: []
}
