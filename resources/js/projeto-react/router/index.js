import React, { lazy, Suspense } from "react"
import { Switch, Route, Redirect } from "react-router"

const Index = lazy(() => (import("../components/dashboard/Index")))
const Variaveis = lazy(() => (import("../components/dashboard/variables/Variaveis")))
const Order = lazy(() => (import("../components/dashboard/order/Order")))
const Login = lazy(() => (import("../components/auth/Login")))

const Router = () => {
  return (
    <Suspense fallback={<></>}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/variaveis" component={Variaveis} />
        <Route path="/orcamento" component={Order} />
        <Redirect from="*" to="/" />
      </Switch>
    </Suspense>
  )
}

export default Router