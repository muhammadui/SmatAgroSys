import * as React from "react";

// Style
import "./MyConnection.css";

interface ConnectionProps {
    show: boolean;
    setShow: Function;
}

const MyConnection = ({ show, setShow }: ConnectionProps ) => {

    const formatConnection = () => {
        
        return (
            <div className="table_wrapper mt2">
                <table className="table">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Season</th>
                            <th>Crop Type</th>
                            <th>Location</th>
                            <th>Connection Date</th>
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
        <div className={`myconnection_section ${show ? 'show' : ''}`}>
            <div className="flex_end_center mt mb">
                <button className="btn_bg" 
                    style={{borderRadius: "4px"}}
                    onClick={() => setShow(false)}
                >Go Back</button>
            </div>
            <hr />

            {formatConnection()}
        </div>
    )
}

export default MyConnection;