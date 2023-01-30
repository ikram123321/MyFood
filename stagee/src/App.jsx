import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Home from './screens/Home'

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './screens/Login';
import Signup from './screens/Signup';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/creatuser" element={<Signup/>}/>

        </Routes>
      </div>



    {/* <Home/> */}

   

  
    
    
    </Router>
  )
}

export default App
