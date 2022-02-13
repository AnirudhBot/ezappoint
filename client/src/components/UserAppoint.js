import React, { useState } from 'react'
import './appoint.css'
import { Link } from 'react-router-dom'
import {useLocation} from 'react-router-dom';

export default function UserAppoint() {
  const location = useLocation();

  return (
    <div className="Main">
    <div className="container">
     <h1 id='head' className="text-center">Welcome User</h1>
        <div className="row">
            <div className="col-lg-6">
               <h2 className="text-center">{location.state.clinicName}</h2> 
                 <div className="row">
                     <div className="col-12">
                     <h3>Address:</h3>
                     <p id="">{location.state.clinicAddress}</p>
                     </div>
                 </div>
            </div>
            <div className="col-lg-6 text-center Box d-flex flex-column align-items-center justify-content-sm-around">
               <button className="btn btn-primary btn-lg mb-4">Book Your Appointment</button>
               
                 <h3>Estimated queue time left : 40:00</h3>
               
               <div className="row Stat">
                   <div className="cur-tok col-6 text-center">
                     <i className="fa fa-edit"></i><span>Current Token</span>
                   </div>
                   <div className="tot-tok col-6 text-center">
                     <i className="fa fa-group"></i><span>Total Token</span>
                   </div>
                   <div className="row">
                   <div id="cur-tok" className="CurrentToken col-6 text-center">
                         1
                   </div>
                   <div id="tot-tok" className="TotalToken col-6 text-center">
                         100
                   </div>
                   </div>
              </div>
        </div>
    </div>
  </div>
 </div>  
  )
}
