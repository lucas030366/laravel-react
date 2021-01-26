import React from "react"


const Login = () => {
  return (
    <div >    
      <div className="container">
        <div className="login-box mx-auto">

          <div className="card">
            <div className="card-body login-card-body">


              <form >
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Email" />

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Password" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Login</button>

              </form>

              <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                 </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login