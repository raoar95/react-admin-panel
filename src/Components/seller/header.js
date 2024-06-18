import React from "react";

const  Header = (props) => {
 
    return (
        <>
          <header className="homeHeader">
            <div className="headerlogoSec">LOGO HERE</div>
            <div className="headerBtnSec">
                <div className="btn headLogin" onClick={()=>{
                props.handleOpenPopup(true)
                }}>SELLER LOGIN</div>
                <div className="btn headReg" onClick={()=>{
                props.handleOpenPopup(true)
                }}>GET STARTED<i class="fa-solid fa-arrow-right"></i></div>
            </div>
          </header>
        </>
    )
}

export default Header;