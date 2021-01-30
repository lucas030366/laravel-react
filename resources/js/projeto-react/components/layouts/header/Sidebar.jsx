import React from "react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary position-fixed">

      <a className="brand-link">
        <img src="https://via.placeholder.com/450" alt="AdminLTE Logo" className="brand-image white-text img-circle elevation-3" />
        <span className="brand-text font-weight-light">Sunrise</span>
      </a>

      <div className="sidebar">

        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="avatar">
            <i className="fas fa-user-alt elevation-3"></i>
          </div>
          <div className="info">
            <h6 className="d-block">Lorem Ipsum</h6>
          </div>
        </div>

        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="nav-icon fas fa-home"></i>
                <p>Home</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="variaveis">
                <i className="nav-icon fas fa-sync"></i>
                <p>Variaveis</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="orcamento">
                <i className="nav-icon fas fa-stream"></i>
                <p>Orçamento</p>
              </Link>
            </li>
          </ul>
        </nav>

      </div>

    </aside>
  )
}

export default Sidebar