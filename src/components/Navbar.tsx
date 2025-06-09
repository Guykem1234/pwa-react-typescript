import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createStyles, makeStyles } from '@mui/styles';
import { observer } from 'mobx-react';
import NavigationStore from '../store/NavigationStore';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Drawer, Theme } from '@mui/material';
import getAppLayout from '../models/getAppLayout';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    flexShrink: 0,
    boxShadow: 'none',
    width: '305px',
  },
  paper: {
    backgroundColor: '#ffffff',
    boxShadow: '0px 0px 10px 0px rgba(127, 127, 127, 0.31)',
    height: getAppLayout().menuDrawer.height,
    top: getAppLayout().menuDrawer.top
  },
  container: {
  },
  backdrop: {
    backgroundColor: "transparent"
  }

}))

interface NavbarProp {
  store: NavigationStore
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

function TemporaryDrawer(prop: any) {

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        prop.handleDrawerToggle(open);
      };


  const classes = useStyles();
  const anchor = "left";

  return (
    <div>
      <React.Fragment key={anchor}>
        <Drawer
          BackdropProps={{ classes: { root: classes.backdrop } }}
          classes={{ paper: classes.paper }}
          className={classes.drawer}
          open={prop.state}
          onClose={toggleDrawer(anchor, false)}
        >
        </Drawer>
      </React.Fragment>
    </div>
  );
}

function Navbar(prop: NavbarProp) {
  const { store } = prop
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {store.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box >
      <div style={{ marginTop: "56px" }}>
        <TemporaryDrawer state={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      </div>
    </div>
  );
}

export default observer(Navbar)