import React, { useCallback } from "react";
import Header from './Header';  
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { reposApi } from "./Login";


const Customer = () => {

  const {customerId} = useParams();
  let tableData = "";
  
  const getCustomer = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: { id: customerId }
      };
      const response = await reposApi.get('customer',
        config
        );
        // console.log(response.data.data.results);
        const arr = response.data.data.results;
        arr.map((values) => {
          tableData +=`<tr>
      <td>${values.company_name}</td>
      <td>${values.contact_number + `<br/>` + values.email}</td>
      <td>${values.is_finserv_enabled ? 'Active' : 'In-Active'}</td>
      <td>${values.all_order_count}</td>
      <td>${values.credit_landing ? '<button>Enabled</button>':'<button>Disabled</button>'}</td>
      <td>${values.address}</td>
      <td>${values.last_order_date}</td>
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
      getCustomer();
    }, [getCustomer]);

    


   return (
    <div>
      <Header/>
      <h1>Customer</h1>
      <table className="table table-striped table-hover table-bordered" id="table">
        <thead className="table-dark">
            <tr>
                <th scope="col">Customer Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Finserv Status</th>
                <th scope="col">Order Till Date</th>
                <th scope="col">M-Capital</th>
                <th scope="col">Address</th>
                <th scope="col">Last Order Date</th>
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

export default Customer;
