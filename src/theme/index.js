const palette = {
  black: '#000000',
  white: '#ffffff',
  red: '#FF0000',
  green: '#00ff00'
}

const colors = {
  text: palette.black,
  button: {
    title: palette.white,
    backgroundColor: palette.red,
  },
  header: {
    backgroundColor: palette.red,
  },
}

const fonts = {
  paragraph: { fontSize: 10, color: colors.text },
}

const spacing = { unit: 4 }

export const theme = {
  colors,
  fonts,
  spacing,
}
