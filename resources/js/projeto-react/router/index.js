import React from "react"
import { Switch, Route, Redirect } from "react-router"

import Index from "../components/dashboard/Index"

const route = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default route