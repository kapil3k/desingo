import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Nav from './component/Nav'
import Home from './pages/Home'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import './style/app.css'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Nav />

      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/locations'>
          <Locations />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>



      </Switch>
    </div>
  )
}

export default App
