import React,{useState} from 'react'
import { sendData } from '../lib/api'

function CustomeForm() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const submitForm = async (e) => {
        e.preventDefault()
        const data = {email, password}
        const res = await sendData(data);
        console.log(res)
    }
  return (
    <div>
        <h3>Form</h3>
        <form onSubmit={submitForm}>
            <label>Email</label>
            <input 
                onChange={handleEmail} 
                // value={email}
                type='email'/>
            <label>password</label>
            <input 
                onChange={handlePassword} 
                type='password'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CustomeForm