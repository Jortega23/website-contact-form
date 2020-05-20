import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core'
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

// Decalring styling objects
const barStyle = makeStyles({
    title: {
        flexGrow: 1,
        padding:'15px',
    },
    bar: {
      background:'#62F4D5',
    },
    button: {
      color:'white',
      fontSize:'15px'
    }
})

const HeaderBar = () => {
   const appBarStyle = barStyle();

    return (
    <div>
      <AppBar position="static"  className={appBarStyle.bar}>
        <Toolbar variant="dense">
          <Typography variant="h4" color="inherit" className={appBarStyle.title} align="left">
            <DeveloperModeIcon fontSize='medium'/>
            Web_Dev.
          </Typography>
          <Button className={appBarStyle.button}>Home</Button>
          <Button className={appBarStyle.button}>About</Button>
          <Button className={appBarStyle.button}>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default HeaderBar
