import React from 'react'
import './dashboard.css'
import axios from "axios"

export default function Dashboard(props) {

    

    let c = () => { if (props.mode === 'dark') return 'white'; else return 'black'; }
    return (
        <>
            <div className="main" style={{ textAlign: 'center', color: c() }}>
                <div id='top' style={{ fontSize: '50px', display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '50px', alignItems: 'center', font: 'caption' }}>
                    <span>Clinic</span><span>'s Dashboard</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', margin: '50px', alignItems: 'center', font: 'caption', marginBottom: '120px' }}>
                    <div id='time'>Your next Appointment<br />is with: <span id='appoint'>Anirudh</span></div>
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
                                    <td className='oneN'>someone</td>
                                    <td className='oneC'>someone</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td className='twoN'>someone</td>
                                    <td className='twoC'>someone</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td className='threeN'>someone</td>
                                    <td className='threeC'>someone</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td className='fourN'>someone</td>
                                    <td className='fourC'>someone</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td className='fiveN'>someone</td>
                                    <td className='fiveC'>someone</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
