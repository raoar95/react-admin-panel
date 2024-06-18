import React from "react";
import Table from "../../Components/seller/tableComp";
import AccordionTabs from "../../Components/seller/accordionTabs";

const PaymentDetails = () => {

    return (

     <div className="tableContainer paymentContainer">

       <div className="accordionTabs"> 

       <AccordionTabs 
        
        name="acc"
        id="tab1"
        lableName = "ALL PAYMENTS"
        attrCheck = "defaulChecked"
        tabContentClass = "tabContent"     
        tabContent = { 
        
        <>

        <Table 
        
        headData = { 
          
          <>
             <th>Order Id</th>
             <th>Product Name</th>
             <th>Payment Amount</th>
             <th>Payment Date</th>
             <th>Payment Status</th>         
          </>
          
        }

        bodyRows = { 
          
          <>
             <tr>
                <td data-label="Payment Id" class="responsive-color">LOC821543</td>
                <td data-label="Product Name" class="responsive-color">Television</td>
                <td data-label="Payment Amount">&#8377; 12000</td>
                <td data-label="Payment Date">15-06-2021</td>
                <td data-label="Payment Status"><span className="sucess">Paid</span></td>
            </tr>

            <tr className="altRow">
                <td data-label="Payment Id" class="responsive-color">LOC821543</td>
                <td data-label="Product Name" class="responsive-color">Television</td>
                <td data-label="Payment Amount">&#8377; 12000</td>
                <td data-label="Payment Date">15-06-2021</td>
                <td data-label="Payment Status"><span className="pending">In Process</span></td>
            </tr>
            
            <tr>
                <td data-label="Payment Id" class="responsive-color">LOC821543</td>
                <td data-label="Product Name" class="responsive-color">Television</td>
                <td data-label="Payment Amount">&#8377; 12000</td>
                <td data-label="Payment Date">15-06-2021</td>
                <td data-label="Payment Status"><span className="sucess">Paid</span></td>
            </tr>

            <tr className="altRow">
                <td data-label="Payment Id" class="responsive-color">LOC821543</td>
                <td data-label="Product Name" class="responsive-color">Television</td>
                <td data-label="Payment Amount">&#8377; 12000</td>
                <td data-label="Payment Date">15-06-2021</td>
                <td data-label="Payment Status"><span className="pending">In Process</span></td>
            </tr>

            <tr>
                <td data-label="Payment Id" class="responsive-color">LOC821543</td>
                <td data-label="Product Name" class="responsive-color">Television</td>
                <td data-label="Payment Amount">&#8377; 12000</td>
                <td data-label="Payment Date">15-06-2021</td>
                <td data-label="Payment Status"><span className="sucess">Paid</span></td>
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
        lableName = "PENDING PAYMENTS"
        tabContentClass = "tabContent"      
        tabContent = { 
        
        <>

        <Table 
        
        headData = { 
          
          <>
             <th>Order Id</th>
             <th>Product Name</th>
             <th>Payment Amount</th>
             <th>Payment Date</th>
             <th>Payment Status</th>         
          </>
          
        }

        bodyRows = { 
          
          <>

            <tr>
                <td data-label="Payment Id" class="responsive-color">LOC821543</td>
                <td data-label="Product Name" class="responsive-color">Television</td>
                <td data-label="Payment Amount">&#8377; 12000</td>
                <td data-label="Payment Date">15-06-2021</td>
                <td data-label="Payment Status"><span className="pending">In Process</span></td>
            </tr>
        

            <tr className="altRow">
                <td data-label="Payment Id" class="responsive-color">LOC821543</td>
                <td data-label="Product Name" class="responsive-color">Television</td>
                <td data-label="Payment Amount">&#8377; 12000</td>
                <td data-label="Payment Date">15-06-2021</td>
                <td data-label="Payment Status"><span className="pending">In Process</span></td>
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
        lableName = "SETTLED PAYMENTS" 
        tabContentClass = "tabContent"     
        tabContent = { 
        
        <>

        <Table 
        
        headData = { 
          
          <>
             <th>Order Id</th>
             <th>Product Name</th>
             <th>Payment Amount</th>
             <th>Payment Date</th>
             <th>Payment Status</th>         
          </>
          
        }

        bodyRows = { 
          
          <>
             <tr>
                <td data-label="Payment Id" class="responsive-color">LOC821543</td>
                <td data-label="Product Name" class="responsive-color">Television</td>
                <td data-label="Payment Amount">&#8377; 12000</td>
                <td data-label="Payment Date">15-06-2021</td>
                <td data-label="Payment Status"><span className="sucess">Paid</span></td>
            </tr>
            
            <tr className="altRow">
                <td data-label="Payment Id" class="responsive-color">LOC821543</td>
                <td data-label="Product Name" class="responsive-color">Television</td>
                <td data-label="Payment Amount">&#8377; 12000</td>
                <td data-label="Payment Date">15-06-2021</td>
                <td data-label="Payment Status"><span className="sucess">Paid</span></td>
            </tr>

            <tr>
                <td data-label="Payment Id" class="responsive-color">LOC821543</td>
                <td data-label="Product Name" class="responsive-color">Television</td>
                <td data-label="Payment Amount">&#8377; 12000</td>
                <td data-label="Payment Date">15-06-2021</td>
                <td data-label="Payment Status"><span className="sucess">Paid</span></td>
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



export default PaymentDetails;