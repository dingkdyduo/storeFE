import React from "react";
import MainMenu from "./mainMenu";
import logo from "../images/logo.png"
 

interface Props {}

const Header: React.FC<Props> = ({
}: Props): JSX.Element => {
    
  return (
 
<div id="header">
<div className="container">
 <div id="logoArea" className="navbar navbar-inner">
<a id="smallScreen" data-target="#topMenu" data-toggle="collapse" className="btn btn-navbar">
	<span className="icon-bar"></span>
	<span className="icon-bar"></span>
	<span className="icon-bar"></span>
</a>
  <div className="">
    <a className="brand" href="#"><img src={logo} alt="Bootsshop"/></a>
	 
   <MainMenu />
  </div>
</div>
</div>
</div>

)};

export default Header;