import React, { useEffect } from "react"
import { hot } from "react-hot-loader/root"
import "foundation-sites"
import $ from "jquery"
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"

import "../assets/scss/main.scss"
import NavBar from "./NavBar.js"

const App = props => {
  useEffect(() => {
    $(document).foundation()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={NavBar} />
      </BrowserRouter>
    </div>
  )
}

export default hot(App)
