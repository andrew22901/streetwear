import React, { useContext, useEffect, useState } from "react";
import  { ProductsContext } from "../Context/productsContext";
import Layout from "../shared/Layout";
import './Itemdetail.css'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { CartContext } from "../Context/cartContext";
import { isInCart } from "../../helpers/helper";

const ItemDetailContainer = () => {
    const { products } = useContext(ProductsContext);
    const [loader, setLoader] = useState(true)
    const {addProduct, cartItems, increase} = useContext(CartContext)

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const itemInCart = isInCart(product, cartItems)
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })

    useEffect(() => {
        getProducts.then(resultsProducts => {
            resultsProducts.filter(resultProduct => {
                if (resultProduct.id === parseInt(id)) {
                    console.log("proof", resultsProducts)
                    setProduct(resultProduct)
                   setLoader(false)
                }else(console.log( resultProduct))
            })
        })
    }, [id])


    console.log(products)

    const { img, name, price, stock } = product;
  
    return(
        <Layout>
            <div>
            {
            loader
            ?
            <Loader />
            :

            <div className="title" >
            
            <h1 className="title">{name}</h1>
            <div className="box title">
                <img className="detailimg" alt="img" src={img}/>
                <div className="info">
                    <h1>{name} StreetWear Classic</h1>
                    <h2 className="precio">precio: {price} USD </h2>
                    <h2>Stock: {stock}  </h2>
                    

                    <div className="buttons">
                        {
                            !itemInCart &&
                            <button className="add btn-detail" id="boton" onClick={() => addProduct(product)}>
                                Agregar al carrito</button> 
                        }
                         {
                            itemInCart &&
                            <button className="add btn-detail" id="boton" onClick={() => increase(product)}>
                                Agregar Mas</button> 
                        }
                    
                     

                   
                     <button  className="add btn-detail">Check out</button>
                    </div>
                    
                    
                    

                </div>
            </div>
        </div>
            }
        </div>

        </Layout>
    )

}
export default ItemDetailContainer
        