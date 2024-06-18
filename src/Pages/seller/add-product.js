import React from "react";
import {MyInput, Select, Textarea, Checkbox, Radio} from "../../Components/seller/formComp";

const AddProduct = () => {
    return (   
        <form className="formContainer InputComp">
        <h1>ADD PRODUCT DETAILS</h1>

      {/* <div className="InputComp"> */}
        <Select 
            name="SELECT PRODUCT CATEGORY" 
            option={
            <>
              <option value="">Select Category</option>
              <option value="">Mobile</option>
              <option value="">Keypad / Featured phone</option>
              <option value="">Laptop</option>
              <option value="">Television</option>
            </>
            }
          />

        <Select 
            name="SELECT PRODUCT SUB CATEGORY"  
            option={
            <>
              <option value="">Select Sub Category</option>
              <option value="">Smartphones</option>
              <option value="">Mobile Accessories</option>
              <option value="">Laptop</option>
              <option value="">Smart T.V’s</option>
              <option value="">Headphone & Earphone</option>
              <option value="">Speakers</option>
              <option value="">Smart Watch</option>
              <option value="">Refurbished / Used Products</option>
            </>
            }
          />

        <MyInput 
            name="PRODUCT NAME"
            lableName="name" 
            placeholder = "Write Product Name with watt Here [eg - Mi Mobile Charger (10 W, Black, Type-C)]"
         />

         <Textarea 
           name="PRODUCT DESCRIPTION"
           lableName="tags"
           placeholder = "Enter Product Short Description Here ...."
         />

        <MyInput 
            name="PRODUCT TAGS"
            lableName="tags" 
            placeholder = "Enter Product Tags"
         />
         
        <h2>PRODUCT IMAGES</h2>
          
        <MyInput 
            type="file"
            name="PRODUCT FRONT SIDE VIEW IMAGE"
            class="fileInput" 
         />

        <MyInput 
            type="file"
            name="PRODUCT BACK SIDE VIEW IMAGE"
            class="fileInput" 
         />

        <MyInput 
            type="file"
            name="PRODUCT RIGHT SIDE VIEW IMAGE"
            class="fileInput" 
         />

        <MyInput 
            type="file"
            name="PRODUCT LEFT SIDE VIEW IMAGE"
            class="fileInput" 
         /> 

        <MyInput 
            type="file"
            name="PRODUCT CLOSEUP VIEW IMAGE"
            class="fileInput" 
         />

      {/* </div> */}

        <h2>PRODUCT PRICE</h2>

        <MyInput 
            type="number"
            name="MRP PRICE"
            placeholder = "Enter Product MRP Price" 
         />

        <MyInput 
            type="number"
            name="SELLING PRICE"
            placeholder = "Enter Product Selling Price"  
         />

        <MyInput 
            type="number"
            name="SELLER DISCOUNTED PRICE"
            placeholder = "Enter Product DISCOUNTED Price (IF IN DISCOUNT)"  
         />

        <h2>REQUIRED DETAILS</h2>

        <Select 
            name="PRODUCT GST SLAB RATE"  
            option={
            <>
              <option value="">Select GST Slab Rate</option>
              <option value="">0% (No GST)</option>
              <option value="">5%</option>
              <option value="">12%</option>
              <option value="">18%</option>
              <option value="">28%</option>
            </>
            }
          />
        <p className="notePara"><strong>NOTE:</strong> GST will not be charged, it is asked to show in the prodct purchase invoice or bill.</p>

        <MyInput 
            type="submit"
            value="NEXT ➧"
            class="submitBtn"
         />
     </form>
   );
}


export default AddProduct;