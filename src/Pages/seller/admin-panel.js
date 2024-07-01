import { React, useRef, useState }from "react";
import { Link } from "react-router-dom";
import {MyInput, Select, Textarea, Checkbox, Radio} from  "../../Components/seller/formComp";
import Footer from "../../Components/seller/footer";
import Dashboard from "./dashboard";
import AddProduct from "./add-product"
import ManageProduct from "./manage-product"
import ViewOrders from "./view-orders"
import MangeOrders from "./manage-order"
import ManageStock from "./manage-stock"
import Payment from "./payment-details"
import Account from "./account";

const AdminPanel =  (props) => {
   
  // open and close nav sidebar js & background disable js

   const myPanel = useRef(null);

   function openNav() {

    myPanel.current.style.width = "340px";
    document.body.style.overflow = 'hidden';
   }
 
   function closeNav() {
    myPanel.current.style.width = "0";
    document.body.style.overflow = '';
   }




   

  //  Admin Panel Content Change Js
   
   const [tag, setTag] = useState(<Dashboard />);
   const [headVal, setheadVal] = useState("Dashboard");

   const DashChangeTag = () => {

    const newVal = <Dashboard />; 
    setTag(newVal);
    const newHeadVal = "Dashboard"
    setheadVal(newHeadVal);

   }

   const addProChangeTag = () => {

    const newVal = <AddProduct />;
    setTag(newVal)
    const newHeadVal = "Add Products"
    setheadVal(newHeadVal);

   }

   const manageProChangeTag = () => {

    const newVal = <ManageProduct />;
    setTag(newVal)
    const newHeadVal = "Manage Products"
    setheadVal(newHeadVal);

   }

   const orderChangeTag = () => {

    const newVal = <ViewOrders />;
    setTag(newVal)
    const newHeadVal = "View Orders"
    setheadVal(newHeadVal);

   }

   const manageOrdChangeTag = () => {

    const newVal = <MangeOrders />;
    setTag(newVal)
    const newHeadVal = "Manage Orders"
    setheadVal(newHeadVal);

   }

   const stockChangeTag = () => {

    const newVal = <ManageStock />;
    setTag(newVal)
    const newHeadVal = "View / Manage Stocks"
    setheadVal(newHeadVal);

   }

   const paymentChangeTag = () => {

    const newVal = <Payment />;
    setTag(newVal)
    const newHeadVal = "Payment Details"
    setheadVal(newHeadVal);

   }

   const AccntChangeTag = () => {

    const newVal = <Account />;
    setTag(newVal)
    const newHeadVal = "My Accounts"
    setheadVal(newHeadVal);

   }

   return (

      <>
      
        <header className="nav">

            <div id="mySidepanel" className="sidepanel" ref={myPanel}>

                    <div className="top-panel">
                        <div className="head-top">
                            <i className="fas fa-user"></i>
                            <p>Welcome</p>
                            <p className="compName">National Electronics</p>
                            <a href="https://localhost/localshop/pages/login.php" target="_blank">View Store Page</a>
                         </div>
                         <Link to="#" className="closebtn" onclick={closeNav}>×</Link>
                       </div>

                        <div className="lower-panel">
                            
                        <Radio 
                         lableName = "item1"
                         radioName = "myRadio"
                         attChecked = "defaultChecked"
                         name = {
                         <>
                          <i className="fas fa-home"></i>
                          <span>Dashboard</span>                        
                         </>
                         }
                         clickFunc = {DashChangeTag}
                        />

                        
                        <Radio 
                         lableName = "item2"
                         radioName = "myRadio"
                         name = {
                         <>
                          <i className="fas fa-plus-square"></i>
                          <span>Add / Manage Product</span>                       
                         </>
                         }
                         clickFunc = {addProChangeTag}
                        />

                        <div className="dropdown">
                          <p onClick={addProChangeTag}>Add Product</p>
                          <p onClick={manageProChangeTag}>Manage Products</p>  
                        </div> 


                        <Radio 
                         lableName = "item3"
                         radioName = "myRadio"
                         name = {
                         <>
                          <i className="fas fa-tasks"></i>
                          <span>View / Manage Orders</span>                        
                         </>
                         }
                         clickFunc = {orderChangeTag}
                        />

                        <div className="dropdown">
                          <p onClick={orderChangeTag}>View Orders</p>
                          <p onClick={manageOrdChangeTag}>Manage Orders</p>  
                        </div>                         

                        <Radio 
                         lableName = "item4"
                         radioName = "myRadio"
                         name = {
                         <>
                          <i className="fas fa-edit"></i>
                          <span>View / Manage Stock</span>                        
                         </>
                         }
                         clickFunc = {stockChangeTag}
                        />

                        <Radio 
                         lableName = "item5"
                         radioName = "myRadio"
                         name = {
                         <>
                          <i className="fas fa-wallet"></i>
                          <span>Payments</span>                        
                         </>
                         }
                         clickFunc = {paymentChangeTag}
                        />

                        <Radio 
                         lableName = "item6"
                         radioName = "myRadio"
                         name = {
                         <>
                          <i className="fas fa-user"></i>
                          <span>Accounts</span>                        
                         </>
                         }
                         clickFunc = {AccntChangeTag}
                        />

                        <div className="signout-panel-box">
                          <i className="fas fa-sign-out-alt"></i>
                          <span>Logout</span>
                       </div>   
                    </div>
                </div>


            {/* Header left Sec */}
          <div className="headerLeftSec">

            <button className="openbtn" onClick={openNav}>☰</button>
            <h1>{headVal}</h1>

          </div>
          


          {/* Header Right Sec */}
          <div className="headerRightSec">

            <div className="navLogoNot">
               <i className="fas fa-bell"></i>
               <span>NOTIFICATION</span>
            </div>

          </div>

          </header>

          {/* Content Sec */}

          <div className="ContentArea">
            {/* <Dashboard /> */}
            {tag}
          </div>


          {/* footer Sec */}

          <Footer />

      </>
    )
}

export default AdminPanel;