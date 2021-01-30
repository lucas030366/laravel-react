import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import actions from "../../resources/store/variaveis/actions"

const initial_state = {
  combustivel: null,
  telha_ceramica: null,
  telha_fibrocimento: null,
  telha_madeira: null,
  telha_policarbonato: null,
  piso_ceramica: null,
  piso_porcelanato: null,
  piso_laminado: null,
  piso_policarbonato: null,
  tinta: null,
  pincel: null,
  rolo_pintura: null,
  bandeja_pintura: null,
  mdo_piso: null,
  mdo_telhado: null,
  mdo_pintura: null,
  pregos: null,
  madeira_viga: null,
  luvas: null,
  argamassa: null,
  cimento: null,
  areia: null,
  brita: null,
  vergalhao: null,
  escoras: null,
  rejunte: null,
  abracadeira: null,
  gesso: null,
  lixa: null,
  lona: null,
  vassoura: null,
}

const Variaveis = ({ variaveis, getVariables }) => {
  const [itens, set_itens] = useState(initial_state)


  useEffect(() => {
    (async () => {

      try {
        await getVariables()
        set_itens(variaveis)
      } catch (error) {
        console.log(error.message)
      }
    })();

  }, [])

  function onChange(event) {
    const { name, value } = event.target
    set_itens({ ...itens, [name]: value })
  }

  function submit() {
    console.log(itens)
  }

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
              <input name="combustivel" className="form-control" id="combustivel" onChange={onChange} />
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
              <input name="telha_ceramica" className="form-control" id="telha_ceramica" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="telha_fibrocimento">
                fibrocimento
              </label>
              <input name="telha_fibrocimento" className="form-control" id="telha_fibrocimento" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="telha_madeira">
                madeira
              </label>
              <input name="telha_madeira" className="form-control" id="telha_madeira" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="telha_policarbonato">
                policarbonato
              </label>
              <input name="telha_policarbonato" className="form-control" id="telha_policarbonato" onChange={onChange} />
            </div>
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
              <input name="piso_ceramica" className="form-control" id="piso_ceramica" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="piso_porcelanato">
                porcelanato
                  </label>
              <input name="piso_porcelanato" className="form-control" id="piso_porcelanato" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="piso_laminado">
                laminado
                  </label>
              <input name="piso_laminado" className="form-control" id="piso_laminado" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="piso_policarbonato">
                policarbonato
              </label>
              <input name="piso_policarbonato" className="form-control" id="piso_policarbonato" onChange={onChange} />
            </div>
          </div>

        </div>

      </div>

      <hr />

      <div className="pintura">
        <h3>Pintura</h3>

        <div className="row">

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="tinta">
                Tinta
                </label>
              <input name="tinta" className="form-control" id="tinta" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="pincel">
                Pincel
                </label>
              <input name="pincel" className="form-control" id="pincel" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="rolo_pintura">
                Rolo de pintura
                </label>
              <input name="rolo_pintura" className="form-control" id="rolo_pintura" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="bandeja_pintura">
                Bandeja
                </label>
              <input name="bandeja_pintura" className="form-control" id="bandeja_pintura" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="fita_crepe">
                Fita Crepe
                </label>
              <input name="fita_crepe" className="form-control" id="fita_crepe" onChange={onChange} />
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
              <input name="mdo_piso" className="form-control" id="mdo_piso" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="mdo_telhado">
                telhado
                  </label>
              <input name="mdo_telhado" className="form-control" id="mdo_telhado" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="mdo_pintura">
                pintura
                  </label>
              <input name="mdo_pintura" className="form-control" id="mdo_pintura" onChange={onChange} />
            </div>
          </div>

        </div>

      </div>

      <hr />

      <div className="outros">
        <h3>Outros</h3>

        <div className="row">

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="pregos">
                pregos (pct)
                 </label>
              <input name="pregos" className="form-control" id="pregos" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="madeira_viga">
                madeira / viga
                </label>
              <input name="madeira_viga" className="form-control" id="madeira_viga" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="luvas">
                luvas
                </label>
              <input name="luvas" className="form-control" id="luvas" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="argamassa">
                argamassa
                </label>
              <input name="argamassa" className="form-control" id="argamassa" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="cimento">
                cimento
                </label>
              <input name="cimento" className="form-control" id="cimento" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="areia">
                areia
                 </label>
              <input name="areia" className="form-control" id="areia" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="brita">
                brita
                 </label>
              <input name="brita" className="form-control" id="brita" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="vergalhao">
                vergalhão
                </label>
              <input name="vergalhao" className="form-control" id="vergalhao" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="escoras">
                escoras
                </label>
              <input name="escoras" className="form-control" id="escoras" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="rejunte">
                rejunte
                </label>
              <input name="rejunte" className="form-control" id="rejunte" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="abracadeira">
                abraçadeira
                </label>
              <input name="abracadeira" className="form-control" id="abracadeira" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="gesso">
                gesso
                </label>
              <input name="gesso" className="form-control" id="gesso" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="lixa">
                lixa
                </label>
              <input name="lixa" className="form-control" id="lixa" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="lona">
                lona
                </label>
              <input name="lona" className="form-control" id="lona" onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="vassoura">
                vassoura
                </label>
              <input name="vassoura" className="form-control" id="vassoura" onChange={onChange} />
            </div>
          </div>


        </div>

      </div>


      <div className="text-right">
        <button className="btn btn-lg btn-success" onClick={submit}>
          Salvar <i className="fas fa-check"></i>
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  variaveis: state.get_variables.variables
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Variaveis)