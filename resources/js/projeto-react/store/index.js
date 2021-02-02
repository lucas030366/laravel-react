import { createStore, combineReducers } from "redux"
import variables from "../resources/store/variaveis/reducer"

const { set_variables } = variables

const root_reducers = combineReducers({
  set_variables
})

export default createStore(root_reducers)






