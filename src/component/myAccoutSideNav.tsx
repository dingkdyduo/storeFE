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
      Hi Guest!: 
      {
         isAuthenticated ? 
            (<b> { user.name } </b>) :
            (<Link to="login" > Login  here </Link>)
      }
      <hr/>
   </div>     
 )
}

export default MyAccoutSideNav;
