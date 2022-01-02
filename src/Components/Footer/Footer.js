import React from "react";
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear
    return( 
        <div className="footer">
            {year} © STREETWEAR store
        </div>
    )
}

export default Footer