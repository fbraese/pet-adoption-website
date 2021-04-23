import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "foundation-sites"
import $ from "jquery"
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"

import "../assets/scss/main.scss"
import PetTypesList from "./PetTypesList"
import PetsByType from "./PetsByType.js"
import PetDetailShow from "./PetDetailShow.js"
import SurrenderForm from "./SurrenderForm.js"

const App = props => {
  useEffect(() => {
    $(document).foundation()
  }, [])

  return (
    <div className="callout primary">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/pets" />
          </Route>
          <Route exact path="/pets" component={PetTypesList} />
          <Route exact path="/pets/:type" component={PetsByType} />
          <Route exact path="/pets/:type/:id" component={PetDetailShow} />
          <Route exact path="/adoptions/new" component={SurrenderForm} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default hot(App)
