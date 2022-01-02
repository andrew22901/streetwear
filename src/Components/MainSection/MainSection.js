import React from "react";
import Buso from '../assets/buso2.jpg';
import './MainSection.css';

const MainSection = ({ history }) => {
    return(
        <div className="main-section-container">
            <h1>Producto Estrella</h1>
            <div className="main-section-middle">
                
                <div className="ms-m-image">
                    <img className="ms-image" src={Buso} alt="Buso"/>
                </div>
                <div className="ms-m-description">
                    <h2>Anti Social Social Club Hoddie</h2>
                    <p className="description">descripcion del producto</p>
                    <button className="add" id="shop-now" onClick={()=> history.push('/product/1')}>
                        ASSC Hoddie
                    </button>
                </div>
            </div>
        </div>
    )
}
export default MainSection