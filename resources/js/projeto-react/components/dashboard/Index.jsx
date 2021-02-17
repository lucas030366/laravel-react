import React from "react"
import { useSelector } from "react-redux"

import { AppBar, Toolbar, Typography } from "@material-ui/core"

const Index = () => {
  const variables = useSelector(state => state.set_variables.variables)

  return (
    <Typography variant="h6" noWrap>
      Mini variant drawer
    </Typography>
  )
}

export default Index