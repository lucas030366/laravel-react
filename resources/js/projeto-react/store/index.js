import { createStore, combineReducers } from "redux"
import variables from "../resources/store/variaveis/mutations"

const { get_variables } = variables

const root_reducers = combineReducers({
  get_variables
})

export default createStore(root_reducers)






