import api from "./axios"

const get_variables = async () => {
  const url = "/variaveis"

  try {
    console.log("requisicao")
    let [response, extract_data] = [await api.get(url), {}]
    response.data.map(el => extract_data = { ...el })
    return extract_data
  } catch (error) {
    console.log(error.message)
  }
}

const create_variables = async (data) => {
  const url = "/variaveis"

  try {    
    let response = await api.put(url, data)
    console.log(response.data)
    return 
  } catch (error) {
    console.log(error.message)
  }
}

export default {
  get_variables,
  create_variables
}