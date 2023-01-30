import React from 'react'
import Navbar from '../Components/Navbar'
import Homecom from '../Components/Homecom'
import Footer from '../Components/Footer'
import MahdiaFoodForm from '../Components/MahdiaFoodForm '
export default function Home() {
  return (
    <div>
    
      <React.Fragment>
			<Navbar/>
		</React.Fragment>
    <MahdiaFoodForm/>
      <Footer/>
    </div>
  )
}
