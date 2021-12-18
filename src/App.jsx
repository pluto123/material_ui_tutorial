import { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Create from './pages/Create'
import Note from './pages/Note'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FEFEFE'
    },
    secondary: purple
  }
})

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Link to='/create'>Create</Link><br />
          <Link to='/note'>Note</Link>
          <Switch>
              <Route path='/create' component={Create} />
              <Route path='/note' component={Note} />
          </Switch>
        </div>
      </ThemeProvider>
    )
  }
}