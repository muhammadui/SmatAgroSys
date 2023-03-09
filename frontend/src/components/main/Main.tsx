import * as React from "react";


// Style
import "./Main.css";

const Main = () => {

    return (
        <div className="main_section">
            <p className="header">Welcome <strong className="text_primary">John</strong>.</p>
            <hr />

            <div className="cards">
                
                <div className="card">
                    <h2 className="mb">2</h2>
                    <p className="mb">Farms</p>
                    <button className="btn_outline">View</button>
                </div>

                <div className="card">
                    <h2 className="text_orange mb">2</h2>
                    <p className="text_orange mb">Farms</p>
                    <button className="btn_outline">View</button>
                </div>

                <div className="card">
                    <h2 className="text_primary mb">2</h2>
                    <p className="text_primary mb">Farms</p>
                    <button className="btn_outline">View</button>
                </div>

            </div>
        </div>
    )
}

export default Main;