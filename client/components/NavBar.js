import React from "react"
import { Link } from "react-router-dom"
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"

import PetTypesList from "./PetTypesList"
import PetsByType from "./PetsByType.js"
import PetDetailShow from "./PetDetailShow.js"
import SurrenderForm from "./SurrenderForm.js"

const NavBar = (props) => {

  return (
    <div>
      <div className="navbar-wrapper">
        {/* <nav className="grid-x navbar solid-border-bottom"> */}
        <nav className="grid-x navbar">
          <Link className="links" to="/pets">Home page</Link> |
        <Link className="links" to="/pets/dog">Dogs</Link> |
        <Link className="links" to="/pets/cat">Cats</Link> |
        <Link className="links" to="/pets/mythical_creatures">Mythical Creatures</Link> |
        <Link className="links" to="/adoptions/new">List a pet for adoption</Link>
        </nav>
      </div>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Redirect to="/pets" />
          </Route>
          <Route exact path="/pets" component={PetTypesList} />
          <Route exact path="/pets/:type" component={PetsByType} />
          <Route exact path="/pets/:type/:id" component={PetDetailShow} />
          <Route exact path="/adoptions/new" component={SurrenderForm} />
        </Switch>
      </div>
    </div>
  )
}

export default NavBar