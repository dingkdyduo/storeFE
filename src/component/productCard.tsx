import React from "react"
import withRouter from 'react-router-dom';
 
import {getFilterProduct} from "../api/product"
import { useState, useEffect, useCallback } from 'react';
import noimage from "../images/noimage.jpg"

const ProductCard =  (props: any)=> {
const {product} = props
 
    return ( <li className='span3'> 
     <div className="thumbnail">
         <a href="product_details.html">
            {product.image=="" ? ( <img src={noimage}  /> ) : (<img src={product.image}  />)}
         </a>
         <div className="caption">
				  <h5>  {product.name} </h5>
				  <p> 
                    {product.product_description}
				  </p>
				 <h4>
                      <a className="btn" href="product_details.html"> 
                             <i className="icon-zoom-in"></i>
                      </a> 
                      <a className="btn" href="#">Add to
                        <i className="icon-shopping-cart">
                        </i></a> 
                    <a className="btn btn-primary" href="#"> {product.price}</a>
               </h4>
		</div>
  
      </div>
     </li>)
}

export default ProductCard