import React, { useCallback } from "react";
import Header from './Header';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { reposApi } from "./Login";
                                                                                                                                      

const Order = () => {

  const {orderId} = useParams();
  let tableData = "";
  
  const getOrder = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: { id: orderId }
      };
      const response = await reposApi.get('https://staging',
        config
        );
        // console.log(response.data.data.results);
        const arr = response.data.data.results;
        arr.map((values) => {
          tableData +=`<tr>
      <td>${values.delivery_date}</td>
      <td>${values.customer_name + `<br/>` + values.order_id}</td>
      <td>${values.delivered_quantity + `<span>L</span>`+ `<br/>` + values.quantity + `<span>L</span>`}</td>
      <td>${values.pump_name}</td>
      <td>${`<span>₹</span>` + values.grand_total_amount_inr}</td>
      <td>${values.balance_amount}</td>
      <td>${values.collected_amount}</td>
      <td>${values.partner_settle ? 'Settle' : 'Not Settle'}</td>
      <td>${values.customer_settle ? 'Settle' : 'Not Settle'}</td>
      <td>${values.is_finserv_enabled  ? '<button>Delivered</button>' : '<button>Cancelled</button>'}</td>
      <tr>`
        })
        document.getElementById("table_body").innerHTML=tableData;
        
      } catch (err) {
        console.error(err);
        if (err?.response?.status === 401) {
          alert("Something Went Wrong")
        }
      }
    },); 
  
    useEffect(() => {
      getOrder();
    }, [getOrder]);
  

  return (
    <div>
      <Header/>
     <h1>ORDERS</h1>
     <table className="table table-striped table-hover table-bordered" id="table">
        <thead className="table-dark">
            <tr>
                <th scope="col">Date</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Ordered Quantity <br></br> Delivered Quantity</th>
                <th scope="col">Partner</th>
                <th scope="col">Amount</th>
                <th scope="col">Balance Amount</th>
                <th scope="col">Collected Amount</th>
                <th scope="col">Partner Settlement</th>
                <th scope="col">Customer Settlement</th>
                <th scope="col">M-Capital</th>
                
            </tr>
         </thead>
         <tbody id="table_body">
         </tbody>
      </table>
      <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
    </div>
  );
}

export default Order;
