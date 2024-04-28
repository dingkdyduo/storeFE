import React, { useEffect, useState } from "react";
import getAllCategory from "../api/category"
//import SideNav from "./sidenav"
import { Link} from 'react-router-dom';
import {  useSelector } from 'react-redux'

interface Props {}

const MyAccoutSideNav = (): JSX.Element => {
const { isAuthenticated, user } = useSelector((state:any) => state.auth);
console.log(isAuthenticated, user)
 return (
    <div> 
      {
         isAuthenticated ? 
            (<div>  Hi!:<b> { user.name } </b> <Link to="dashboard" >dashboard </Link> </div> ) :
            (<div><span> Hi Guest!:  </span><Link to="login" > Login  here </Link> </div>)
      }
      <hr/>
   </div>     
 )
}

export default MyAccoutSideNav;
