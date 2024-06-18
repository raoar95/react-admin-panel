import React from "react";
import {MyInput, Select, Textarea, Checkbox, Radio} from "../../Components/seller/formComp";

const ProductDetails = () => {
   return ( 
    <form className="formContainer">

    <h1>PRODUCT DETAILS</h1>

    <MyInput 
        name="BRAND NAME"
        lableName="tags" 
        placeholder = "Eg - Micromax, Lava, etc"
     />

    <MyInput 
        name="BRAND WARRANTY"
        lableName="tags" 
        placeholder = "Eg - 1 Year"
     />

    <MyInput 
        name="MADE IN"
        lableName="tags" 
        placeholder = "Eg - India"
     />

    <Textarea 
           name="IN SALES PACKAGE"
           lableName="tags"
           placeholder = "Write all the items which is available in the package. [Eg - Product Invoice, Shop Invoice, Handset, Adapter, USB Cable (Type-C), SIM Card Tool, Screen Protect Film, Case, Important Info Booklet with Warranty Card, Quick Guide]"
         />

    <MyInput 
        type="submit"
        value="Save & List Product"
        class="submitBtn"
     />

    </form>
   );
}

export default ProductDetails;