import React from "react";
import {MyInput, Select, Textarea, Checkbox, Radio} from "../../../../Components/seller/FormComponents/formComp";

const MemoryCard = () => {
    return(
    <form className="formContainer">

        <h1>PRODUCT SPECIFICATION</h1>

        <MyInput 
            name="COLOR"
            lableName="color" 
            placeholder = "Write Product Color Here [Eg - black, grey, etc]"
         />

        <Select 
            name="MEMORY CARD SIZE" 
            option={
            <>
              <option value="">Select Memory Card Size</option>
              <option value="">Above 1 TB</option>
              <option value="">1 TB</option>
              <option value="">512 GB</option>
              <option value="">400 GB</option>
              <option value="">256 GB</option>
              <option value="">200 GB</option>
              <option value="">128 GB</option>
              <option value="">64 GB</option>
              <option value="">32 GB</option>
              <option value="">16 GB</option>
              <option value="">8 GB</option>
              <option value="">4 GB</option>
              <option value="">2 GB</option>
              <option value="">1 GB</option>
              <option value="">512 MB</option>
              <option value="">Less than 512 MB</option>
            </>
            }
          />

        <MyInput 
            name="CLASS"
            lableName="class" 
            placeholder = "Write Memory Card Class Here [eg - Class 10]"
         />

        <MyInput 
            name="WRITING SPEED"
            lableName="speed" 
            placeholder = "Write Memory Card Writing Speed Here [eg - 100 MB/s]"
         />

        <Select 
            name="SELECT ADAPTER AVAIBILITY" 
            option={
            <>
              <option value="">Select Adapter Avaibility</option>
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

export default MemoryCard;