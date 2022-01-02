import React from "react";
import Layout from "../../shared/Layout";
import MainSection from "../../MainSection/MainSection";
import FeaturedCollection from "../../../featuredCollection/FeatureCollection";

const HomePage = () => {
    return(
        <>
        <Layout>
            <MainSection />
            <FeaturedCollection />
        </Layout>
        </>
            
        
    )
}
export default HomePage