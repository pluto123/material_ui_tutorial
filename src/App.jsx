import { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Create from './pages/Create'
import Note from './pages/Note'

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to='/create'>Create</Link><br />
        <Link to='/note'>Note</Link>
        <Switch>
            <Route path='/create' component={Create} />
            <Route path='/note' component={Note} />
        </Switch>
      </div>
    )
  }
}