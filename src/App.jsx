import { Component } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'

const theme = createTheme({
  palette: {
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    )
  }
}