export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },

  border: {
    radius: '0.4rem'
  },

  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans- serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },

  colors: {
    background: '#141620',
    shape: '#090B10',
    gradient: 'linear-gradient(90deg, #00359d 5%, #006fff 50%, #3fccff 100%)',
    primary: '#00359d',
    secondary: '#D6AE2F',
    border: '#212b54',
    hover: '#212b54',
    title: '#BFC4D3',
    subtitle: '#9e9e9e',
    subtext: '#585858',
    mainBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    yellow: '#FF9F1C',
    red: '#FF4040',
    green: '#2EC4B6',
    dark: '#0A1014',
    grey: '#1B2329',
    midGrey: '#353F4C',
    lightGrey: '#7A8C99'
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
