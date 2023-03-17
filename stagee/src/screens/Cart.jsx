import React from 'react';
import { useCart, useDispatchCart } from '../Components/ContextReducer';
import { FaTrash } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className='m-5 w-100 text-center fs-3'>
        The cart is Empty!
      </div>
    );
  }

  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem('userEmail');
    const response = await fetch('http://localhost:3001/api/orderData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });

    if (response.status === 200) {
      // Send email to customer
      const templateParams = {
        to_email: userEmail,
        order_data: JSON.stringify(data),
        total_price: data.reduce((total, food) => total + food.price, 0),
      };
      emailjs
        .send(
          'service_d2h2fxe',
          'template_gsxxf8p',
          templateParams,
          'wPlAiIKmHjs9v5fDz'
        )
        .then(
          (result) => {
            console.log('Email sent successfully');
          },
          (error) => {
            console.log('Email send failed: ', error);
          }
        );
      dispatch({ type: 'DROP' });
    }
  };

  const totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
      <table className='table table-hover'>
        <thead className='text-success fs-4'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Options</th>
            <th scope='col'>Amount</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{food.name}</td>
              <td>{food.qty}</td>
              <td>{food.size}</td>
              <td>{food.price}</td>
              <td>
                <button type='button' className='btn p-0'>
                  <FaTrash onClick={() => dispatch({ type: 'REMOVE', index })} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h1 className='fs-2'>Total Price: {totalPrice}Dt</h1>
        <button className='btn bg-success mt-5' onClick={handleCheckOut}>
          Check Out
        </button>
      </div>
    </div>
  );
}
