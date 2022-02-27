import React, { useState } from "react";
import "./appoint.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function UserAppoint() {
  const location = useLocation();

  const bookingHandler = (e) => {
    const clinicName = location.state.clinicName;
    const user = {
      name: location.state.userName,
      contact: location.state.userContact,
    };

    axios
      .post("http://localhost:3001/updateQueue", {
        clinicName,
        user,
      })
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });

    e.target.textContent = "Appointment Booked!";
    e.target.style.backgroundColor = "green";
  };

  return (
    <div className="Main">
      <div className="container">
        <h1 id="head" className="text-center">
          Welcome {location.state.userName}
        </h1>
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
            <button
              className="btn btn-primary btn-lg mb-4"
              onClick={bookingHandler}
            >
              Book Your Appointment
            </button>

            <h3>Estimated queue time left : 40:00</h3>

            <div className="row Stat">
              <div className="cur-tok col-6 text-center">
                <i className="fa fa-edit"></i>
                <span>Current Token</span>
              </div>
              <div className="tot-tok col-6 text-center">
                <i className="fa fa-group"></i>
                <span>Total Token</span>
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
  );
}
