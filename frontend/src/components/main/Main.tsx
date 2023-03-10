import * as React from "react";
import { Link } from "react-router-dom";

// Style
import "./Main.css";

const Main = () => {

    return (
        <div className="main_section">
            <p className="dash_header">Welcome <strong className="text_primary">John</strong>.</p>
            <hr />

            <div className="cards">
                
                <div className="card">
                    <h2 className="mb">2</h2>
                    <p className="mb">Farms</p>
                    <Link to="/dashboard/my_farms" className="btn_outline">View</Link>
                </div>

                <div className="card">
                    <h2 className="text_orange mb">1</h2>
                    <p className="text_orange mb">On Harvesting</p>
                    <Link to="#" className="btn_outline">View</Link>
                </div>

                <div className="card">
                    <h2 className="text_primary mb">4</h2>
                    <p className="text_primary mb">Harvested</p>
                    <Link to="#" className="btn_outline">View</Link>
                </div>

            </div>
        </div>
    )
}

export default Main;