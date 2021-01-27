import React from "react"

const Configuracoes = () => {
  return (
    <div className="container">

      <div className="veiculo">
        <h3>Veículo</h3>

        <div className="row">

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="combustivel">
                combustível
              </label>
              <input name="combustivel" className="form-control" id="combustivel" />
            </div>
          </div>

        </div>
      </div>

      <hr />

      <div className="telhado">
        <h3>Telhado (preço unitário)</h3>

        <div className="row">

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="telha_ceramica">
                cerâmica
              </label>
              <input name="telha_ceramica" className="form-control" id="telha_ceramica" />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="telha_fibrocimento">
                fibrocimento
              </label>
              <input name="telha_fibrocimento" className="form-control" id="telha_fibrocimento" />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="talha_madeira">
                madeira
              </label>
              <input name="talha_madeira" className="form-control" id="talha_madeira" />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="telha_policarbonato">
                policarbonato
              </label>
              <input name="telha_policarbonato" className="form-control" id="telha_policarbonato" />
            </div>
          </div>

        </div>

        <hr />

        <div className="piso">
          <h3>Piso (preço unitário)</h3>

          <div className="row">

            <div className="col-md-2">
              <div className="form-group">
                <label className="col-form-label font-weight-normal" htmlFor="piso_ceramica">
                  cerâmica
                  </label>
                <input name="piso_ceramica" className="form-control" id="piso_ceramica" />
              </div>
            </div>

            <div className="col-md-2">
              <div className="form-group">
                <label className="col-form-label font-weight-normal" htmlFor="piso_porcelanato">
                  porcelanato
                  </label>
                <input name="piso_porcelanato" className="form-control" id="piso_porcelanato" />
              </div>
            </div>

            <div className="col-md-2">
              <div className="form-group">
                <label className="col-form-label font-weight-normal" htmlFor="piso_laminado">
                  laminado
                  </label>
                <input name="piso_laminado" className="form-control" id="piso_laminado" />
              </div>
            </div>

            <div className="col-md-2">
              <div className="form-group">
                <label className="col-form-label font-weight-normal" htmlFor="policarbonato">
                  policarbonato
              </label>
                <input name="policarbonato" className="form-control" id="policarbonato" />
              </div>
            </div>

          </div>

        </div>

        <hr />

        <div className="mao_obra">
          <h3>Mão de obra (metro quadrado)</h3>

          <div className="row">

            <div className="col-md-2">
              <div className="form-group">
                <label className="col-form-label font-weight-normal" htmlFor="mdo_piso">
                  piso
                  </label>
                <input name="mdo_piso" className="form-control" id="mdo_piso" />
              </div>
            </div>

            <div className="col-md-2">
              <div className="form-group">
                <label className="col-form-label font-weight-normal" htmlFor="mdo_telhado">
                  telhado
                  </label>
                <input name="mdo_telhado" className="form-control" id="mdo_telhado" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Configuracoes