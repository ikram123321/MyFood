import React, { useState, useEffect } from 'react'
import Footer from '../Components/Footer'
import Navbarr from '../Components/Navbarr'


export default function MyOrder() {
  const fetchMyOrder = async () => {
    console.log(localStorage.getItem('userEmail'))
    await fetch("http://localhost:3001/api/myOrderData", {
      // credentials: 'include',
      // Origin: "http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({
        email: localStorage.getItem('userEmail')


      })
    }).then(async (res) => {

      let response = await res.json()
      await setOrderData(response)
    })
  }
  useEffect(() => {
    fetchMyOrder()
  }, [])
  const [orderData, setOrderData] = useState("");
  return (
    <div>
      <div><Navbarr /></div>

      <div className='container'>
        <div className='row'>
          {orderData != {} ? Array(orderData).map(data => {
            return (
              data.orderData ?
                data.orderData.order_data.slice(0).reverse().map((item) => {
                  return (
                    item.map((arrayData) => {
                      return (
                        <div>
                          {arrayData.Order_date ?
                            <div className='m-auto mt-5'>
                              {data = arrayData.Order_date}
                              <hr />
                            </div> :
                            <div className='col-12 col-md-6 col-lg-3'>
                              <div className='card mt-3' style={{ width: "16rem", maxHeight: "360px" }}>
                                <div className='card-body'>
                                  <h5 className='card-title'>{arrayData.name}</h5>
                                  <div className='container w-100 p-0' style={{ height: "38px" }}>
                                    <span className='m-1'>{arrayData.qty}</span>
                                    <span className='m-1'>{arrayData.size}</span>
                                    <span className='m-1'>{data}</span>
                                    <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                      {arrayData.price}DT
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          }
                        </div>
                      )
                    })
                  )
                }) : ""
            )
          }) : ""}

        </div>

      </div>

<br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div><Footer /></div>
    </div>
  )
}