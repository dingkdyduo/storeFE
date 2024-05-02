import React,{ useState, useEffect, useCallback } from 'react'; 
import { useParams } from 'react-router-dom';
import ProductImage from '../component/productImage'
import {getProduct} from "../api/product"


interface Props {}



const ProductPage = (props: Props)  : JSX.Element   => {
    const {product} = useParams()
    const {sku} = useParams()
    const [prod, setProd] = useState<any>()
    const image = {}
    
const fetchDataAsync =  
useCallback(async () => {
    let products =  await getProduct(Number(sku))
    if(products.data.id){
        setProd(products.data)
    }else{
        setProd({}) 
    }
  },[sku])


useEffect(()=>{
  fetchDataAsync();
}, [sku]); 




    return (<div>
       <h1>{prod?.name}</h1>
       {prod?.id > 0 ?
          (
          <div>
            <div className="prodImages">
             <ProductImage />
            </div>
             <div className="productDetails">
                <a className="btn btn-primary" > Add To Cart  </a>  <br />
                <span>Price: {prod.price}  </span>
                <p>{prod.product_description} </p>
             </div>
         </div>
         )
        :
          (<p>No Product Found</p> )
      }
    </div>
   )

}


export default ProductPage