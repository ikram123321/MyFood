import React from 'react'
import Card from '../Components/Card'
import Footerr from '../Components/Footerr'
import Navbarr from '../Components/Navbarr'
import Crousel from '../Components/Crousel'
export default function Home() {
  return (
    <div>
      <div><Navbarr/></div>
   <div><Crousel/></div>
      <div className='m-3'> 
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
      <div><Footerr/></div>
    </div>
  )
}
