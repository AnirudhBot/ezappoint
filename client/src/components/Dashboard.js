import React, { useEffect } from "react";
import "./dashboard.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Dashboard(props) {
  const location = useLocation();
  console.log(location.state);

  let c = () => {
    if (props.mode === "dark") return "white";
    else return "black";
  };
  return (
    <>
      <div className="main" style={{ textAlign: "center", color: c() }}>
        <div
          id="top"
          style={{
            fontSize: "50px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "50px",
            alignItems: "center",
            font: "caption",
          }}
        >
          <span> {location.state.clinic}'s Dashboard</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            margin: "50px",
            alignItems: "center",
            font: "caption",
            marginBottom: "120px",
          }}
        >
          <div id="time">
            Dr. {location.state.name}, your next Appointment
            <br />
            is with: <span id="appoint">X</span>
          </div>
          <div className="line-in-middle"></div>
          <div>
            <h1>Queue Status:</h1>

            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table table-bordered table-striped mb-0">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td className='oneN'>
                      <span>someone</span> 
                      <span><button className='btn shadow-none'>
                        <img src="https://img.icons8.com/color/30/000000/remove-user-male--v1.png" width="80%"/>
                      </button></span>
                    </td>
                    <td className="oneC">someone</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td className='twoN'>
                      <span>someone</span> 
                      <span><button className='btn shadow-none'>
                        <img src="https://img.icons8.com/color/30/000000/remove-user-male--v1.png" width="80%"/>
                      </button></span>
                    </td>
                    <td className="twoC">someone</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td className='threeN'>
                      <span>someone</span> 
                      <span><button className='btn shadow-none'>
                        <img src="https://img.icons8.com/color/30/000000/remove-user-male--v1.png" width="80%"/>
                      </button></span>
                    </td>
                    <td className="threeC">someone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
