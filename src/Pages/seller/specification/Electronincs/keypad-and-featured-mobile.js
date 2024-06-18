import React from "react";
import {MyInput, Select, Textarea, Checkbox, Radio} from "../../../../Components/seller/FormComponents/formComp";

const KeypadPhone = () => {
    return(
    <form className="formContainer">

        <h1>PRODUCT SPECIFICATION</h1>

        <Select 
            name="PRODUCT CONDITION" 
            option={
            <>
              <option value="">Select Product Condition</option>
              <option value="">New</option>
              <option value="">Refurbished / Used Product</option>
            </>
            }
          />

        <MyInput 
            name="COLOR"
            lableName="color" 
            placeholder = "Write Product Color Here [Eg - black, grey, etc]"
         />

        <MyInput 
            name="MODEL NO"
            lableName="model" 
            placeholder = "Write Product Model No Here [Eg - MZB082QIN]"
         />

        <MyInput 
            name="RAM"
            lableName="ram" 
            placeholder = "Write Product Ram Size Here [Eg - 512 MB]"
         />

        <MyInput 
            name="INTERNAL STORAGE"
            lableName="storage" 
            placeholder = "Write Product Internal Storage Here [Eg - 4 GB]"
         />

        <MyInput 
            name="FRONT CAMERA"
            lableName="camera" 
            placeholder = "Write Front Camera Megapixel Here [eg - 1.8MP]. Write N/A if not available"
         />

        <MyInput 
            name="BACK / REAR CAMERA"
            lableName="camera" 
            placeholder = "Write Back / Rear  Camera Megapixel Here [eg - 1.8MP]"
         />

        <MyInput 
            name="BATTERY CAPACITY"
            lableName="battery" 
            placeholder = "Write Battery Capacity Here [eg - 1000 mAh]"
         />

        <MyInput 
            name="SCREEN SIZE"
            lableName="screen" 
            placeholder = "Write Battery Capacity Here [eg - 1000 mAh]"
         />

        <Select 
            name="SIM TYPE" 
            option={
            <>
              <option value="">Select Sim Type</option>
              <option value="">Single Sim</option>
              <option value="">Dual Sim</option>
            </>
            }
          />

        <Select 
            name="SIM TYPE" 
            option={
            <>
              <option value="">Select Mobile Network</option>
              <option value="">5G</option>
              <option value="">4G VOLTE</option>
              <option value="">4G</option>
              <option value="">3G</option>
              <option value="">2G</option>
            </>
            }
          />

        <div className="checkbox">

        <label><strong>FEATURES</strong></label><br /><br />

        <Checkbox 
        name = "FM Player"
        lableName = "fm"
        />

        <Checkbox 
        name = "Music Player"
        lableName = "player"
        />

        <Checkbox 
        name = "Audio Jack"
        lableName = "audio"
        />

        <Checkbox 
        name = "GPS"
        lableName = "gps"
        />

        <Checkbox 
        name = "NavIC"
        lableName = "navic"
        />

        <Checkbox 
        name = "WiFi"
        lableName = "wifi"
        />

        <Checkbox 
        name = "WiFi Calling"
        lableName = "wifi"
        />

        <Checkbox 
        name = "Bluetooth"
        lableName = "bluetooth"
        />

        <Checkbox 
        name = "HD Recording"
        lableName = "recording"
        />

        <Checkbox 
        name = "OTG Support"
        lableName = "otg"
        />

        <Checkbox 
        name = "Splash Proof"
        lableName = "splash"
        />

        </div>

        <MyInput 
            type="submit"
            value="Submit ➧"
            class="submitBtn"
         />

    </form>
 );
}

export default KeypadPhone;