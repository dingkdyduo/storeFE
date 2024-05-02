import {Button } from "react-bootstrap"

import $ from 'jquery';
 

const HomePageHero = ()  : JSX.Element   => {

  
  let slideCount =  $(".slider ul li").length;
  let slideWidth =  $(".slider ul li").width() || 0;
  let slideHeight =  $(".slider ul li").height();
  let slideUlWidth =  slideCount * slideWidth;
  

let moveLeft =  ()=> {
  $(".slider ul").stop().animate({
    left: + slideWidth
  },700, ()=> {
    $(".slider ul li:last-child").prependTo($(".slider ul"));
    $(".slider ul").css("left","");
  });
}

let moveRight=  ()=> {
  $(".slider ul").stop().animate({
    left: - slideWidth
  },700, function() {
    $(".slider ul li:first-child").appendTo($(".slider ul"));
    $(".slider ul").css("left","");
  });
}
 

 const prepareSlider = ()=>{



$(".slider ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
$(".slider ul li:last-child").prependTo($(".slider ul"));
 
 }
 


  return (
    <div>
    <div className="slider" onLoad={prepareSlider}>
         <div className="thumbnail"> test </div>
    </div>
    <div className="slider" onLoad={prepareSlider}>


    <a href="#0" onClick={moveRight} className="next control">Next</a>
    <a href="#0" onClick={moveLeft} className="prev control">Prev</a>
  
    
   <ul>
      <li className="c"> Slide 1 </li>
      <li className="r"> Slide 2 </li>
      <li className="g"> Slide 3 </li>
      <li className="b"> Slide 4 </li>
    </ul>
  
     
    <div className="slider_option">
      <Button className="btn">Autoplay</Button>
    </div>
  
  </div>
  </div>
  )
}

export default HomePageHero



 