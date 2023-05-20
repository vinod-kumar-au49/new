import { useState } from 'react';
import { Link } from 'react-router-dom';import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")

  const handle = (e) => {
    e.preventDefault();
    console.log({ email, password })
    fetch('http://localhost:8000/login', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email, password })
    }).then((response) => {
      console.log("saved")
    }).catch((err) => { console.log(err.message) })

    setEmail("")
    setPassword("")
  }

  
  return (
   
    <Form className='px-5'  onSubmit={handle} >
    <h1 className='d-flex justify-content-center'>Login</h1>
    
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  value={password} onChange={e => setPassword(e.target.value)}  />
  </Form.Group>


  
 <Link to={"/customerTable"}><Button variant="primary" type="submit">
    Submit
  </Button></Link> 
  
</Form>
)
}


export default Login;
