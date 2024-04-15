import React, { SyntheticEvent } from "react";
 
 

interface Props {}

const MainMenu: React.FC<Props> = ({
}: Props): JSX.Element => {
  return (
    <div>
       <ul id='mainMenu'>
          <li> <a href="/">Home</a></li>
          <li> <a href="/about">about</a></li>
          <li> <a href="/contactus">contact us</a></li>
       </ul>
    </div>
  );
};

export default MainMenu;
