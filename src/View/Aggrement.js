import React, { useCallback } from "react";
import Header from './Header';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { reposApi } from "./Login";

const Aggrement = () => {

  const {aggrementId} = useParams();
  let tableData = "";
  
  const getAggrement = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: { id: aggrementId }
      };
      const response = await reposApi.get('https://staging',
        config
        );
        // console.log(response.data.data.results);
        const arr = response.data.data.results;
        arr.map((values) => {
          tableData +=`<tr>
      <td>${values.order_id}</td>
      <td>${values.customer_name + `<br/>` + values.customer_phone}</td>
      <td>${values.partner_name + `<br/>` + values.partner_phone}</td>
      <td>${`<span>₹</span>` + values.balance_amount}</td>
      <td>${`<button>` + values.status + `</button>`}</td>
      <td>${values.disbursement_date}</td>
      <td>${values.credit_days + `<span> days</spna>`}</td>
      <td>${`<span>Pune</span>`}</td>
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
      getAggrement();
    }, [getAggrement]);
  


  return (
    <div>
      <Header/>
      <h1>AGGREMENT</h1>
      <table className="table table-striped table-hover table-bordered" id="table">
        <thead className="table-dark">
            <tr>
                <th scope="col">Order Id</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Partner Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
                <th scope="col">Duratin</th>
                <th scope="col">City</th>
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

export default Aggrement;