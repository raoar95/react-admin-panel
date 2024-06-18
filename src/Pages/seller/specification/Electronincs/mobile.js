import React from "react";
import {MyInput, Select, Textarea, Checkbox, Radio} from "../../../../Components/seller/FormComponents/formComp";

const Mobile = () => {
    return(
    <form className="formContainer">

        <h1>PRODUCT SPECIFICATION</h1>

        <Select 
            name="MOBILE TYPES" 
            attReq="required"
            option={
            <>
              <option value="">Select Smartphone Type</option>
              <option value="">Premium Smartphone (ABOVE ₹50,000)</option>
              <option value="">Mid Range Smartphone (ABOVE ₹20,000)</option>
              <option value="">Budget Smartphone (BELOW ₹20,000)</option>
            </>
            }
          />

        <Select 
            name="GAMING SMARTPHONE" 
            option={
            <>
               <option value="">Select Gaming Smatphone</option>
               <option value="">Yes</option>
               <option value="">No</option>
            </>
            }
          />

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
            name="OPERATING SYSTEM" 
            option={
            <>
               <option value="">Select Operating System</option>
               <option value="">Android</option>
               <option value="">iOS</option>
               <option value="">Windows</option>
            </>
            }
          />

        <Select 
            name="PROCESSOR BRAND" 
            option={
            <>
               <option value="">Select Processor Brand</option>
               <option value="">Qualcomm Snapdragon</option>
               <option value="">Mediatek</option>
               <option value="">Samsung Exynos</option>
               <option value="">Apple</option>
               <option value="">HiSilicon Kirin</option>
            </>
            }
          />

        <MyInput 
            name="PROCESSOR NAME"
            lableName="tags" 
            placeholder = "Write full Processor Name Here [Eg - Qualcomm Snapdragon 888 5G]"
         />

        <Select 
            name="CORES" 
            option={
            <>
               <option value="">Select Core</option>
               <option value="">Single Core</option>
               <option value="">Dual Core</option>
               <option value="">Quad Core</option>
               <option value="">Octa Core</option>
               <option value="">Hexa Core</option>
            </>
            }
          />

        <Select 
            name="RAM" 
            option={
            <>
               <option value="">Select RAM Size</option>
               <option value="">Above 16 GB</option>
               <option value="">16 GB</option>
               <option value="">12 GB</option>
               <option value="">10 GB</option>
               <option value="">8 GB</option>
               <option value="">6 GB</option>
               <option value="">4 GB</option>
               <option value="">3 GB</option>
               <option value="">2 GB</option>
               <option value="">1 GB</option>
               <option value="">512 MB</option>
               <option value="">Less than 512MB</option>     
            </>
            }
          />

        <Select 
            name="INTERNAL STORAGE" 
            option={
            <>
               <option value="">Select Internal Storage</option>
               <option value="">Above 512 GB</option>
               <option value="">512 GB</option>
               <option value="">256 GB</option>
               <option value="">128 GB</option>
               <option value="">64 GB</option>
               <option value="">32 GB</option>
               <option value="">16 GB</option>
               <option value="">8 GB</option>
               <option value="">4 GB</option>
               <option value="">2 GB</option>
               <option value="">1 GB</option>
               <option value="">Less than 1 GB</option>  
            </>
            }
          />

        <Select 
            name="NO OF FRONT CAMERA" 
            option={
            <>
               <option value="">Select No of Front Camera</option>
               <option value="">1</option>
               <option value="">2</option>
            </>
            }
          />

        <Select 
            name="FRONT CAMERA" 
            option={
            <>
               <option value="">Select Front Camera Megapixel</option>
               <option value="">N/A (No Front Camera)</option>
               <option value="">Above 48MP</option>
               <option value="">48MP</option>
               <option value="">32MP</option>
               <option value="">13MP</option>
               <option value="">12MP</option>
               <option value="">8MP</option>
               <option value="">5MP</option>
               <option value="">2MP</option>
               <option value="">Below 2MP</option>
            </>
            }
          />

        <Select 
            name="FRONT SECONDARY CAMERA" 
            option={
            <>
               <option value="">Select Front Secondary Camera Megapixel</option>
               <option value="">N/A (No Secondary Camera)</option>
               <option value="">Above 48MP</option>
               <option value="">48MP</option>
               <option value="">32MP</option>
               <option value="">13MP</option>
               <option value="">12MP</option>
               <option value="">8MP</option>
               <option value="">5MP</option>
               <option value="">2MP</option>
               <option value="">Below 2MP</option>
            </>
            }
          />

        <Select 
            name="NO OF REAR / BACK CAMERA" 
            option={
            <>
               <option value="">Select No of Rear / Back Camera</option>
               <option value="">1</option>
               <option value="">2</option>
               <option value="">3</option>
               <option value="">4</option>
            </>
            }
          />
        
        <Select 
            name="REAR / BACK CAMERA (PRIMARY LENS)" 
            option={
            <>
               <option value="">Select Primary Lens Megapixel</option>
               <option value="">Above 108MP</option>
               <option value="">108MP</option>
               <option value="">64MP</option>
               <option value="">50MP</option>
               <option value="">48 MP</option>
               <option value="">32MP</option>
               <option value="">16MP</option>
               <option value="">8MP</option>
               <option value="">5MP</option>
               <option value="">2MP</option>
               <option value="">Below 2MP</option>
            </>
            }
          />

        <Select 
            name="REAR / BACK CAMERA (DEPTH LENS)" 
            option={
            <>
               <option value="">Select Depth Lens Megapixel</option>
               <option value="">N/A (No Depth Lens)</option>
               <option value="">Above 108MP</option>
               <option value="">108MP</option>
               <option value="">64MP</option>
               <option value="">50MP</option>
               <option value="">48 MP</option>
               <option value="">32MP</option>
               <option value="">16MP</option>
               <option value="">8MP</option>
               <option value="">5MP</option>
               <option value="">2MP</option>
               <option value="">Below 2MP</option>
            </>
            }
          />

        <Select 
            name="REAR / BACK CAMERA (ULTRAWIDE LENS)" 
            option={
            <>
               <option value="">Select Ultrawide Lens Megapixel</option>
               <option value="">N/A (No Ultrawide Lens)</option>
               <option value="">Above 108MP</option>
               <option value="">108MP</option>
               <option value="">64MP</option>
               <option value="">50MP</option>
               <option value="">48 MP</option>
               <option value="">32MP</option>
               <option value="">16MP</option>
               <option value="">8MP</option>
               <option value="">5MP</option>
               <option value="">2MP</option>
               <option value="">Below 2MP</option>
            </>
            }
          />

        <Select 
            name="REAR / BACK CAMERA (MACRO LENS)" 
            option={
            <>
               <option value="">Select Macro Lens Megapixel</option>
               <option value="">N/A (No Macro Lens)</option>
               <option value="">Above 108MP</option>
               <option value="">108MP</option>
               <option value="">64MP</option>
               <option value="">50MP</option>
               <option value="">48 MP</option>
               <option value="">32MP</option>
               <option value="">16MP</option>
               <option value="">8MP</option>
               <option value="">5MP</option>
               <option value="">2MP</option>
               <option value="">Below 2MP</option>
            </>
            }
          />

        <MyInput 
            name="BATTERY CAPACITY"
            lableName="tags" 
            placeholder = "Write Battery Capacity Here [eg - 5000 mAh]"
         />

        <Select 
            name="FAST CHARGING" 
            option={
            <>
               <option value="">Select Fast Caharging Support</option>
               <option value="">Yes</option>
               <option value="">No</option>
            </>
            }
          />

        <MyInput 
            name="OUTPUT"
            lableName="tags" 
            placeholder = "Write Battery Output Here [eg - 33 Watt]"
         />

         <MyInput 
            name="SCREEN SIZE"
            lableName="tags" 
            placeholder = "Write Screen Size here [Eg - 6 inches]"
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

        <MyInput 
            name="DISPLAY RESOLUTION"
            lableName="tags" 
            placeholder = "Write Screen Resolution here [eg - 2560x1440 pixel]"
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
            name="HYBRID SIM SLOT" 
            option={
            <>
               <option value="">Select Hybrid Sim Slot</option>
               <option value="">Yes</option>
               <option value="">No</option>
            </>
            }
          />

        <Select 
            name="DEDICATED MEMORY CARD SLOT" 
            option={
            <>
               <option value="">Select Dedicated Memory Card Slot</option>
               <option value="">Yes</option>
               <option value="">No</option>
            </>
            }
          />

        <Select 
            name="MOBILE NETWORK" 
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

        <Select 
            name="SIM 1" 
            option={
            <>
               <option value="">Select Sim 1 Supported Network</option>
               <option value="">5G</option>
               <option value="">4G VOLTE</option>
               <option value="">4G</option>
               <option value="">3G</option>
               <option value="">2G</option>
            </>
            }
          />

        <Select 
            name="SIM 2" 
            option={
            <>
               <option value="">Select Sim 2 Supported Network</option>
               <option value="">N/A (No Second Sim Slot)</option>
               <option value="">5G</option>
               <option value="">4G VOLTE</option>
               <option value="">4G</option>
               <option value="">3G</option>
               <option value="">2G</option>
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
        name = "OTG Support"
        lableName = "otg"
        />

        <Checkbox 
        name = "Splash Proof"
        lableName = "splash"
        />

        <Checkbox 
        name = "Screen Flash"
        lableName = "flash"
        />

        <Checkbox 
        name = "Chroma Boost"
        lableName = "chroma"
        />

        <Checkbox 
        name = "Slow Mo Video Recording"
        lableName = "slowmo"
        />

        <Checkbox 
        name = "Super Nightscape"
        lableName = "nightscape"
        />

        <Checkbox 
        name = "Quad Camera"
        lableName = "quad"
        />

        <Checkbox 
        name = "Fast Charging"
        lableName = "charging"
        />
        
        <Checkbox 
        name = "Loud Sound"
        lableName = "sound"
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

export default Mobile;