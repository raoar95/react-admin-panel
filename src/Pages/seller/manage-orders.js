import React from "react";
import Table from "../../Components/seller/tableComp";
import {AccordionTabs, TabLabel} from "../../Components/seller/accordionTabs";

const ManageOrders = () => {

    return (

        <div className="manageOrderContainer">

        <div className="tabLabel">

            <TabLabel 
            id="tab1"
            lableName = "ALL ORDERS"
            />

            <TabLabel 
            id="tab2"
            lableName = "PENDING ORDERS"
            />

            <TabLabel 
            id="tab3"
            lableName = "SUCESSFULL ORDERS"
            />

            <TabLabel 
            id="tab4"
            lableName = "CANCELED ORDERS"
            />
      
        </div>

        <div className="accordionTabs">    

        <AccordionTabs 
        
        name="acc"
        id="tab1"
        attrCheck = "checked"     
        tabContent = { 
        
        <>

        <Table 
        
        headData = { 
          
          <>
             <th>Order Id</th>
             <th>Product Name</th>
             <th>Product Price</th>
             <th>Order Date & Time</th>
             <th>Delivery Details</th>
             <th>Payment Mode</th>
             <th>Order Status</th>           
          </>
          
        }

        bodyRows = { 
          
          <>
             <tr>
                   <td className="responsive-color">LOC821543</td>
                   <td>Realme 8 Pro</td>
                   <td>&#8377; 12000</td>
                   <td>15-06-2021 10:00 A.M</td>
                   <td>
                    <div className="order-address">
                      <p><span>Arun Rao</span></p>
                      <p>Q-No - 67, Pakur Road, Near Tinplate Company Po - Golmuri, Jamshedpur, Jharkhand 831003</p>
                      <p><span>Contact No:</span> 9999999999 <br /></p>   
                      <p><span>Address Type:</span> Home (10 A.M to 9 P.M)</p>
                    </div>
                   </td>
                   <td>Online Payment</td>
                   <td><span className="pending">Pending</span></td>
               </tr>
              <tr className="altRow">
                   <td className="responsive-color">LOC821543</td>
                   <td>Samsung Galaxy Note 10</td>
                   <td>&#8377; 12000</td>
                   <td>15-06-2021 10:00 A.M</td>
                   <td>
                    <div className="order-address">
                      <p><span>Arun Rao</span></p>
                      <p>Q-No - 67, Pakur Road, Near Tinplate Company Po - Golmuri, Jamshedpur, Jharkhand 831003</p>
                      <p><span>Contact No:</span> 9999999999 <br /></p>   
                      <p><span>Address Type:</span> Home (10 A.M to 9 P.M)</p>
                    </div>
                   </td>
                   <td>Cash On Delivery</td>
                   <td><span className="pending">Pending</span></td>
               </tr>
              <tr>
                   <td className="responsive-color">LOC821543</td>
                   <td>Micromax In 1</td>
                   <td>&#8377; 12000</td>
                   <td>15-06-2021 10:00 A.M</td>
                   <td>
                    <div className="order-address">
                      <p><span>Arun Rao</span></p>
                      <p>Q-No - 67, Pakur Road, Near Tinplate Company Po - Golmuri, Jamshedpur, Jharkhand 831003</p>
                      <p><span>Contact No:</span> 9999999999 <br /></p>   
                      <p><span>Address Type:</span> Home (10 A.M to 9 P.M)</p>
                    </div>
                   </td>
                   <td>Visit & Delivery</td>
                   <td><span className="sucess">Sucessful</span></td>
               </tr>
              <tr className="altRow">
                   <td className="responsive-color">LOC821543</td>
                   <td>Samsung Galaxy Note 10</td>
                   <td>&#8377; 12000</td>
                   <td>15-06-2021 10:00 A.M</td>
                   <td>
                    <div className="order-address">
                      <p><span>Arun Rao</span></p>
                      <p>Q-No - 67, Pakur Road, Near Tinplate Company Po - Golmuri, Jamshedpur, Jharkhand 831003</p>
                      <p><span>Contact No:</span> 9999999999 <br /></p>   
                      <p><span>Address Type:</span> Home (10 A.M to 9 P.M)</p>
                    </div>
                   </td>
                   <td>Online Payment</td>
                   <td><span className="cancel">Canceled</span></td>
               </tr>
              <tr>
                   <td className="responsive-color">LOC821543</td>
                   <td>Realme 8 Pro</td>
                   <td>&#8377; 12000</td>
                   <td>15-06-2021 10:00 A.M</td>
                   <td>
                    <div className="order-address">
                      <p><span>Arun Rao</span></p>
                      <p>Q-No - 67, Pakur Road, Near Tinplate Company Po - Golmuri, Jamshedpur, Jharkhand 831003</p>
                      <p><span>Contact No:</span> 9999999999 <br /></p>   
                      <p><span>Address Type:</span> Home (10 A.M to 9 P.M)</p>
                    </div>
                   </td>
                   <td>Visit & Delivery</td>
                   <td><span className="sucess">Sucessful</span></td>
               </tr>          
          </>
          
        }

      />
        
        
        </>
        
        }

        />

        <AccordionTabs 
        
        name="acc"
        id="tab2"
        tabContent = { 
        
            <>
    
            <Table 
            
            headData = { 
              
              <>
                 <th>Order Id</th>
                 <th>Product Name</th>
                 <th>Product Price</th>
                 <th>Order Date & Time</th>
                 <th>Delivery Details</th>
                 <th>Payment Mode</th>
                 <th>Order Status</th>           
              </>
              
            }
    
            bodyRows = { 
              
              <>
                 <tr>
                       <td className="responsive-color">LOC821543</td>
                       <td>Realme 8 Pro</td>
                       <td>&#8377; 12000</td>
                       <td>15-06-2021 10:00 A.M</td>
                       <td>
                        <div className="order-address">
                          <p><span>Arun Rao</span></p>
                          <p>Q-No - 67, Pakur Road, Near Tinplate Company Po - Golmuri, Jamshedpur, Jharkhand 831003</p>
                          <p><span>Contact No:</span> 9999999999 <br /></p>   
                          <p><span>Address Type:</span> Home (10 A.M to 9 P.M)</p>
                        </div>
                       </td>
                       <td>Online Payment</td>
                       <td><span className="pending">Pending</span></td>
                   </tr>
                  <tr className="altRow">
                       <td className="responsive-color">LOC821543</td>
                       <td>Samsung Galaxy Note 10</td>
                       <td>&#8377; 12000</td>
                       <td>15-06-2021 10:00 A.M</td>
                       <td>
                        <div className="order-address">
                          <p><span>Arun Rao</span></p>
                          <p>Q-No - 67, Pakur Road, Near Tinplate Company Po - Golmuri, Jamshedpur, Jharkhand 831003</p>
                          <p><span>Contact No:</span> 9999999999 <br /></p>   
                          <p><span>Address Type:</span> Home (10 A.M to 9 P.M)</p>
                        </div>
                       </td>
                       <td>Cash On Delivery</td>
                       <td><span className="pending">Pending</span></td>
                   </tr>
       
              </>
              
            }
    
          />
            
            
            </>
            
            }

        />

        <AccordionTabs 
        
        name="acc"
        id="tab3"
        
        tabContent = { 
        
            <>
    
            <Table 
            
            headData = { 
              
              <>
                 <th>Order Id</th>
                 <th>Product Name</th>
                 <th>Product Price</th>
                 <th>Order Date & Time</th>
                 <th>Delivery Details</th>
                 <th>Payment Mode</th>
                 <th>Order Status</th>           
              </>
              
            }
    
            bodyRows = { 
              
              <>
  
                  <tr>
                       <td className="responsive-color">LOC821543</td>
                       <td>Micromax In 1</td>
                       <td>&#8377; 12000</td>
                       <td>15-06-2021 10:00 A.M</td>
                       <td>
                        <div className="order-address">
                          <p><span>Arun Rao</span></p>
                          <p>Q-No - 67, Pakur Road, Near Tinplate Company Po - Golmuri, Jamshedpur, Jharkhand 831003</p>
                          <p><span>Contact No:</span> 9999999999 <br /></p>   
                          <p><span>Address Type:</span> Home (10 A.M to 9 P.M)</p>
                        </div>
                       </td>
                       <td>Visit & Delivery</td>
                       <td><span className="sucess">Sucessful</span></td>
                   </tr>
                  <tr>
                       <td className="responsive-color">LOC821543</td>
                       <td>Realme 8 Pro</td>
                       <td>&#8377; 12000</td>
                       <td>15-06-2021 10:00 A.M</td>
                       <td>
                        <div className="order-address">
                          <p><span>Arun Rao</span></p>
                          <p>Q-No - 67, Pakur Road, Near Tinplate Company Po - Golmuri, Jamshedpur, Jharkhand 831003</p>
                          <p><span>Contact No:</span> 9999999999 <br /></p>   
                          <p><span>Address Type:</span> Home (10 A.M to 9 P.M)</p>
                        </div>
                       </td>
                       <td>Visit & Delivery</td>
                       <td><span className="sucess">Sucessful</span></td>
                   </tr>          
              </>
              
            }
    
          />
            
            
            </>
            
            }

        />

        <AccordionTabs 
        
        name="acc"
        id="tab4"
        tabContent = { 
        
            <>
    
            <Table 
            
            headData = { 
              
              <>
                 <th>Order Id</th>
                 <th>Product Name</th>
                 <th>Product Price</th>
                 <th>Order Date & Time</th>
                 <th>Delivery Details</th>
                 <th>Payment Mode</th>
                 <th>Order Status</th>           
              </>
              
            }
    
            bodyRows = { 
              
              <>
              
                  <tr className="altRow">
                       <td className="responsive-color">LOC821543</td>
                       <td>Samsung Galaxy Note 10</td>
                       <td>&#8377; 12000</td>
                       <td>15-06-2021 10:00 A.M</td>
                       <td>
                        <div className="order-address">
                          <p><span>Arun Rao</span></p>
                          <p>Q-No - 67, Pakur Road, Near Tinplate Company Po - Golmuri, Jamshedpur, Jharkhand 831003</p>
                          <p><span>Contact No:</span> 9999999999 <br /></p>   
                          <p><span>Address Type:</span> Home (10 A.M to 9 P.M)</p>
                        </div>
                       </td>
                       <td>Online Payment</td>
                       <td><span className="cancel">Canceled</span></td>
                   </tr>
                 
              </>
              
            }
    
          />
            
            
            </>
            
            }

        />

        </div>

      </div>

    );

}

export default ManageOrders;