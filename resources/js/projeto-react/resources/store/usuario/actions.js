const getUser = (user) => {
  return { type: "get_user", user }
}

export default {
  getUser
}