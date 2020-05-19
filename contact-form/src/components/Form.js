import React, {useState} from 'react'
import FormInfo from './FormInfo'


const Form = () => {
  const [useInfo, setInfo] = useState(
    {
      firstName:'',
      lastName:'',
      email:''
    }
  );

  return (
   <div>
     <FormInfo info={useInfo}/>
   </div>
  )
}

export default Form
