import React from "react";
import { Link } from "react-router-dom";
import './cartPage.css'


const Total = ({itemCount, total, clearCart}) => {
    return(
        <div>
            <div>
                <p className="atribute">
                    Total Items: {itemCount}
                </p>
                <p className="atribute"> {`Total: $${total}`}</p>
            </div>
            <div>
                <Link to={'/'}>
                <button className="add btn-cart total-btn">Checkout</button>
                </Link>

                <button className="add btn-cart total-btn"  onClick={() => clearCart()}>Clear</button>
                
            </div>
        </div>
    )
}
export default Total