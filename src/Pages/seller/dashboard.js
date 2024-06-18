import React from "react";
import Table from "../../Components/seller/tableComp";

const Dashboard = () => {

    return (

        <div className="tableContainer">

            <div className="SelDashUpper">

                <div className="dataBox">
                    <div className="saleBoxIcon fa-solid fa-chart-line"></div>
                    <div className="saleBoxText">
                        <p className="saleNum">10,000</p>
                        <p className="saleText">TOTAL SALES</p>
                    </div>
                </div>

                <div className="dataBox">
                    <div className="saleBoxIcon fa-solid fa-box"></div>
                    <div className="saleBoxText">
                        <p className="saleNum">50</p>
                        <p className="saleText">TOTAL ORDERS</p>
                    </div>
                </div>

                <div className="dataBox">
                    <div className="saleBoxIcon fa-solid fa-boxes-stacked"></div>
                    <div className="saleBoxText">
                        <p className="saleNum">20</p>
                        <p className="saleText">PENDING ORDERS</p>
                    </div>
                </div>

                <div className="dataBox lastDataBox">
                    <div className="saleBoxIcon fa-solid fa-wallet"></div>
                    <div className="saleBoxText">
                        <p className="saleNum">90,000</p>
                        <p className="saleText">PAYMENTS</p>
                    </div>
                </div>

            </div>
            <div className="SelDashLower">

                <div className="SelDashLowerHead">
                    <h2>RECENT ORDERS</h2>
                    <div className="btn">VIEW ALL ORDERS</div>
                </div>

                <div className="SelDashLowerBody">

                <Table 
        
        headData = { 
          
          <>
             <th>Order Id</th>
             <th>Product Name</th>
             <th>Product Price</th>
             <th>Order Date & Time</th>
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
                   <td><span className="pending">Pending</span></td>
               </tr>
              <tr className="altRow">
                   <td className="responsive-color">LOC821543</td>
                   <td>Samsung Galaxy Note 10</td>
                   <td>&#8377; 12000</td>
                   <td>15-06-2021 10:00 A.M</td>
                   <td><span className="pending">Pending</span></td>
               </tr>
              <tr>
                   <td className="responsive-color">LOC821543</td>
                   <td>Micromax In 1</td>
                   <td>&#8377; 12000</td>
                   <td>15-06-2021 10:00 A.M</td>
                   <td><span className="sucess">Sucessful</span></td>
               </tr>
              <tr className="altRow">
                   <td className="responsive-color">LOC821543</td>
                   <td>Samsung Galaxy Note 10</td>
                   <td>&#8377; 12000</td>
                   <td>15-06-2021 10:00 A.M</td>
                   <td><span className="cancel">Canceled</span></td>
               </tr>
              <tr>
                   <td className="responsive-color">LOC821543</td>
                   <td>Realme 8 Pro</td>
                   <td>&#8377; 12000</td>
                   <td>15-06-2021 10:00 A.M</td>
                   <td><span className="sucess">Sucessful</span></td>
               </tr>          
          </>
          
        }

      />

                </div>

                <div className="SelDashLowerHead SelDashHead2">
                    <h2>TOP SELLING PRODUCTS</h2>
                </div>

                <div className="SelDashLowerBody SelDashbody2">

                <Table 
        
        headData = { 
          
          <>
             <th>SL No</th>
             <th>Product Name</th>
             <th>No of Orders</th>           
          </>
          
        }

        bodyRows = { 
          
          <>
             <tr>
                   <td className="responsive-color">1</td>
                   <td>Realme 8 Pro</td>
                   <td>50</td>
               </tr>
              <tr className="altRow">
                   <td className="responsive-color">2</td>
                   <td>Samsung Galaxy Note 10</td>
                   <td>40</td>
               </tr>
              <tr>
                   <td className="responsive-color">3</td>
                   <td>Micromax In 1</td>
                   <td>30</td>
               </tr>
              <tr className="altRow">
                   <td className="responsive-color">4</td>
                   <td>Samsung Galaxy Note 10</td>
                   <td>20</td>
               </tr>
              <tr>
                   <td className="responsive-color">5</td>
                   <td>Realme 8 Pro</td>
                   <td>10</td>
               </tr>          
          </>
          
        }

      />

                </div>                

            </div>
        </div>

    );

}

export default Dashboard;