import React, {useState} from 'react'
import FormInfo from './FormInfo'

// Using Functional Component and utilizing React Hooks
const Form = () => {
  
  // Initialize the useState hook with object of values that will be on form
  const [userInfo, setInfo] = useState(   
    {
      firstName:'',
      lastName:'',
      email:'',
      message:''
    }
  );

  // HandleChange function to handle user and change values to user inputs
  const handleFormChange = input => e => {
    setInfo({[input]: e.target.value})
    console.log(userInfo)
    
  }

// onsubmit function takes the form with values inputed
const formSubmit = (userInfo) => {
  console.logs(userInfo);
}

 

  
  return (
   <div>
     <FormInfo info={userInfo} formChange={handleFormChange} formSend={formSubmit}/>
   </div>
  )
}

export default Form
