import React, { Fragment } from "react"
import { Link } from "react-router-dom"

import Sidebar from "./Sidebar"

const Header = () => {
	return (
		<Fragment>
			<Sidebar />

			<header>
				<nav className="main-header navbar navbar-expand">

					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" role="button">
								<i className="fas fa-bars"></i>
							</a>
						</li>
						<li className="nav-item d-none d-sm-inline-block">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item d-none d-sm-inline-block">
						<Link className="nav-link" to="contato">Contato</Link>
						</li>
					</ul>


					<ul className="navbar-nav ml-auto">

						<li className="nav-item dropdown">
							<a className="nav-link" data-toggle="dropdown" href="#">
								<i className="far fa-comments"></i>
								<span className="badge badge-danger navbar-badge">3</span>
							</a>

							<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
								<a href="#" className="dropdown-item">
									<div className="media">
										<img src="https://via.placeholder.com/450" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
										<div className="media-body">
											<h3 className="dropdown-item-title">
												Brad Diesel
												<span className="float-right text-sm text-danger">
													<i className="fas fa-star"></i>
												</span>
											</h3>
											<p className="text-sm">Call me whenever you can...</p>
											<p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
										</div>
									</div>
								</a>

								<a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
							</div>
						</li>

						<li className="nav-item dropdown">
							<a className="nav-link" data-toggle="dropdown" href="#">
								<i className="far fa-bell"></i>
								<span className="badge badge-warning navbar-badge">15</span>
							</a>
							<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
								<span className="dropdown-item dropdown-header">15 Notifications</span>
								<div className="dropdown-divider"></div>

								<a href="#" className="dropdown-item">
									<i className="fas fa-envelope mr-2"></i> 4 new messages
									<span className="float-right text-muted text-sm">3 mins</span>
								</a>

								<a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
								<i className="fas fa-th-large"></i>
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</Fragment>
	)
}

export default Header