import React from 'react'
import TextField from '@material-ui/core/TextField'

const FormInfo = (props) => {
  return (
    <form>
      <div>
      <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="First Name"
          variant="filled"
        />
      </div>
    </form>
  )
}

export default FormInfo
