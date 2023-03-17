import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Home from './screens/Home'
import ContactUs from './screens/ContactUs';


import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CartProvider } from './Components/ContextReducer';
import MyOrder from './screens/MyOrder';
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/creatuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
            <Route exact path="/ContactUs" element={<ContactUs />} />
           

          </Routes>
        </div>

      </Router>
    </CartProvider>
  )
}

export default App

