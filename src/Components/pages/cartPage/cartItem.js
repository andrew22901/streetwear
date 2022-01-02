import React from "react";
import { PlusCircleIcon, MinusCircleIcon, TrashIcon} from '../../icons/index'

const CartItem = (props) => {
    const {name, img, price, quantity, stock, increase, decrease, id, removeProduct, } = props;
    const product = {name, img, stock, price, quantity, id}
    return (
        <div className="item-container">
            <div >
                < img className="cart-image" src={img} alt='product' />
            </div>
            <div>
                <h4 className="cart-title">{name}</h4>
                <p className="atribute">${price}</p>
                <p className="atribute">Stock: {stock}</p>
            </div>
            <div>
                <p className="atribute">{`Cantidad: ${quantity}`}</p>
            </div>
            <div >
            <button className="add btn-cart" onClick={() => increase(product)}>
                <PlusCircleIcon width='20px' />
            </button>       
            {
                quantity === 1 &&
                <button className="add btn-cart" onClick={() => removeProduct(product)}>
                    <TrashIcon width='20px' />
                </button>
            }
            {
                quantity > 1 &&
                <button className="add btn-cart" onClick={() => decrease(product)}>
                    <MinusCircleIcon width='20px'/>
                </button>
            }
            </div>
           
        </div>
    )
}
export default CartItem