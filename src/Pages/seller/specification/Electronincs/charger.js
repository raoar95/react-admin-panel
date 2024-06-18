import React from "react";
import {MyInput, Select, Textarea, Checkbox, Radio} from "../../../../Components/seller/FormComponents/formComp";

const Charger = () => {
    return(
    <form className="formContainer">

        <h1>PRODUCT SPECIFICATION</h1>

        <MyInput 
            name="CHARGER COLOR"
            lableName="color" 
            placeholder = "Write Product Color Here [Eg - black, grey, etc]"
         />

        <MyInput 
            name="CHARGER OUTPUT"
            lableName="output" 
            placeholder = "Write Output Power Supply here [eg - 18 Watt]"
         />

        <MyInput 
            name="CHARGER CABLE TYPE"
            lableName="cable" 
            placeholder = "Write Cable Type Name here [eg - Type-C, Micro USB, etc]"
         />

        <Select 
            name="DETACHABLE CHARGER" 
            option={
            <>
              <option value="">Select Detachable Cable</option>
              <option value="">Yes</option>
              <option value="">No</option>
            </>
            }
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
            name="NUMBERS OF USB PORT" 
            option={
            <>
              <option value="">Select No of USB Port</option>
              <option value="">N/A (Joint Cable)</option>
              <option value="">4</option>
              <option value="">3</option>
              <option value="">2</option>
              <option value="">1</option>
            </>
            }
          />

        <Select 
            name="TYPE-C" 
            option={
            <>
              <option value="">Select Type-C availability</option>
              <option value="">Yes</option>
              <option value="">No</option>
            </>
            }
          />

        <MyInput 
            type="submit"
            value="Submit ➧"
            class="submitBtn"
         />
    </form>
 );
}

export default Charger;