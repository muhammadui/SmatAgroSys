import * as React from 'react';
import { useState } from 'react';
import MyConnection from '../connection/MyConnection';

// Style
import "./ExtensionOfficerServices.css";

const ExtensionOfficerServices = () => {
    const [showConnection, setShowConnection] = useState<boolean>(false);

    const formatExtension = () => {
        
        return (
            <div className="table_wrapper mt2">
                <table className="table">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Season</th>
                            <th>Crop Type</th>
                            <th>Location</th>
                            <th>Request Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Irrigation</td>
                            <td>Wheat</td>
                            <td>Ringim Jagawa</td>
                            <td>{new Date().toDateString()}</td>
                            <td><span className="btn_bg">View</span></td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Green House Farm</td>
                            <td>Onion</td>
                            <td>Bauchi, Nigeria</td>
                            <td>{new Date().toDateString()}</td>
                            <td><span className="btn_bg">View</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <>
            {/* Pending & Connection */}
            <MyConnection show={showConnection} setShow={setShowConnection} />

            <div className="extension_officer_services_section">
                <p className="dash_header mr mb">Extension Officer Services</p>
                <hr />
                
                <div className="mt mb">
                    <div className="mobile_column">
                        <div className="flex_between_center">
                            <button className={`${!showConnection ? 'btn_bg' : 'btn_outline'} mb mr`}
                                style={{borderRadius: "4px"}}
                            >Pending request</button>
                            
                            <button className={`${showConnection ? 'btn_bg' : 'btn_outline'} mb mr`}
                                style={{borderRadius: "4px"}}
                                onClick={() => setShowConnection(true) }
                            >My connection</button>
                        </div>
                        
                        <div className="flex_start_center">
                            <span className="mr">Sort by: </span>
                            <select name="filter" id="filter" className="select">
                                <option value="location">Location</option>
                                <option value="date">Date</option>
                            </select>
                        </div>
                    </div>
                </div>


                {/* Services */}
                {formatExtension()}
            </div>
        </>
    )
}

export default ExtensionOfficerServices;