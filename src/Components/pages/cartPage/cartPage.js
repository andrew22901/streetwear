import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';
import Layout from '../../shared/Layout';
import CartItem from './cartItem';
import './cartPage.css';
import Total from './total';

const CartPage = () => {
    const {cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext);
    const funcs = { increase, decrease, removeProduct}
    
    return(
        <Layout>
            <>
                <h1 className='title'>Cart</h1>
                {
                    cartItems.length === 0 ? <div>El carrito esta vacio</div>
                    :
                    <>
                        <div className='cart-page'>
                            <div>
                                {
                                    cartItems.map(item =><CartItem { ...item } key={item.id} {...funcs}/>)
                                }
                            </div>
                        </div>
                        <Total itemCount={itemCount} total={total} clearCart={clearCart}/>
                    </>
                }
            </>
        </Layout>
    )

}
export default CartPage