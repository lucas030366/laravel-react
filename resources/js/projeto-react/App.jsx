import React from "react"
import Router from "./router"
import { BrowserRouter } from "react-router-dom"

import Header from "./components/dashboard/Header"
import Footer from "./components/dashboard/Footer"

export default () =>
  <BrowserRouter>
    <Header />
    <Router />
    <Footer />
  </BrowserRouter>