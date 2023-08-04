import React from 'react'
import { useNavigate } from 'react-router-dom'
const ContactList = () => {

    const navigate = useNavigate();
  return (
    <div>
    <h1>contact list</h1>
    <br/>
    <button type="submit" onClick={()=>{
        localStorage.removeItem("token")
        // window.location.href="/" 
        navigate("/")
    }}>Logout</button>
    </div>
  )
}

export default ContactList
