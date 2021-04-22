import React from "react"
import { Link } from "react-router-dom"
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"

import PetTypesList from "./PetTypesList"
import PetsByType from "./PetsByType.js"
import PetDetailShow from "./PetDetailShow.js"

const NavBar = (props) => {

  return (
    <div>
      <nav>
      <Link to="/pets">Back to home page</Link>
      <Link to="/pets/dog">Dogs</Link>
      <Link to="/pets/cat">Cats</Link>
      <Link to="/pets/mythical_creatures">Mythical Creatures</Link>
      <Link to="/adoptions/new">List a pet for adoption</Link>
      </nav>
      <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/pets" />
        </Route>
        <Route exact path="/pets" component={PetTypesList} />
        <Route exact path="/pets/:type" component={PetsByType} />
        <Route exact path="/pets/:type/:id" component={PetDetailShow} />
      </Switch>
      </div>
    </div>
  )
}

export default NavBar