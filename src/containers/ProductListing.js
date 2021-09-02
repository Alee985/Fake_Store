import React from 'react';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products=useSelector((state)=>state)
    return(
        <div className="ui grid container">
            <br/>
            <ProductComponent/>
        </div>
    );



}

export default ProductListing;