import state from "./state"

const set_variables = (any, { type, response }) => {
  if (type == "GET_VARIABLES") {
    state.variables = response
  }

  return state
}

export default {
  set_variables
}