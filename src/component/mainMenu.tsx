import React from "react";
 

const MainMenu  = (): JSX.Element => {
  return (
       <ul id='topMenu' style={{margin:"100px 10px 0 0"}} className="nav pull-right">
          <li> <a href="/">Home</a></li>
          <li> <a href="/about">About</a></li>
          <li> <a href="/contactus">Contact us</a></li>
       </ul>
  );
};

export default MainMenu;
