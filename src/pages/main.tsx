import { Outlet , Link , useLoaderData , Form} from "react-router-dom";
import CategoryList from "../component/categoryList"
import MainMenu from "../component/mainMenu"

 
export default function MainPage() {
    //const { contacts } = useLoaderData();
    return (
      <>
        <div id='pageheader'> 
           <div id='logo'> Logo here </div>
           <div>   <MainMenu /> </div>
         </div>
        <hr/>
        <div>
            <div id="sidebar"> 
                 <CategoryList />
            </div>
            <div id="detail">
              <Outlet />
            </div>      
       </div>
        
      </>
    );
  }