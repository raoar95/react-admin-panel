import React from "react";
import {MyInput, Select, Textarea, Checkbox, Radio} from "../../../../Components/seller/FormComponents/formComp";

const SmartWatch = () => {
    return(
    <form className="formContainer">

        <h1>PRODUCT SPECIFICATION</h1>

        <Select 
            name="SMART WATCH TYPE" 
            option={
            <>
               <option value="">Select Smart Watch Type</option>
               <option value="">Smart Watch</option>
               <option value="">Fitness Band</option>
            </>
            }
          />

        <Select 
            name="SMART WATCH SHAPE" 
            option={
            <>
               <option value="">Select Smart Watch Shape</option>
               <option value="">Circle</option>
               <option value="">Curved Edge</option>
               <option value="">Oval</option>
               <option value="">Rectangle</option>
               <option value="">Square</option>
            </>
            }
          />

        <MyInput 
            name="COLOR"
            lableName="tags" 
            placeholder = "Write Product Color Here [Eg - black, grey, etc]"
         />

        <Select 
            name="SCREEN TYPE" 
            option={
            <>
              <option value="">Select Screen Type</option>
              <option value="">QLED</option>
              <option value="">OLED</option>
              <option value="">Super AMOLED</option>
              <option value="">LED</option>
              <option value="">IPS LCD</option>
              <option value="">LCD</option>
              <option value="">TFT</option>
            </>
            }
          />

        <Select 
            name="OPERATING SYSTEM" 
            option={
            <>
               <option value="">Select Operating System</option>
               <option value="">Android</option>
               <option value="">iOS</option>
            </>
            }
          />

        <Select 
            name="SUITABLE FOR" 
            option={
            <>
               <option value="">Select Suitable For</option>   
               <option value="">Men</option>
               <option value="">Women</option>
               <option value="">Both Men & Women</option>
            </>
            }
          />

        <Select 
            name="BODY MATERIAL" 
            option={
            <>
               <option value="">Select Body Material Made With</option>   
               <option value="">Rubber</option>
               <option value="">Silicone</option>
               <option value="">Stainless steel</option>
            </>
            }
          />

        <Select 
            name="USAGE" 
            option={
            <>
               <option value="">Select Usage For</option>
               <option value="">Normal</option>   
               <option value="">Fitness</option>
               <option value="">Health</option>
               <option value="">Security</option>
            </>
            }
          />

        <div className="checkbox">

        <label className="headLable">FEATURES</label><br />

        <Checkbox 
        name = "FM Player"
        lableName = "fm"
        />

        <Checkbox 
        name = "Alarm Clock"
        lableName = "clock"
        />

        <Checkbox 
        name = "Backlit Display"
        lableName = "display"
        />

        <Checkbox 
        name = "GPS"
        lableName = "gps"
        />

        <Checkbox 
        name = "Calender"
        lableName = "calender"
        />

        <Checkbox 
        name = "Calling"
        lableName = "call"
        />

        <Checkbox 
        name = "WiFi"
        lableName = "wifi"
        />

        <Checkbox 
        name = "WiFi Calling"
        lableName = "wifi1"
        />

        <Checkbox 
        name = "Bluetooth"
        lableName = "bluetooth"
        />

        <Checkbox 
        name = "HD Video Recording"
        lableName = "recording"
        />

        <Checkbox 
        name = "Heart Rate Notifier"
        lableName = "heartrate"
        />

        <Checkbox 
        name = "Rechargeable Battery"
        lableName = "recbat"
        />

        <Checkbox 
        name = "Scratch Resistant"
        lableName = "scratch"
        />

        <Checkbox 
        name = "Water Resistant"
        lableName = "water"
        />

        <Checkbox 
        name = "Touchscreen"
        lableName = "touch"
        />

        <Checkbox 
        name = "Compass"
        lableName = "compass"
        />

        <Checkbox 
        name = "Calorie Count"
        lableName = "calorie"
        />

        <Checkbox 
        name = "Step Count"
        lableName = "step"
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

export default SmartWatch;