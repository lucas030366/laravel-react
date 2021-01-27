import React from "react"

const Order = () => {
  return (
    <div className="container">
      <h3>Orçamento</h3>

      <hr />

      <div className="row">

        <div className="col-md-12">
          <div className="form-group">
            <label>Título</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="col-md-9">
          <div className="form-group">
          <label className="d-block">Tipo de serviço</label>
            <div className="custom-control custom-control-inline custom-switch custom-switch-on-success">
              <input type="checkbox" className="custom-control-input" id="telhado" />
              <label className="custom-control-label" htmlFor="telhado">
                Telhado
              </label>
            </div>

            <div className="custom-control custom-control-inline custom-switch custom-switch-on-success">
              <input type="checkbox" className="custom-control-input" id="piso" />
              <label className="custom-control-label" htmlFor="piso">
                Piso
              </label>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Order