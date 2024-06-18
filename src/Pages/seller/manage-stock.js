import React from "react";
import {MyInput, Select, Textarea, Checkbox, Radio} from  "../../Components/seller/formComp"
import Table from "../../Components/seller/tableComp";
import {AccordionTabs, TabLabel} from "../../Components/seller/accordionTabs";

const ManageStocks = () => {

    return (

        <div className="tableContainer">

      <Table 
        
        headData = { 
          
          <>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Sub Category</th>
            <th>Current Status</th>
            <th>Stock Quantity</th>
            <th>Action</th>       
          </>
          
        }

        bodyRows = { 
          
          <>
                  <tr>
                     <td data-label="Product Name" className="responsive-color">Samsung Galaxy Note 10</td>
                     <td data-label="Product Category">Mobile</td>
                     <td data-label="Product Sub Category">Smartphone</td>
                     <td data-label="Current Status" className="stockWidth">

                     <input type="radio" className="stockClr" id="stock" name="mystock" defaultChecked />
                     <label for="stock" className="stock st">In Stock</label>

                     <input type="radio" id="outstock" name="mystock" />
                     <label for="outstock" className="outStock st">Out of Stock</label>
                                         
                     </td>

                     <td data-label="Auto Stock">
                     
                     <input type="number" name="stockQty" placeholder="Write Stock Quantity. [Eg - 10, 20]" className="stockInput" />

                     </td>
                     <td data-label="Action">
                     <span className="update sucess">UPDATE</span>
                     </td>
                   </tr>

                   <tr className="altRow">
                     <td data-label="Product Name" className="responsive-color">Samsung Galaxy Note 10</td>
                     <td data-label="Product Category">Mobile</td>
                     <td data-label="Product Sub Category">Smartphone</td>
                     <td data-label="Current Status" className="stockWidth">

                     <input type="radio" className="stockClr" id="stock0" name="mystock1" defaultChecked />
                     <label for="stock0" className="stock st">In Stock</label>

                     <input type="radio" id="outstock0" name="mystock1" />
                     <label for="outstock0" className="outStock st">Out of Stock</label>
                                         
                     </td>

                     <td data-label="Auto Stock">

                     
                     <input type="number" name="stockQty" placeholder="Write Stock Quantity. [Eg - 10, 20]" className="stockInput" />
                     

                     </td>
                     <td data-label="Action">
                     <span className="update sucess">UPDATE</span>
                     </td>
                   </tr>

                   <tr>
                     <td data-label="Product Name" className="responsive-color">Samsung Galaxy Note 10</td>
                     <td data-label="Product Category">Mobile</td>
                     <td data-label="Product Sub Category">Smartphone</td>
                     <td data-label="Current Status" className="stockWidth">

                     <input type="radio" className="stockClr" id="stock1" name="mystock2" defaultChecked />
                     <label for="stock1" className="stock st">In Stock</label>

                     <input type="radio" id="outstock1" name="mystock2" />
                     <label for="outstock1" className="outStock st">Out of Stock</label>
                                         
                     </td>

                     <td data-label="Auto Stock">

                     
                     <input type="number" name="stockQty" placeholder="Write Stock Quantity. [Eg - 10, 20]" className="stockInput" />
                     

                     </td>
                     <td data-label="Action">
                     <span className="update sucess">UPDATE</span>
                     </td>
                   </tr>
  

                   <tr className="altRow">
                     <td data-label="Product Name" className="responsive-color">Samsung Galaxy Note 10</td>
                     <td data-label="Product Category">Mobile</td>
                     <td data-label="Product Sub Category">Smartphone</td>
                     <td data-label="Current Status" className="stockWidth">

                     <input type="radio" className="stockClr" id="stock2" name="mystock3" defaultChecked />
                     <label for="stock2" className="stock st">In Stock</label>

                     <input type="radio" id="outstock2" name="mystock3" />
                     <label for="outstock2" className="outStock st">Out of Stock</label>
                                         
                     </td>

                     <td data-label="Auto Stock">

                     
                     <input type="number" name="stockQty" placeholder="Write Stock Quantity. [Eg - 10, 20]" className="stockInput" />
                     
                     {/* <MyInput 
                        lableName="name" 
                        placeholder = "Write Stock Quantity. [Eg - 10, 20]"
                    /> */}

                     </td>
                     <td data-label="Action">
                     <span className="update sucess">UPDATE</span>
                     </td>
                   </tr>
  
                   <tr>
                     <td data-label="Product Name" className="responsive-color">Samsung Galaxy Note 10</td>
                     <td data-label="Product Category">Mobile</td>
                     <td data-label="Product Sub Category">Smartphone</td>
                     <td data-label="Current Status" className="stockWidth">

                     <input type="radio" className="stockClr" id="stock3" name="mystock4" defaultChecked />
                     <label for="stock3" className="stock st">In Stock</label>

                     <input type="radio" id="outstock3" name="mystock4" />
                     <label for="outstock3" className="outStock st">Out of Stock</label>
                                         
                     </td>

                     <td data-label="Auto Stock">

                     
                     <input type="number" name="stockQty" placeholder="Write Stock Quantity. [Eg - 10, 20]" className="stockInput" />
                     
                     {/* <MyInput 
                        lableName="name" 
                        placeholder = "Write Stock Quantity. [Eg - 10, 20]"
                    /> */}

                     </td>
                     <td data-label="Action">
                     <span className="update sucess">UPDATE</span>
                     </td>
                   </tr>  
  
          </>
 
          
        }

      />


        </div>

    );

}

export default ManageStocks;  