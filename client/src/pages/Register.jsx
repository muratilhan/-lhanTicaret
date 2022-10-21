import React,{useState} from 'react'
import {Form,Button} from "react-bootstrap"
import axios from 'axios'
import '../styles/register.css'
function Register() {

  const [userInfo, setUserInfo] = useState({
    username:"",
    email:"",
    password:""
  }) 

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/register", userInfo);
    console.log(res.data)
  }

  return (
    <Form className='register-container'>
        <Form.Text className="text-muted">
            <p style={{fontSize:"28px",color:"black"}}> <b>Create an Account</b> </p>
        </Form.Text>  

        <Form.Group className="mb-3 form-group" controlId="formBasicname">
            <Form.Control className='register-form-inp' type="text" placeholder="Name" />
            <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
            <Form.Control onChange={(e)=>setUserInfo({...userInfo, [e.target.name]:e.target.value})} name="username" className='register-form-inp' type="text" placeholder="Username" />
            <Form.Control onChange={(e)=>setUserInfo({...userInfo, [e.target.name]:e.target.value})} className='register-form-inp' name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
            
            <Form.Control onChange={(e)=>setUserInfo({...userInfo, [e.target.name]:e.target.value})} className='py-3' name="email" type="text" placeholder="E-mail" />
        </Form.Group>
        
      <Button onClick={(e)=>handleClick(e)} className='form-button' variant="outline-success" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Register