import React from "react"
import { Switch, Route, Redirect } from "react-router"

import Index from "../components/dashboard/Index"
import Contato from "../components/dashboard/Contato"

const route = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/contato" component={Contato} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default route