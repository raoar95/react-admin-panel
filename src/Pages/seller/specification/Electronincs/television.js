import React from "react";
import {MyInput, Select, Textarea, Checkbox, Radio} from "../../../../Components/seller/formComp";

const Television = () => {
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
            name="MODEL NO"
            lableName="tags" 
            placeholder = "Write Product Model No Here [Eg - MZB082QIN]"
         />

        <MyInput 
            name="COLOR"
            lableName="tags" 
            placeholder = "Write Product Color Here [Eg - black, grey, etc]"
         />

        <Select 
            name="SMART TV" 
            option={
            <>
               <option value="">Select Smart TV</option>
               <option value="">Yes</option>
               <option value="">No</option>
            </>
            }
          />

        <Select 
            name="CURVED TV" 
            option={
            <>
               <option value="">Select Curved TV</option>
               <option value="">Yes</option>
               <option value="">No</option>
            </>
            }
          />

        <MyInput 
            name="SCREEN SIZE"
            lableName="tags" 
            placeholder = "Write Screen Size here [Eg - 55 inches]"
         />

        <Select 
            name="TOUCH SCREEN" 
            option={
            <>
               <option value="">Select Touch Screen Support</option>
               <option value="">Yes</option>
               <option value="">No</option>
            </>
            }
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
            name="SCREEN RESOLUTION" 
            option={
            <>
               <option value="">Select Screen Resolution</option>
               <option value="">Above 8K</option>
               <option value="">8K [7680x4320 Pixel]</option>
               <option value="">4K Ultra HD [3840x2160 Pixel]</option>
               <option value="">Full HD+ [2560x1440 Pixel]</option>
               <option value="">Full HD [1920x1080 Pixel]</option>
               <option value="">HD+ [1366 x768 Pixel]</option>
               <option value="">HD [1280x720 Pixel]</option>
               <option value="">SD [720x480 Pixel]</option>
               <option value="">Below SD</option>            
            </>
            }
          />

        <div className="checkbox">

        <label className="headLable">NETWORK CONNECTIVITY</label><br />

        <Checkbox 
        name = "Built-in Wi-Fi"
        lableName = "wifi"
        />
        
        <Checkbox 
        name = "Bluetooth"
        lableName = "bluetooth"
        />

        <Checkbox 
        name = "Chromecast"
        lableName = "chromecast"
        />

        </div>

        <Select 
            name="HDMI PORT" 
            option={
            <>
               <option value="">Select No of HDMI Port</option>
               <option value="">4</option>
               <option value="">3</option>
               <option value="">2</option>
               <option value="">1</option>        
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


        <MyInput 
            type="submit"
            value="Next ➧"
            class="submitBtn"
         />

    </form>
 );
}

export default Television;