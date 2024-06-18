import React from "react";
import {MyInput, Select, Textarea, Checkbox, Radio} from "../../../../Components/seller/FormComponents/formComp";

const PowerBank = () => {
    return(
    <form className="formContainer">
        <h1>PRODUCT SPECIFICATION</h1>

        <MyInput 
            name="COLOR"
            lableName="tags" 
            placeholder = "Write Product Color Here [Eg - black, grey, etc]"
         />

        <MyInput 
            name="POWER BANK OUTPUT"
            lableName="tags" 
            placeholder = "Write Output Power Supply here [eg - 18 Watt]"
         />

        <MyInput 
            name="POWER BANK OUTPUT"
            lableName="tags" 
            placeholder = "Write Power Bank Battery Capacity Here [eg - 25000 mAh]"
         />

        <Select 
            name="FAST CHARGING" 
            option={
            <>
              <option value="">Select Fast Charging Support</option>
              <option value="">Yes</option>
              <option value="">No</option>
            </>
            }
          />

        <Select 
            name="USB PORT" 
            option={
            <>
              <option value="">Select No of USB Port</option>
              <option value="">4</option>
              <option value="">3</option>
              <option value="">2</option>
              <option value="">1</option>
            </>
            }
          />

        <Select 
            name="TYPE-C SUPPORT" 
            option={
            <>
              <option value="">Select Type-C Support</option>
              <option value="">Yes</option>
              <option value="">No</option>
            </>
            }
          />

        <MyInput 
            type="submit"
            value="Next ➧"
            class="submitBtn"
         />

    </form>
 );
}

export default PowerBank;