import React from 'react';
import Router from "./router"

import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { makeStyles, useTheme } from '@material-ui/core/styles';

import store from "./store"

import Header from "./components/layouts/header/Header"
import Sidebar from "./components/layouts/header/Sidebar"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),    
  },
}));

const App = () => {
  useTheme();
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Provider store={store}>

        <section className={classes.root}>
          <Header />

          <Sidebar />

          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Router />
          </main>

        </section>

      </Provider>
    </BrowserRouter>
  );
}


export default App