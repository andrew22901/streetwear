
import React from "react";
import Layout from '../../shared/Layout'


export default function NotFound() {
    const style = {
        fontWeight: 'bold',
        textAlign: 'center',
    }
    return (
        <Layout>
            <h1 style={style}>(404) Pagina no encontrada</h1>
        </Layout> 
    )
}