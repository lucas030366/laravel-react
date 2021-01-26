import React from "react"
import { Switch, Route, Redirect } from "react-router"

import Index from "../components/dashboard/Index"
import Contato from "../components/dashboard/Contato"
import Login from "../components/auth/Login"

const route = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/contato" component={Contato} />
      <Route exact path="/login" component={Login} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default route