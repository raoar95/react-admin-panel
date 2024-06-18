import React from "react";
import css from "../../CSS/sellerApp.css";


// Input with Label Component

const MyInput = (props) => {
    return (

          <>
            <lable for={props.lableName} className={props.labelClass}>{props.name}</lable>
            <input className={props.class} type={props.type} placeholder={props.placeholder} autoComplete={props.autocomplete} name={props.lableName} onClick={props.clickFunc} value={props.value} required={props.attReq} disabled={props.attDis} readOnly={props.attRead} />
          </>

    );
}

// Input with Label & Icon Component

const IconInput = (props) => {
    return (
            <div className="InputComp IconInputComp"> 
              <lable for={props.lableName} className={props.labelClass}>{props.name}</lable>
                <div className="accInputCont">
                  <i class={props.faIconClass}></i>
                  <input className={props.class} type={props.type} placeholder={props.placeholder} autoComplete={props.autocomplete} name={props.lableName} value={props.value} required={props.attReq} disabled={props.attDis} readOnly={props.attRead} />
                </div>
                {props.moreInput}
            </div>
       );
 }


// Select Component

const Select = (props) => {
    return (

        <>
           <lable for={props.lableName} className={props.labelClass}>{props.name}</lable>
             <select id="category" name={props.lableName} required={props.attReq} disabled={props.attDis} readOnly={props.attRead}>
             {props.option} 
             </select>
        </>

    );
}


// Textarea Component

const Textarea = (props) => {
    return (

          <>
            <lable for={props.lableName} className={props.labelClass}>{props.name}</lable>
            <textarea name={props.lableName} placeholder={props.placeholder} row="10" required={props.attReq} disabled={props.attDis} readOnly={props.attRead}></textarea>
          </>

    );
}


// Checkbox Component (Include div as per need)

const Checkbox = (props) => {
    return (
        <>
          <input type="checkbox" id={props.lableName} class="myCheckbox" required={props.attReq} disabled={props.attDis} readOnly={props.attRead} />
          <label for={props.lableName} className={props.labelClass}>{props.name}</label><br />
       </> 
    );
}


// Radio Component (Include div as per need)

const Radio = (props) => {
    return (
        <>
          <input type="radio" id={props.lableName} name={props.radioName} className={props.class} required={props.attReq} disabled={props.attDis} readOnly={props.attRead} defaultChecked={props.attChecked} />
          <label for={props.lableName} className={props.labelClass} onClick={props.clickFunc}>{props.name}</label><br />
       </> 
    );
}


export {MyInput, IconInput, Select, Textarea, Checkbox, Radio};


// Note: Use InputComp class in input container.