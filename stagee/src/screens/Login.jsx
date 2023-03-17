import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Styles/Login.css';
import Hero from '../assets/Hero.png'

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });

      const json = await response.json();

      if (!json.success) {
        alert("Enter valid credentials");
        return;
      }

      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  return (
    
   
     
     <div className='d-flex justify-content-center'>
      <div className='bg-success ' style={{ width: "900px"}}>
        <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: "100vh" }}>
          <img src={Hero} className="Hero" alt="hero-image" />
          <h1 className="text-center my-4">Welcome to MY FOOD</h1>
        </div>
      </div>
      <div className='container' style={{marginBottom:"auto",marginTop:"auto"}}>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={credentials.email} onChange={onChange} />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={credentials.password} onChange={onChange} />
              </Form.Group>
              <Button variant="success" type="submit" className="m-3">Submit</Button>
              <Link to="/creatuser" className="btn btn-danger m-3">I'm a new user</Link>
            </Form>
          </Col>
        </Row>
   
        </div>   </div>
   
  
  )
}
