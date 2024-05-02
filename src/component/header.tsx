import React from "react";
import MainMenu from "./mainMenu";
import logo from "../images/logo.png"
 

interface Props {}

const Header: React.FC<Props> = ({
}: Props): JSX.Element => {
    
  return (
 
<div id="header">
  <div id="logoArea" className="navbar navbar-inner">
  <a className="brand" href="#"><img src={logo} alt="Bootsshop"/></a>
  <MainMenu />
    
  </div>
</div>

)};

export default Header;