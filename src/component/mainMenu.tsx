import React from "react";
 

const MainMenu  = (): JSX.Element => {
  return (
       <ul id='topMenu' className="nav pull-right">
          <li> <a href="/">Home</a></li>
          <li> <a href="/about">about</a></li>
          <li> <a href="/contactus">contact us</a></li>
       </ul>
  );
};

export default MainMenu;
