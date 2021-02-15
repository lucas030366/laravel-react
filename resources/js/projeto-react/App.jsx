import React from "react"
import Router from "./router"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import store from "./store"

import Header from "./components/layouts/header/Sidebar"
import Footer from "./components/layouts/footer/Footer"

export default () =>
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <section className="content-wrapper px-4 py-2">
        <Router />
      </section>
    </Provider>
  </BrowserRouter>