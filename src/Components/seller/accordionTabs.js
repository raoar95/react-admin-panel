import React from "react";
import css from "../../CSS/sellerApp.css";

const AccordionTabs = (props) => {

    return (

    <> 

    <input type="radio" className={props.name} id={props.id} name={props.name} defaultChecked={props.attrCheck} />
    <label for={props.id} className={props.class}>{props.lableName}</label>
    <div className={props.tabContentClass}>{props.tabContent}</div>

    </>
    
    )

}

export default AccordionTabs;

// NOTE: tabContentClass will be tabContent.