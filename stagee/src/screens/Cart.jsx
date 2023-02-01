import React from 'react'

export default function Cart() {
  return (
    <div>
      <div className='container m-aoto mt-5 table-responsive table-responsive-sm table-responsive-md'>
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
{/* data.map((food:index)=>(
    <tr>
        <th scope='row'>{index+1}</th>
<td>{</td>
    </tr>
)) */}
</tbody>
</table>

<div>
    <button className='btn dg-success mt-5'>Chek Out</button>
</div>
      </div>
    </div>
  )
}
