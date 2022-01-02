import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../cartIcon/CartIcon";
import './Header.css';


export default function Header() {
    
        return(
            <nav className="menu">
                <Link to='/'>
                        <a className="logo">StreetWear</a>
                </Link>
            <ul className="menu_items" >
                <li>
                    <Link to='/'>
                        <a href="#">Inicio</a>
                    </Link>
                        
                    
                </li>
                <li>
                        <Link to='/shop'>
                        <a href="#">Tienda</a>
                        </Link>
                </li>
               
               
                <li>
                    <CartIcon />
                </li>
                
                
                
            </ul>
        </nav>
        );
    
}
