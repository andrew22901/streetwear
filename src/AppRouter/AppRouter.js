import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ProductsContextProvider from '../Components/Context/productsContext';
import HomePage from '../Components/pages/HomePage/HomePage';
import NotFound from '../Components/pages/notFound/notFound';
import Shop from '../Components/pages/tienda/shop';

import ItemDetailContainer from '../Components/itemdetail/ItemDetailContainer';
import CartContextProvider from '../Components/Context/cartContext';
import CartPage from '../Components/pages/cartPage/cartPage';


export default function AppRouter() {
    return (
        <div>
             <BrowserRouter>
  <ProductsContextProvider>
    <CartContextProvider>
            
               
                    <Routes>
                        <Route  path='/' element={<HomePage />}/>
                        <Route path='/*' element={<NotFound />}/>
                        <Route path='/shop' element={<Shop />}/>
                        <Route path='/product/:id' element={<ItemDetailContainer />}/>
                        <Route path='/cart' element={<CartPage />}/>
                    </Routes>

                    </CartContextProvider>
    </ProductsContextProvider>
  </BrowserRouter>
                
        </div>
        
    )
}
