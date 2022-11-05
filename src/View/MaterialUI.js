import React from 'react';
import Header from './Header';
import {Button} from '@mui/material';

const MaterialUI = () => {
  return (
    <div>
      <Header/>
      <h1>Material UI</h1>
      <br></br>
      <br></br>
      <form className='container'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>  
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div classname="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      <br></br>
      <br></br>
      <div className="progress">
  <div className="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
<br></br>
<br></br>
<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
<div className="card" >
  <div classNameNa="card-body">
    <h5 className="card-title">Repos Energy</h5>
    <h6 className="card-subtitle mb-2 text-muted">Fulled by yes</h6>
    <p className="card-text">Delivering Fule at your Door Step</p>
    <a href="#" className="card-link">About Us</a>
    <a href="#" className="card-link">Details</a>
  </div>
</div>
<br></br>
<br></br>
<p>
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Alpha Mpdel</a>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Bita Model</button>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Gyama Model</button>
</p>
<div className="row">
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample1">
      <div className="card card-body">
        We Deliver 600 liters on diseal in a alpha RPP.There is a Datum Attached in it. 
      </div>
    </div>
  </div>
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample2">
      <div className="card card-body">
      We Deliver 300 liters on diseal in a alpha RPP.There is a Datum Attached in it. 
      </div>
    </div>
  </div>
</div>
<br></br>
<br></br>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
<form>
  <input type="text" placeholder='Enter Name'/>
  <button className='btn btn-success'>Submit</button>
</form>
    </div>
  );
}

export default MaterialUI;
