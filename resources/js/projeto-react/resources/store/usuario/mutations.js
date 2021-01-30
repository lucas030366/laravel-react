import api from "@/resources/request/axios"
import state from "./state"

const get_user = (any, actions) => {
  if (actions.type == "get_user") {
    const url = "/variaveis"

    try {
      const response = api.get(url)
      return { ...state, user: response.data }
    } catch (error) {
      console.log(error.message)
    }
  }

  return state
}

export default {
  get_user
}