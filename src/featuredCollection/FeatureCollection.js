import React, {useContext} from "react";
import { ProductsContext } from "../Components/Context/productsContext";
import FeaturedProduct from "../Components/shared/featuredProduct";
import '../Components/shared/featuredProduct.css'

const FeaturedCollection = () => {
    const { products } = useContext(ProductsContext)
    const productItems = products.filter((product, i) => i < 4).map(product => (
        <FeaturedProduct {...product} key={product.id} />
      ));
        return(
            <div>
                <h2 className="title">Categories</h2>
                <div className='Grid'>
                    {productItems}
                </div>
            </div>
        )
}
export default FeaturedCollection
