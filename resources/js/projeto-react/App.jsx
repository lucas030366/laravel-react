import React from "react"
import Router from "./router"
import { BrowserRouter } from "react-router-dom"

import Header from "./components/layouts/header/Header"
import Footer from "./components/layouts/footer/Footer"

export default () =>
  <BrowserRouter>
    <Header />
    <section className="content-wrapper px-4 py-2">
      <Router />
    </section>

  </BrowserRouter>