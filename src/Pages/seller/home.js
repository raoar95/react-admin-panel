import React, { Suspense, useState } from "react";
import Footer from "../../Components/seller/footer";
import Header from "../../Components/seller/header";
import AccordionTabs from "../../Components/seller/accordionTabs";
import {MyInput, Select, Textarea, Checkbox, Radio} from  "../../Components/seller/formComp";
import LogReg from "./login";

const Home = () => {
  const [openLogin, setOpenLogin]=useState(true);

  //handle fn 
  const closePopup =()=>{
    setOpenLogin(false)
  }
  const handleOpenPopup=(d)=>{
    setOpenLogin(d)
  }
    return (
     <>
      <Header handleOpenPopup={handleOpenPopup} />
      <div className="homeContainer"> 
          <div className="myBanner">
            <div className="myBannerLeftSec">          
              <h2>Make your <span className="highlight-text">Local Shop Online</span> with <span className="highlight-text">Locals cart</span></h2>
              <p>Sell on Localscart.com, India’s leading local ecommerce marketplace at 0% Commission.</p>
              <div className="btn headLogin bannerBtn">REGISTER NOW TO START SELLING <i class="fa-solid fa-arrow-right"></i></div>
            </div>
            <img src="https://localhost/seller/images/online.jpg" />
         </div>
         
         <div className="homeContentSec">
         
         <AccordionTabs 
            name="acc"
            id="tab1"
            class = "homeTab"
            lableName = "Why sell on Localscart?"           
            attrCheck="defaultChecked"
            tabContentClass = "tabContent homeTabContent"    
            tabContent = {
            <div className="homeTabContentFlex">
              <div className="tabBox">
                  <h4>Compete with Online Ecommerce Platform</h4>
                  <p>Make your shop online to compete with the online ecommerce market. Get registered and become localscart seller to make your product available online.</p>
                </div>
  
                <div className="tabBox">
                  <h4>Growth</h4>
                  <p>Online selling is increasing rapidly day by day so our Localscart marketplace helps you to reach your product to thousands of local customers.</p>
                </div>
                
                <div className="tabBox">
                  <h4>Easy Selling</h4>
                  <p>Registering on Localscart is easy, you only need one product and an active bank account to start selling on Localscart.com.</p>
                </div>
  
                <div className="tabBox">
                  <h4>24*7 Orders</h4>
                  <p>Since your local shop is closed but localscart will be available 24*7 for accepting all your orders with ease. No time boundaries will become a hurdle in your growth path.</p>
                </div>
            </div>
            }
          />

          <AccordionTabs 
            name="acc"
            id="tab2"
            class = "homeTab"
            lableName = "How to Sell on Localscart?"
            tabContentClass = "tabContent homeTabContent"   
            tabContent = {
              <div className="homeTabContentFlex">
                <div className="tabBox">
                  <h4>Step 1: Become Localscart seller</h4>
                  <p>Creating an account and listing products in Localscart is superfast and easy. Only you will need one product to sell and an active bank account. Register now to start selling</p>
                </div>
  
                <div className="tabBox">
                  <h4>Step 2: Customer will place order</h4>
                  <p>Once a customer places an order for your product you will receive notification on you registered email and mobile number for alert.</p>
                </div>
                
                <div className="tabBox">
                  <h4>Step 3: Fulfill your product order</h4>
                  <p>After you receive an order, the next step is to fulfill your order by delivering your product to the customer.</p>
                </div>
  
                <div className="tabBox">
                  <h4>Step 4: Receive money</h4>
                  <p>Once your product is successfully delivered, your sale amount will be credited to your account after deducting Localscart marketplace fee within 7-15 working days.</p>
                </div>
              </div>
              }
          />

          <AccordionTabs 
            name="acc"
            id="tab3"
            class = "homeTab"
            lableName = "Requirements to Become Localscart Seller"
            tabContentClass = "tabContent homeTabContent"    
            tabContent = {
              <div className="homeTabContentFlex lessTab">
                <div className="tabBox">
                  <h4>Minimum One Product to sell</h4>
                  <p>All you need is at least one product to sell on Localscart.</p>
                </div>
  
                <div className="tabBox">
                  <h4>Active Bank Account</h4>
                  <p>An active bank account details is required for depositing your payments.</p>
                </div>
              </div>
              }
          />

         </div>
      </div>
      <Footer />
      <Suspense>
        <LogReg closePopup={closePopup} openLogin={openLogin}/>
      </Suspense>
      </>
    );
}

export default Home;