import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import NewIncident from './pages/NewIncident'
import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Logon}/>
        <Route path='/incidents/new' component={NewIncident} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}