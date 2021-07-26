import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import PageBox from "./PageBox"
import { BrowserRouter as Router } from "react-router-dom"
import axios from 'axios';

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
            <Navbar products={products} resetResults={resetResults} />
            <Router>
                <PageBox products={products}/> 
            </Router>
        </div>
    )
}
export default PageContainer