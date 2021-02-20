import React, { useState, useEffect, Fragment } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import clsx from "clsx";
import { DoneAllRounded, NavigateNext } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles";
import { Button, Breadcrumbs, CircularProgress, Container, Grid, InputAdornment, TextField, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
}))

import actions from "@/resources/store/variaveis/actions"
import api from "@/resources/request/variables"

const { getVariables } = actions

const Variaveis = () => {

  const classes = useStyles();

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
    let { name, value } = event.target
    set_itens({ ...itens, [name]: value })
  }

  async function submit() {
    return console.log(itens)
    let edit_itens = { ...itens }

    try {
      await api.create_variables(edit_itens)
    } catch (error) {
      console.log(error.message)
    }
  }

  /*****************************************************/

  function allData() {
    return (
      <Container maxWidth="xl">

        <Grid container direction="row" alignItems="center" justify="space-between">

          <Grid item md={6}>
            <Typography variant="h3">
              Variáveis
            </Typography>
          </Grid>

          <Grid item md={2}>
            <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
              <Link to="/">
                <Typography color="textPrimary">Início</Typography>
              </Link>
              <Typography color="textPrimary">Variáveis</Typography>
            </Breadcrumbs>
          </Grid>

        </Grid>


        <hr />

        <Typography variant="h6">Veículo</Typography>

        <Grid item md={2}>
          <TextField
            label="Combustível"
            name="combustivel"
            id="combustivel"
            variant="outlined"
            size="small"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>
            }}
            value={itens.combustivel || ""}
            onChange={onChange}
          />
        </Grid>

        <Typography variant="h6">
          Telhado (preço unitário)
      </Typography>

        <Grid container direction="row">
          <Grid item md={2}>
            <TextField
              label="Cerâmica"
              name="telhado_ceramica"
              id="telhado_ceramica"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.telhado_ceramica || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Fibrocimento"
              name="telhado_fibrocimento"
              id="telhado_fibrocimento"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.telhado_fibrocimento || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Madeira"
              name="telhado_madeira"
              id="telhado_madeira"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.telhado_madeira || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Policarbonato"
              name="telhado_policarbonato"
              id="telhado_policarbonato"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.telhado_policarbonato || ""}
              onChange={onChange}
            />
          </Grid>

        </Grid>

        <Typography variant="h6">
          Piso (preço unitário)
      </Typography>

        <Grid container direction="row">
          <Grid item md={2}>
            <TextField
              label="Cerâmica"
              name="piso_ceramica"
              id="piso_ceramica"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.piso_ceramica || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Porcelanato"
              name="piso_porcelanato"
              id="piso_porcelanato"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.piso_porcelanato || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Lâminado"
              name="piso_laminado"
              id="piso_laminado"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.piso_laminado || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Policarbonato"
              name="piso_policarbonato"
              id="piso_policarbonato"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.piso_policarbonato || ""}
              onChange={onChange}
            />
          </Grid>

        </Grid>

        <Typography variant="h6">
          Pintura
      </Typography>

        <Grid container direction="row">
          <Grid item md={2}>
            <TextField
              label="Tinta"
              name="tinta"
              id="tinta"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.tinta || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Pincel"
              name="pincel"
              id="pincel"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.pincel || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Rolo de Pintura"
              name="rolo_pintura"
              id="rolo_pintura"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.rolo_pintura || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Bandeja"
              name="bandeja"
              id="bandeja"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.bandeja || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Fita Crepe"
              name="fita_crepe"
              id="fita_crepe"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.fita_crepe || ""}
              onChange={onChange}
            />
          </Grid>

        </Grid>

        <Typography variant="h6">
          Mão de obra (metro quadrado)
      </Typography>

        <Grid container direction="row">
          <Grid item md={2}>
            <TextField
              label="Piso"
              name="mao_obra_piso"
              id="mao_obra_piso"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.mao_obra_piso || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Telhado"
              name="mao_obra_telhado"
              id="mao_obra_telhado"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.mao_obra_telhado || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Grafiato"
              name="mao_obra_grafiato"
              id="mao_obra_grafiato"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.mao_obra_grafiato || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Pintura"
              name="mao_obra_pintura"
              id="mao_obra_pintura"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.mao_obra_pintura || ""}
              onChange={onChange}
            />
          </Grid>

        </Grid>

        <Typography variant="h6">
          Outros
      </Typography>

        <Grid container direction="row">
          <Grid item md={2}>
            <TextField
              label="Pregos (pct)"
              name="pregos"
              id="pregos"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.pregos || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Madeira / Viga"
              name="madeira_viga"
              id="madeira_viga"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.madeira_viga || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Luvas"
              name="luvas"
              id="luvas"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.luvas || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Argamassa"
              name="argamassa"
              id="argamassa"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.argamassa || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Cimento"
              name="cimento"
              id="cimento"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.cimento || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Areia"
              name="areia"
              id="areia"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.areia || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Brita"
              name="brita"
              id="brita"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.brita || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Vergalhão"
              name="vergalhao"
              id="vergalhao"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.vergalhao || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Escoras"
              name="escoras"
              id="escoras"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.escoras || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Rejunte"
              name="rejunte"
              id="rejunte"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.rejunte || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Abraçadeira"
              name="abracadeira"
              id="abracadeira"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.abracadeira || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Gesso"
              name="gesso"
              id="gesso"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.gesso || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Lixa"
              name="lixa"
              id="lixa"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.lixa || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Lona"
              name="lona"
              id="lona"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.lona || ""}
              onChange={onChange}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              label="Vassoura"
              name="vassoura"
              id="vassoura"
              variant="outlined"
              size="small"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
              value={itens.vassoura || ""}
              onChange={onChange}
            />
          </Grid>

        </Grid>

        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            endIcon={<DoneAllRounded />}
            onClick={submit}
          >
            Salvar
      </Button>
        </Grid>
      </Container>

    )
  }

  function loading() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <CircularProgress />
      </Grid>
    )
  }

  return (
    <Fragment>
      {Object.keys(itens).length > 0 ? allData() : loading()}
    </Fragment>
  )
}

export default Variaveis