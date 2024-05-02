import React from "react"
import { Link} from 'react-router-dom';
import noimage from "../images/noimage.jpg"

const ProductCard =  (props: any)=> {
const {product} = props
 
    return ( <li className='span3'> 
     <div className="thumbnail">
           <Link to={  "../../"+ product.name +"/"+product.id} > 
            {product.image=="" ? ( <img src={noimage}  /> ) : (<img src={product.image}  />)}
            </Link> 
         <div className="caption">
                  <h5> <b>{product.price}</b></h5> 
				  <h5>   <Link to={  "../../"+ product.name +"/"+product.id} > {product.name} </Link>  </h5>
				 <h4  style={{textAlign:"center"}} >
                      <a className="btn btn-primary" > Add To Cart  </a> 
                  </h4>
		</div>
  
      </div>
     </li>)
}

export default ProductCard