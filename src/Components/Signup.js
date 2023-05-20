import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup = () => {
  const [name, setName] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password })

    fetch('http://localhost:8000/signup', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    }).then((response) => {
      console.log("saved")
    }).catch((err) => { console.log(err.message) })

    setName(" ")
    setEmail(" ")
    setPassword(" ")
  }

 

  return (
    
        <Form className='px-5'  onSubmit={handleSubmit} >
            <h1 className='d-flex justify-content-center'>Signup</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name"  value={name} onChange={e => setName(e.target.value)}    />
          </Form.Group>
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
    

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="is Admin" />
          </Form.Group>
         <Link to={"/customerTable"}><Button variant="primary" type="submit">
            Submit
          </Button></Link> 
          <br></br>
          <Form.Text className="">
             If you already have account 
            </Form.Text>
         <Link to={"/login"}><Button className='m-2' variant="success" type="submit">
            Login
          </Button></Link> 
        </Form>
  )
  }

export default Signup;
  
