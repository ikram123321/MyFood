import { Link } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'
import '../Styles/Signup.css'
import React, { useState } from 'react'
import Hero from '../assets/Hero.png'

export default function Signup() {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation }))
    const response = await fetch("http://localhost:3001/api/creatuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
    });
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials");
    }
  }

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div className='d-flex justify-content-center'>
      <div className='bg-success ' style={{ width: "900px"}}>
        <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: "100vh" }}>
          <img src={Hero} className="Hero" alt="hero-image" />
          <h1 className="text-center my-4">Welcome to MY FOOD</h1>
        </div>
      </div>

      <div className=' container my-5'>
        <Row className=" justify-content-center">
          <Col xs={12} md={8} lg={6}><br /><br /><br />
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={credentials.name} onChange={onChange} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={credentials.email} onChange={onChange} required />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={credentials.password} onChange={onChange} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" name="geolocation" value={credentials.geolocation} onChange={onChange} required />
              </Form.Group>

              <Button variant="success" type="submit" className="m-3">
                Submit
              </Button>
              <Link to="/login" className="m-3 btn btn-danger">
                Already a user? Login
              </Link>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  )
}
