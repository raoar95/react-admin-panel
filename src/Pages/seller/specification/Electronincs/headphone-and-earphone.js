import React from "react";
import {MyInput, Select, Textarea, Checkbox, Radio} from "../../../../Components/seller/FormComponents/formComp";

const Earphone = () => {
    return(
    <form className="formContainer">

        <h1>PRODUCT SPECIFICATION</h1>

        <Select 
            name="DETACHABLE CHARGER" 
            option={
            <>
              <option value="">Select Product Type</option>
              <option value="">Earphone</option>
              <option value="">Bluetooth Earphone</option>
              <option value="">Earpod</option>
              <option value="">Headphone</option>
            </>
            }
          />

        <MyInput 
            name="COLOR"
            lableName="tags" 
            placeholder = "Write Product Color Here [Eg - black, grey, etc]"
         />

        <Select 
            name="HEADPHONE / EARPHONE TYPE" 
            option={
            <>
              <option value="">Select Headphone / Earphone Type</option>
              <option value="">Wired</option>
              <option value="">Wireless</option>
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
        name = "Sweat Proof"
        lableName = "proof"
        />

         <Checkbox 
        name = "Noise Cancellation"
        lableName = "noise"
        />

         <Checkbox 
        name = "Water Resistant"
        lableName = "resistant"
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

export default Earphone;