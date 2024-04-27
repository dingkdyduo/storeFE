import React from "react"
 
import {getFilterProduct} from "../api/product"
import { useState, useEffect, useCallback } from 'react';
import ProductCard from "../component/productCard"

const ProductList =  (props: any)=> {
const {categoryName} = props
const [products, setProducts] = useState("");

const fetchDataAsync =  
  async () => {
    let products =  await getFilterProduct({"category_name":categoryName})
      
    let listItems = "no product found";
    if(products.data.length>0){

      listItems = products.data.map((el:any) =>
        <ProductCard product={el} />
      )
   }
    setProducts(listItems)

  }


 
useEffect(()=>{
  fetchDataAsync();
}, [categoryName]); 

    return ( <div id="blockView"> <ul className="thumbnails">{products} </ul> </div>)
}

export default ProductList