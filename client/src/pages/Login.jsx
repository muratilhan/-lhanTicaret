import axios from 'axios';
import {useState, useContext} from 'react'
import {Form,Button} from "react-bootstrap"
import { Context } from '../App';
import '../styles/register.css'
function Login() {

  const context = useContext(Context);


  const [userInfo, setUserInfo] = useState({
    username:"",
    password:""
  }) 


  const handleLogin = async (e) => {
      e.preventDefault();
     // login(dispatch, {username, password})
    const res = await axios.post("http://localhost:5000/api/auth/login", userInfo);
    context.setUser(res.data.user)
    
  }

  return (
    <Form className='register-container'>
        <Form.Text className="text-muted">
            <p style={{fontSize:"28px",color:"black"}}> <b>Sign in</b> </p>
        </Form.Text>  

        <Form.Group className="mb-3 form-group" controlId="formBasicnName">
            <Form.Control onChange={(e)=> setUserInfo({...userInfo, [e.target.name]:e.target.value})} name="username" className='register-form-inp' type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
            <Form.Control onChange={(e)=> setUserInfo({...userInfo, [e.target.name]:e.target.value})} name="password" className='register-form-inp' type="password" placeholder="Password" />
        </Form.Group>
        
        
      <Button onClick={(e)=>handleLogin(e)} className='form-button' variant="outline-success" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Login