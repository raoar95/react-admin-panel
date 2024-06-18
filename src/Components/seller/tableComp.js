import React from "react";
import css from "../../CSS/sellerApp.css";


const Table = (props) => {

    return (
   
        <table className={props.class}> 

          <thead className={props.headClass}>

            <tr className={props.headRowClass}>
               {props.headData}
            </tr>

          </thead>

          <tbody className={props.bodyClass}>

            {props.bodyRows}

          </tbody>

        </table>

    );

}



export default Table;