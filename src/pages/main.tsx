import { Outlet , Link , useLoaderData , Form} from "react-router-dom";
import CategoryList from "../component/categoryList"
import MyAccoutSideNav from "../component/myAccoutSideNav"
import Header from "../component/header"

 
export default function MainPage() {
    return (
      <>
         
        <div id='header'>
            <Header /> 
        </div>   
        <div id='mainBody'>
          <div className='container'>
            <div className="row"> 
                <div id="sideBar" className='span3'>
                <MyAccoutSideNav />
                <CategoryList />
                </div>
                <div id='mainContent' className="span9">  <Outlet /> </div>
            </div>
          </div>
        </div>   
        <div id='footerSection'></div>   
      </>
    );
  }