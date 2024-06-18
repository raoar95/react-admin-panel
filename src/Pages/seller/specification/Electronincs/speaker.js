import React from "react";
import {MyInput, Select, Textarea, Checkbox, Radio} from "../../../../Components/seller/FormComponents/formComp";

const Speaker = () => {
    return(
    <form className="formContainer">

        <h1>PRODUCT SPECIFICATION</h1>

        <Select 
            name="SPEAKER TYPE" 
            option={
            <>
               <option value="">Select Speaker Type</option>
               <option value="">Bluetooth Speaker</option>
               <option value="">Woofer / Home Theater</option>
               <option value="">Other Speakers</option>
            </>
            }
          />

        <MyInput 
            name="COLOR"
            lableName="tags" 
            placeholder = "Write Product Color Here [Eg - black, grey, etc]"
         />

        <MyInput 
            name="OUTPUT"
            lableName="tags" 
            placeholder = "Write Power Output Here [eg - 80 Watt, 1800 Watt, etc]"
         />

        <Select 
            name="CHANNEL" 
            option={
            <>
               <option value="">Select Speaker Channel</option>
               <option value="">8.1</option>
               <option value="">7.1</option>
               <option value="">6.1</option>
               <option value="">5.1</option>
               <option value="">4.1</option>
               <option value="">3.1</option>
               <option value="">2.1 Stereo</option>
               <option value="">1.1 Mono</option>
            </>
            }
          />

        <div className="checkbox">

        <label className="headLable">FEATURES</label><br />

        <Checkbox 
        name = "Deep Bass"
        lableName = "bass"
        />

         <Checkbox 
        name = "True Wireless"
        lableName = "wireless"
        />

        <Checkbox 
        name = "Bluetooth"
        lableName = "bluetooth"
        />

         <Checkbox 
        name = "Remote Control"
        lableName = "control"
        />

         <Checkbox 
        name = "Portable"
        lableName = "portable"
        />

        </div>

        <MyInput 
            type="submit"
            value="Next ➧"
            class="submitBtn"
         />

    </form>
 );
}

export default Speaker;