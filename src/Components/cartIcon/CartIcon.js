import React from "react";
import shoppingBag from '../../Components/assets/carrito-de-compras.png';
import '../cartIcon/CartIcon.css'
import { CartContext } from "../Context/cartContext";
import { useContext } from 'react';
import { Link } from "react-router-dom";

const CartIcon = () => {
    const { itemCount, cartItems } = useContext(CartContext)
    console.log('cart:', cartItems)
    return(
        <Link to='/cart'>
        <div className='cart-container'> 
        
        <img className="cart-img" src={shoppingBag} alt="cart"/>
        
            
            {
               itemCount > 0 ? <span className='cart-count'> { itemCount } </span> : null

            }           
        </div>
        </Link>
    )
}
export default CartIcon