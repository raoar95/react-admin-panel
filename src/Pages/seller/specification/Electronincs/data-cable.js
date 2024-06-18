import React from "react";
import {MyInput, Select, Textarea, Checkbox, Radio} from "../../../../Components/seller/FormComponents/formComp";

const DataCable = () => {
    return(
    <form className="formContainer">
      <h1>PRODUCT SPECIFICATION</h1>
        <MyInput 
            name="CABLE COLOR"
            lableName="color" 
            placeholder = "Write Product Color Here [Eg - black, grey, etc]"
         />

        <MyInput 
            name="CABLE TYPE"
            lableName="type" 
            placeholder = "Write Cable Type Here [Eg - Type-C, micro USB, etc]"
         />

        <MyInput 
            name="CABLE LENGTH"
            lableName="length" 
            placeholder = "Write Cable Length Here [Eg - 1 meter]"
         />

        <MyInput 
            type="submit"
            value="Submit ➧"
            class="submitBtn"
         />

    </form>
 );
}

export default DataCable;