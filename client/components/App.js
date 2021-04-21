import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "foundation-sites"
import $ from "jquery"
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"

import "../assets/scss/main.scss"
import PetTypesList from "./PetTypesList"

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
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default hot(App)
