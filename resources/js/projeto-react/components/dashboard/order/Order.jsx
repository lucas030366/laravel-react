import React from "react"
import { Link } from "react-router-dom"

import { NavigateNext } from "@material-ui/icons"
import { Breadcrumbs, Container, Grid, Typography } from "@material-ui/core"

const Order = () => {  
  return (
    <Container maxWidth="xl" >

      <Grid container direction="row" alignItems="center" justify="space-between">

        <Grid item md={6}>
          <Typography variant="h3">
            Orçamento
          </Typography>
        </Grid>

        <Grid item md={2}>
          <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
            <Link to="/">
              <Typography color="textPrimary">Início</Typography>
            </Link>
            <Typography color="textPrimary">Orçamento</Typography>
          </Breadcrumbs>
        </Grid>

      </Grid>

      <hr />

    </Container>
  )
}

export default Order