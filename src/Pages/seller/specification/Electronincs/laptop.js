import React from "react";
import {MyInput, Select, Textarea, Checkbox, Radio} from "../../../../Components/seller/FormComponents/formComp";

const Laptop = () => {
    return(
    <form className="formContainer">

        <h1>PRODUCT SPECIFICATION</h1>

        <Select 
            name="LAPTOP TYPES" 
            option={
            <>
              <option value="">Select Laptop Type</option>
              <option value="">Gaming Laptop</option>
              <option value="">Business Laptop</option>
              <option value="">Budget Laptop</option>
              <option value="">Thin and Light Laptop</option>
              <option value="">2 in 1 Laptop</option>
              <option value="">Notebook</option>
              <option value="">Convertible</option>
              <option value="">Ultrabook</option>
              <option value="">Chromebook</option>
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
            name="COLOR"
            lableName="tags" 
            placeholder = "Write Product Color Here [Eg - black, grey, etc]"
         />

        
        <MyInput 
            name="MODEL NO"
            lableName="tags" 
            placeholder = "Write Product Model No"
         />

        <MyInput 
            name="LAPTOP WEIGHT"
            lableName="tags" 
            placeholder = "Write Laptop Weight Here [eg - 2.5 kg]"
         />

        <MyInput 
            name="SCREEN SIZE"
            lableName="tags" 
            placeholder = "Write Screen Size here [eg - 14 inches]"
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

        <MyInput 
            name="SCREEN RESOLUTION"
            lableName="tags" 
            placeholder = "Write Screen Resolution here [eg - 2560x1440 pixel]"
         />

        <Select 
            name="OPTICAL DISK DRIVE" 
            option={
            <>
               <option value="">Select Optical Disk Drive Availability</option>
               <option value="">Yes</option>
               <option value="">No</option>
            </>
            }
          />

        <Select 
            name="PROCESSOR BRAND" 
            option={
            <>
               <option value="">Select Processor Brand</option>
               <option value="">Intel</option>
               <option value="">AMD</option>
               <option value="">MediaTek</option>
               <option value="">Microsoft</option>
               <option value="">Apple</option>
               <option value="">Qualcomm</option>
            </>
            }
          />

        <Select 
            name="PROCESSOR VERSION" 
            option={
            <>
               <option value="">Select Processor Version</option>
               <option value="">Intel Core i9</option>
               <option value="">Intel Core i7</option>
               <option value="">Intel Core i5</option>
               <option value="">Intel Core i3</option>
               <option value="">Intel Pentium Series</option>
               <option value="">Intel Celeron Series</option>
               <option value="">AMD Ryzen Series</option>
               <option value="">AMD Athlon Series</option>
               <option value="">AMD A Series</option>
               <option value="">AMD R Series</option>
               <option value="">ARM 610 Series</option>
               <option value="">Apple M1 Series</option>
            </>
            }
          />

         <MyInput 
            name="PROCESSOR NAME"
            lableName="tags" 
            placeholder = "Write Full Processor Name Here [Eg - Intel Core i9-11900K, AMD Ryzen™ 9 5950X, etc]"
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
            name="PROCESSOR GENERATION" 
            option={
            <>
               <option value="">Select Processor Generation</option>
               <option value="">11th Generation</option>
               <option value="">10th Generation</option>
               <option value="">9th Generation</option>
               <option value="">8th Generation</option>
               <option value="">7th Generation</option>
               <option value="">6th Generation</option>
               <option value="">5th Generation</option>
               <option value="">4th Generation</option>
               <option value="">3rd Generation</option>
               <option value="">2nd Generation</option>
               <option value="">1st Generation</option>
            </>
            }
          />

        <Select 
            name="GRAPHICS CARD" 
            option={
            <>
               <option value="">Select Graphic Card Name</option>
               <option value="">N/A (No Graphic Card)</option>
               <option value="">Brand Integrated</option>
               <option value="">NVIDIA GeForce RTX</option>
               <option value="">NVIDIA Geforce</option>
               <option value="">NVIDIA GeForce GTX</option>
               <option value="">NVIDIA Quadro</option>
               <option value="">AMD Radeon</option>
            </>
            }
          />

        <Select 
            name="GRAPHICS CARD SIZE" 
            option={
            <>
              <option value="">Select Graphic Card Size</option>
              <option value="">N/A (No Graphic Card)</option>
              <option value="">Brand Integrated</option>
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
              <option value="">256MB</option>
              <option value="">Less than 256MB</option>
            </>
            }
          />

        <Select 
            name="GRAPHICS CARD TYPE" 
            option={
            <>
               <option value="">Select Graphic Card Type</option>
               <option value="">N/A (No Graphic Card)</option>
               <option value="">GDDR6</option>
               <option value="">GDDR5X</option>
               <option value="">GDDR5</option>
               <option value="">DDR5</option>
               <option value="">DDR4</option>
               <option value="">GDDR3</option>
               <option value="">DDR3</option>
            </>
            }
          />

        <Select 
            name="OPERATING SYSTEM" 
            option={
            <>
               <option value="">Select Operating System</option>
               <option value="">Windows 11</option>
               <option value="">Windows 10</option>
               <option value="">Windows 8.1</option>
               <option value="">Windows 8</option>
               <option value="">Windows 7</option>
               <option value="">Mac OS</option>
               <option value="">Linux / Ubuntu</option>
               <option value="">DOS</option>
               <option value="">Chrome OS</option>        
            </>
            }
          />

        <Select 
            name="RAM" 
            option={
            <>
               <option value="">Select RAM Size</option>
               <option value="">Above 32 GB</option>
               <option value="">32 GB</option>
               <option value="">24 GB</option>
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
            name="RAM TYPE" 
            option={
            <>
               <option value="">Select RAM Type</option>
               <option value="">DDR4</option>
               <option value="">LPDDR4X</option>
               <option value="">DDR3</option>
               <option value="">DDR3L</option>
               <option value="">LPDDR3</option>
               <option value="">SDR</option>   
            </>
            }
          />


        <div className="checkbox">

        <label className="headLable">AVAILABLE STORAGE TYPE</label><br />

        <Checkbox 
        name = "HDD"
        lableName = "hdd"
        />

         <Checkbox 
        name = "SSD"
        lableName = "ssd"
        />

        </div>

        <Select 
            name="HHD SIZE" 
            option={
            <>
               <option value="">Select HHD Size</option>
               <option value="">Above 2 TB</option>
               <option value="">2 TB</option>
               <option value="">1 TB</option>
               <option value="">512 GB</option>
               <option value="">400 GB</option>
               <option value="">320 GB</option>
               <option value="">300 GB</option>
               <option value="">256 GB</option>
               <option value="">200 GB</option>
               <option value="">128 GB</option>
               <option value="">Less than 128 GB</option>
            </>
            }
          />

        <Select 
            name="SSD SIZE" 
            option={
            <>
               <option value="">Select SSD Size</option>
               <option value="">N/A (No SSD)</option>
               <option value="">Above 2 TB</option>
               <option value="">2 TB</option>
               <option value="">1 TB</option>
               <option value="">512 GB</option>
               <option value="">400 GB</option>
               <option value="">320 GB</option>
               <option value="">300 GB</option>
               <option value="">256 GB</option>
               <option value="">200 GB</option>
               <option value="">128 GB</option>
               <option value="">Less than 128 GB</option>
            </>
            }
          />
        

        <div className="checkbox">

        <label className="headLable">FEATURES</label><br />

        <Checkbox 
        name = "Backlit Keyboard"
        lableName = "backlight"
        />

         <Checkbox 
        name = "HD Display"
        lableName = "hd"
        />

         <Checkbox 
        name = "MS Office"
        lableName = "msoffice"
        />

         <Checkbox 
        name = "Built-in Microphone"
        lableName = "microphone"
        />

         <Checkbox 
        name = "Built-in Speakers"
        lableName = "speaker"
        />

         <Checkbox 
        name = "Micro SD card Slot"
        lableName = "sdcard"
        />

         <Checkbox 
        name = "SSD"
        lableName = "ssd1"
        />

         <Checkbox 
        name = "Light Weight"
        lableName = "lightweight"
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

export default Laptop;