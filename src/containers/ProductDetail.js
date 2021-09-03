import React from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
const ProductDetail = () => {

    const {pid}=useParams();
    console.log(pid);
    
    return(
        <div>
            <h2>Product Listing</h2>
        </div>
    );



}

export default ProductDetail;