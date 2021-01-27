import React, { lazy, Suspense } from "react"
import { Switch, Route, Redirect } from "react-router"

const Index = lazy(() => (import("../components/dashboard/Index")))
const Config = lazy(() => (import("../components/dashboard/Configuracoes")))
const Order = lazy(() => (import("../components/dashboard/order/Order")))
const Login = lazy(() => (import("../components/auth/Login")))

const route = () => {
  return (
    <Suspense fallback={<></>}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/configuracoes" component={Config} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/orcamento" component={Order} />
        <Redirect from="*" to="/" />
      </Switch>
    </Suspense>

  )
}

export default route