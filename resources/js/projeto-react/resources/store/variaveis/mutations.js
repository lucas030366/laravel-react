import api from "@/resources/request/axios"
import state from "./state"

const get_variables = async (any, actions) => {
  if (actions.type == "get_variables") {
    const url = "/variaveis"

    try {
      const response = await api.get(url)
      let variables = { ...response.data }     
      return { ...state, variables }
    } catch (error) {
      console.log(error.message)
    }
  }

  return state
}

export default {
  get_variables
}