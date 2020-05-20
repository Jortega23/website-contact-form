import React from 'react'
import { Button, TextField, makeStyles, Paper, Icon } from '@material-ui/core'



// Material-Ui styling object/Classes ------------------------
const buttonFieldStyle = makeStyles({
  root: {
    width: '30%',
    background:'#62F4D5',
    boxShadow: '0 2px 4px 1px'
  }
})
const emailFieldStyle = makeStyles({
  root: {
    width: '45%',
    margin:'20px',
    background: '#EDEDED',
    boxShadow: '0 1px 3px 1px'
  }
});

const messageFieldStyle = makeStyles({
  root:{
    width: '45%',
    margin:'20px',
    background: '#EDEDED',
    boxShadow: '0 1px 3px 1px'
  }
});

const paperFieldStyle = makeStyles({
  root:{
    background: '#FFFFFF',
    height: '500px',
    marginLeft: '20%',
    marginTop:'25px',
    marginBottom: '25px',
    paddingTop:'15px',
    paddingBottom:'15px',
    width:'60%'
  },
})

const textFieldStyle = makeStyles({
  root: {
    margin:'20px',
    width:'20%',
    background: '#EDEDED',
    boxShadow: '0 1px 3px 1px'
  }
});


// Invoking FormInfo takes in props -----------------------
const FormInfo = ({formChange, info, formSend}) => {
// declaring styling variables
  const textStyle = textFieldStyle();
  const emailStyle = emailFieldStyle();
  const messageStyle = messageFieldStyle();
  const paperStyle = paperFieldStyle();
  const buttonStyle = buttonFieldStyle();

  return (
   <form onSubmit={formSend}>
     <Paper className={paperStyle.root} elevation={15} square={true}>
       <TextField 
          className={textStyle.root}
          placeholder='First Name'
          onChange={formChange('firstName')}
          variant='outlined'
       />
        <TextField 
          className={textStyle.root}
          placeholder='Last Name'
          onChange={formChange('lastName')}
          variant='outlined'
        /> 
        <br/>
        <TextField 
          className={emailStyle.root}
          placeholder='Email'
          onChange={formChange('email')}
          variant='outlined'
        />
        <br/>
        <TextField 
          className={messageStyle.root}
          placeholder='Enter your message'
          onChange={formChange('message')}
          variant='outlined'
          multiline
          rows={10}
        />
        <br/>
        <Button
        className={buttonStyle.root}
        variant="contained"
        endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
       </Paper>
      </form>
  )
}

export default FormInfo
