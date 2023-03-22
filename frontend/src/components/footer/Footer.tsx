import * as React from "react";

// Style
import "./Footer.css";

const Footer = () => {

    return (
        <footer className="footer">
            <hr />
            <p className="mt2">
                Copyright &copy; {new Date().getFullYear()} {" "}
                <span className="text_primary">AGROSIS</span> {" "}
                | All Rights Reserved | <span className="span_btn">Terms and Conditions</span> {" "}
                | Privacy Policy.
            </p>
        </footer>
    )
}

export default Footer;