import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"


import actions from "@/resources/store/variaveis/actions"
import api from "@/resources/request/variables"



const { getVariables } = actions

const Variaveis = () => {

  const variables = useSelector(state => state.set_variables.variables)
  const dispatch = useDispatch()

  const [itens, set_itens] = useState([])

  useEffect(() => {
    if (Object.values(variables).length > 0) return

    (async () => {
      try {
        const response = await api.get_variables()
        dispatch(getVariables(response))
      } catch (error) {
        console.log(error.message)
      }
    })()

  }, [])

  useEffect(() => {
    set_itens(variables)
  }, [variables])


  function onChange(event) {
    const { name, value } = event.target
    set_itens({ ...itens, [name]: value })
  }

  async function submit() {
    let edit_itens = { ...itens }
    try {
      await api.create_variables(edit_itens)
    } catch (error) {
      console.log(error.message)
    }
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
              <input name="combustivel" type="text" className="form-control"
                id="combustivel" value={itens.combustivel || ""}
                onChange={onChange} />
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
              <label className="col-form-label font-weight-normal" htmlFor="telhado_ceramica">
                cerâmica
              </label>
              <input name="telhado_ceramica" className="form-control"
                id="telhado_ceramica" value={itens.telhado_ceramica || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="telhado_fibrocimento">
                fibrocimento
              </label>
              <input name="telhado_fibrocimento" className="form-control"
                id="telhado_fibrocimento" value={itens.telhado_fibrocimento || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="telhado_madeira">
                madeira
              </label>
              <input name="telhado_madeira" className="form-control"
                id="telhado_madeira" value={itens.telhado_madeira || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="telhado_policarbonato">
                policarbonato
              </label>
              <input name="telhado_policarbonato" className="form-control"
                id="telhado_policarbonato" value={itens.telhado_policarbonato || ""}
                onChange={onChange} />
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
              <input name="piso_ceramica" className="form-control"
                id="piso_ceramica" value={itens.piso_ceramica || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="piso_porcelanato">
                porcelanato
                  </label>
              <input name="piso_porcelanato" className="form-control"
                id="piso_porcelanato" value={itens.piso_porcelanato || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="piso_laminado">
                laminado
                  </label>
              <input name="piso_laminado" className="form-control"
                id="piso_laminado" value={itens.piso_laminado || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="piso_policarbonato">
                policarbonato
              </label>
              <input name="piso_policarbonato" className="form-control"
                id="piso_policarbonato" value={itens.piso_policarbonato || ""}
                onChange={onChange} />
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
              <input name="tinta" className="form-control"
                id="tinta" value={itens.tinta || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="pincel">
                Pincel
                </label>
              <input name="pincel" className="form-control"
                id="pincel" value={itens.pincel || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="rolo_pintura">
                Rolo de pintura
                </label>
              <input name="rolo_pintura" className="form-control"
                id="rolo_pintura" value={itens.rolo_pintura || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="bandeja">
                Bandeja
                </label>
              <input name="bandeja" className="form-control"
                id="bandeja" value={itens.bandeja || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="fita_crepe">
                Fita Crepe
                </label>
              <input name="fita_crepe" className="form-control"
                id="fita_crepe" value={itens.fita_crepe || ""}
                onChange={onChange} />
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
              <label className="col-form-label font-weight-normal" htmlFor="mao_obra_piso">
                piso
              </label>
              <input name="mao_obra_piso" className="form-control"
                id="mao_obra_piso" value={itens.mao_obra_piso || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="mao_obra_telhado">
                telhado
              </label>
              <input name="mao_obra_telhado" className="form-control"
                id="mao_obra_telhado" value={itens.mao_obra_telhado || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="mao_obra_grafiato">
                grafiato
              </label>
              <input name="mao_obra_grafiato" className="form-control"
                id="mao_obra_grafiato" value={itens.mao_obra_grafiato || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="mao_obra_pintura">
                pintura
              </label>
              <input name="mao_obra_pintura" className="form-control"
                id="mao_obra_pintura" value={itens.mao_obra_pintura || ""}
                onChange={onChange} />
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
              <input name="pregos" className="form-control"
                id="pregos" value={itens.pregos || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="madeira_viga">
                madeira / viga
              </label>
              <input name="madeira_viga" className="form-control"
                id="madeira_viga" value={itens.madeira_viga || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="luvas">
                luvas
              </label>
              <input name="luvas" className="form-control"
                id="luvas" value={itens.luvas || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="argamassa">
                argamassa
              </label>
              <input name="argamassa" className="form-control"
                id="argamassa" value={itens.argamassa || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="cimento">
                cimento
                </label>
              <input name="cimento" className="form-control"
                id="cimento" value={itens.cimento || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="areia">
                areia
                 </label>
              <input name="areia" className="form-control"
                id="areia" value={itens.areia || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="brita">
                brita
                 </label>
              <input name="brita" className="form-control"
                id="brita" value={itens.brita || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="vergalhao">
                vergalhão
                </label>
              <input name="vergalhao" className="form-control"
                id="vergalhao" value={itens.vergalhao || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="escoras">
                escoras
                </label>
              <input name="escoras" className="form-control"
                id="escoras" value={itens.escoras || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="rejunte">
                rejunte
                </label>
              <input name="rejunte" className="form-control"
                id="rejunte" value={itens.rejunte || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="abracadeira">
                abraçadeira
                </label>
              <input name="abracadeira" className="form-control"
                id="abracadeira" value={itens.abracadeira || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="gesso">
                gesso
                </label>
              <input name="gesso" className="form-control"
                id="gesso" value={itens.gesso || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="lixa">
                lixa
                </label>
              <input name="lixa" className="form-control"
                id="lixa" value={itens.lixa || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="lona">
                lona
                </label>
              <input name="lona" className="form-control"
                id="lona" value={itens.lona || ""}
                onChange={onChange} />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label className="col-form-label font-weight-normal" htmlFor="vassoura">
                vassoura
                </label>
              <input name="vassoura" className="form-control"
                id="vassoura" value={itens.vassoura || ""}
                onChange={onChange} />
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

export default Variaveis