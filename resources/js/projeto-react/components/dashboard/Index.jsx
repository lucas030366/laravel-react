import React from "react"
import { useSelector } from "react-redux"

const Index = () => {
  const variables = useSelector(state => state.set_variables.variables)

  return (
    <div className="container">
      <div className="row">
        {
          <h3>{ variables.combustivel }</h3>
        }

        <div className="col-4">
          <div className="small-box bg-gradient-success">
            <div className="inner">
              <h3>44</h3>
              <p>User Registrations</p>
            </div>
            <div className="icon">
              <i className="fas fa-user-plus"></i>
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Index