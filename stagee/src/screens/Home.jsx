import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import Footerr from '../Components/Footerr'
import Navbarr from '../Components/Navbarr'
import Crousel from '../Components/Crousel'
import { useLoaderData } from 'react-router-dom'

export default function Home() {

  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:3001/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      mode: "cors" // added this line to enable CORS
    });
    response = await response.json()
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0],response[1]);
  }
  useEffect(() => {
    loadData()
  }, [])


  return (
    <div>
      
      <div><Navbarr /></div>
      <div> <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>

                    <div className="carousel-inner" id="carousel">
                        <div className="carousel-caption" style={{zIndex:"10"}}>
                            <div className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                                {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                            </div>
                        </div>


                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/900*700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900*700/?momos" className="d-block w-100" style={{ filter: "brightness(30%)" }}alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900*700/?sea" className="d-block w-100"style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                    </div>


                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div></div>
      <div className='container'>
        {
          foodCat != []
            ? foodCat.map((data) => {
              return (<div className='row mb-3' key={data._id}>
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem != []
                  ?
                  foodItem.filter((item) => (item.CategoryName === data.CategoryName)&& (item.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <Card foodItem={filterItems}
                            options={filterItems.options[0]}
                            ></Card>
                        </div>


                      )
                    }
                    ) : <div>no sush data found</div>}
              </div>
              )
            })
            : ""
        }

      </div>
      <div><Footerr /></div>
   
    </div>
  )
}
