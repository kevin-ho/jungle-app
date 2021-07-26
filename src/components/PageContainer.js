import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import PageBox from "./PageBox"
import { Route, Switch } from "react-router-dom"
import axios from 'axios';
import ProductDetail from "./ProductDetail";

const PageContainer = () => {

    const [fullResults, setResults] = useState({ fullResults: [] });
    const [products, setProducts] = useState({ products: [] });   

    useEffect(() => {
        const fetchData = async () => {
                const result = await axios(
                'http://localhost:3002/products/?category_like=Beauty%20&%20Personal%20Care',
            );
     
            setResults(result.data);
            setProducts(result.data);
            console.log(result.data);
        };
        fetchData();
      }, []);

    const resetResults = () => {
        setProducts(fullResults);
    }

    return (
        <div className="page-container">
            <Navbar fullResults={fullResults} products={products} resetResults={resetResults} setProducts={setProducts} />
            <Switch>
                <Route exact path="/">
                    <PageBox products={products} searched={products.length < fullResults.length} resetResults={resetResults} /> 
                </Route>
                <Route path="/product/:slug">
                    <ProductDetail allProducts={fullResults}/>
                </Route>
            </Switch>
        </div>
    )
}
export default PageContainer