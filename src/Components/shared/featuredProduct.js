import React, {useContext} from "react";
import './featuredProduct.css';
import { Link } from "react-router-dom";
import { isInCart } from "../../helpers/helper";
import { CartContext } from "../Context/cartContext";


const FeaturedProduct = (props) => {
    const { name, price, img, stock, id} = props;
    const {addProduct, cartItems, increase} = useContext(CartContext);
    const product = {name, price, img, stock, id };
    const itemInCart = isInCart(product, cartItems);
    return(
        <div className="Container ">
            <div >
                <img className="imagen" src={img} alt="producto" />
            </div>
            <div className="text">
                <h3>{name}</h3>
                <p>Precio: $ {price} </p>
                <p>Stock: {stock} </p>
                {
                    !itemInCart &&
                    <button className="add" onClick={() => addProduct(product)}>
                        Agregar al carrito
                    </button>
                }
                {
                    itemInCart &&
                    <button className="add" onClick={() => increase(product)}> 
                        Agregar Mas
                    </button>
                }
                <Link to={`/product/${id}`}>
                    <button className="add">Ver Mas</button>
                </Link>
            </div>
        </div>

        
        
    )

}
export default FeaturedProduct;