import React, { useEffect, useState } from "react";
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logout as logoutAction } from '../store/authSlice'

interface Props {}

const MyAccoutSideNav = (): JSX.Element => {
   const dispatch = useDispatch<any>();
   const { isAuthenticated, user } = useSelector((state:any) => state.auth);
   const logout = ()=>{
         dispatch(logoutAction())
      
   }
   return (
      <div> 
         {
            isAuthenticated ? 
               (
                  <div>  Hi!:<b> { user.name } </b> <br /> 
                    <Link to="dashboard" >dashboard </Link>  |  
                    <Link to="login" onClick={logout} >logout </Link>  </div> 
                ) :
               (<div><span> Hi Guest!:  </span><Link to="login" > Login  here </Link> </div>)
         }
         <hr/>
      </div>     
   )
}

export default MyAccoutSideNav;
