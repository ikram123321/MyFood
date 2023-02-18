import { Link } from 'react-router-dom'
import '../Styles/Signup.css'
import React, { useState } from 'react'

export default function Signup() {

  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation }))
    const response = await fetch("http://localhost:5000/api/creatuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
    });
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter valid cerdentials");
    }
  }
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }


  return (
    <div className='d-flex justify-content-center'>
     
    <div className='bg-success ' style={{ width: "400px", Height: "70000px" }}>
    <br /><br /><br /><br /><br />
    <div className=' d-flex flex-column ' style={{ marginLeft:"30%" }}>
<h1><strong>M</strong> </h1>
<br />
<h1><strong>Y</strong></h1>
<br />
<h1><strong>F</strong></h1>
<br />
<h1><strong>O</strong></h1>
<br />
<h1><strong>O</strong></h1>
<br />
<h1><strong>D</strong></h1>
</div>
<br /><br /><br /><br /><br />

    </div>
      <div className='container' style={{marginBottom:"auto",marginTop:"auto"}}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control " name="name" value={credentials.name} onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={credentials.password} id="exampleInputPassword1" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
            <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} id="exampleInputPassword1" onChange={onChange} />
          </div>

          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/login" className="m-3 btn btn-danger">Alredy user</Link>
        </form>
      </div>
    </div>
  )
}
