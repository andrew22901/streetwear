import React, { useContext } from "react";
import Layout from "../../shared/Layout";
import FeaturedProduct from "../../shared/featuredProduct";
import { ProductsContext } from "../../Context/productsContext";
import './shop.css'

const Shop = () => {
    const{ products } = useContext(ProductsContext);
    const allProducts = products.map(product => (
        <FeaturedProduct {...product} key={product.id} />
    ));
    return (
        <Layout>
            <div className="">
                <h2 className="title shop-title">Shop</h2>
                <div className="shop-container center">
                    {
                        allProducts
                    }
                </div>
            </div>
        </Layout>
    )
}
export default Shop