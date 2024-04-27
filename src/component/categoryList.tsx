import React, { useEffect, useState } from "react";
import getAllCategory from "../api/category"
import { Link} from 'react-router-dom';

interface Props {}

const CategoryList =  () => {
  const [categories,setCategory] = useState([])
  const fetchDataAsync =  
    async () => {
      let category =  await getAllCategory()
      if(category.data.length>0){
      setCategory(category.data)
      }
    }
   
  
  
    useEffect(()=>{
      fetchDataAsync();
    }, []); 
    
    

 return (
    <ul> 
       {
          categories.map((menu:any) => (
                <li key={menu.name}> <Link to={"category/"+menu.name}> {menu.name} </Link></li>
            ))
       }
   </ul>     
 )
}

export default CategoryList;
