import * as React from "react";

// Style
import "./Footer.css";

const Footer = () => {

    return (
        <footer className="footer">
            <hr />
            <p className="mt2">
                &copy; All Right Reserved {" "}
                <strong className="text_primary">AGRO</strong> {" "}
                {new Date().getFullYear()}.
            </p>
        </footer>
    )
}

export default Footer;