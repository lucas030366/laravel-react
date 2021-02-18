import React, { useState } from "react";
import { Link } from "react-router-dom"

import clsx from "clsx";
import { ChevronRight, ClearAllRounded, QueueRounded, ViewQuiltRounded } from "@material-ui/icons"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, Typography } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}));

const Sidebar = () => {
  useTheme();
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  function drawer() {
    const show = open ? false : true
    setOpen(show);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={drawer}>
          <ChevronRight />
        </IconButton>
      </div>

      <Divider />

      <List>

        <Link to="/">
          <ListItem button>
            <ListItemIcon> <ViewQuiltRounded /> </ListItemIcon>
            <Typography variant="h6">
              <Box color="text.primary">Início</Box>
            </Typography>
          </ListItem>
        </Link>

        <Link to="variaveis">
          <ListItem button>
            <ListItemIcon> <QueueRounded /> </ListItemIcon>
            <Typography variant="h6">
              <Box color="text.primary">Variáveis</Box>
            </Typography>
          </ListItem>
        </Link>

        <Link to="orcamento">
          <ListItem button>
            <ListItemIcon> <ClearAllRounded /> </ListItemIcon>
            <Typography variant="h6">
              <Box color="text.primary">Orçamento</Box>
            </Typography>
          </ListItem>
        </Link>

      </List>

    </Drawer>
  )
}

export default Sidebar