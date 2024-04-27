import React from "react";
import { Link} from 'react-router-dom';

function SideNav (data:any=[]) : JSX.Element{
  let test=""
  if(data.length>0){
    test =  data.forEach((menu: any) =>(
      <li key={menu.name}> <Link to={"category/"+menu.name} /></li>
  ))
  }
  
  return (
     <ul>  
        {
       test
        }
    </ul>     
  );
}

export default SideNav;
