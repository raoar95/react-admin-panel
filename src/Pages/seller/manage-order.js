import React from "react";
import Table from "../../Components/seller/tableComp";

const MangeOrders = () => {
    return (
    
        <div className="tableContainer">

        {/* <div className="noData">NO ORDERS TO SHOW</div> */}

        <Table 
        
        headData = { 
          
          <>
             <th>Order ID</th>
             <th>Product Name</th>
             <th>Product Price</th>
             <th>Order Date & Time</th>
             <th>Order Cancelling Reason</th>
             <th>Action</th>          
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
                    <div className="CancelReasonTd">
                        <textarea placeholder="Write Cancel Reason Here. (IT IS SHOWN TO USER AS CANCELLATION REASON)" required></textarea>
                    </div>
                   </td>
                   <td className="cancelOrderTd"><span className="update sucess">Cancel Order</span></td>
               </tr>

               <tr>
                   <td className="responsive-color">LOC821543</td>
                   <td>Realme 8 Pro</td>
                   <td>&#8377; 12000</td>
                   <td>15-06-2021 10:00 A.M</td>
                   <td>
                    <div className="CancelReasonTd">
                        <textarea placeholder="Write Cancel Reason Here. (IT IS SHOWN TO USER AS CANCELLATION REASON)" required></textarea>
                    </div>
                   </td>
                   <td className="cancelOrderTd"><span className="update sucess">Cancel Order</span></td>
               </tr>

               <tr>
                   <td className="responsive-color">LOC821543</td>
                   <td>Realme 8 Pro</td>
                   <td>&#8377; 12000</td>
                   <td>15-06-2021 10:00 A.M</td>
                   <td>
                    <div className="CancelReasonTd">
                        <textarea placeholder="Write Cancel Reason Here. (IT IS SHOWN TO USER AS CANCELLATION REASON)" required></textarea>
                    </div>
                   </td>
                   <td className="cancelOrderTd"><span className="update sucess">Cancel Order</span></td>
               </tr>

               <tr>
                   <td className="responsive-color">LOC821543</td>
                   <td>Realme 8 Pro</td>
                   <td>&#8377; 12000</td>
                   <td>15-06-2021 10:00 A.M</td>
                   <td>
                    <div className="CancelReasonTd">
                        <textarea placeholder="Write Cancel Reason Here. (IT IS SHOWN TO USER AS CANCELLATION REASON)" required></textarea>
                    </div>
                   </td>
                   <td className="cancelOrderTd"><span className="update sucess">Cancel Order</span></td>
               </tr>

               <tr>
                   <td className="responsive-color">LOC821543</td>
                   <td>Realme 8 Pro</td>
                   <td>&#8377; 12000</td>
                   <td>15-06-2021 10:00 A.M</td>
                   <td>
                    <div className="CancelReasonTd">
                        <textarea placeholder="Write Cancel Reason Here. (IT IS SHOWN TO USER AS CANCELLATION REASON)" required></textarea>
                    </div>
                   </td>
                   <td className="cancelOrderTd"><span className="update sucess">Cancel Order</span></td>
               </tr>

          </>
            
        }

        />

        </div>

        );
}

export default MangeOrders;