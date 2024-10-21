import React from 'react';
import './Product.css';

function Product(props) {
    return (
        <div className='card h-100'>
            <div className='card-body'>
                <h2>Product ID: {props.p.id}</h2>
                <p><b>Product Name: </b>{props.p.title}</p>
                <p><b>Product Price:</b> ${props.p.price}</p>
                <p><b>Product Description: </b>{props.p.description}</p>
                <p><b>Product Category:</b> {props.p.category}</p>
                <img src={props.p.image} alt={props.p.title}  className='image'/>
                <p className='mt-4'><b>Product Rating: </b>{props.p.rating.rate}</p>
                <p><b>Product Count:</b> {props.p.rating.count}</p>
            </div>
        </div>
    );
}

export default Product;