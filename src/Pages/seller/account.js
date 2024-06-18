import React from "react";
import {MyInput, IconInput, Select, Textarea, Checkbox, Radio} from "../../Components/seller/formComp";

const MyAccount = () => {

    return (
        <form className="formContainer">

            <h1>SELLER STORE DETAILS</h1>

            <IconInput
              type = "text"
              name = "STORE NAME"
              lableName = "storeName"              
              attDis = "disabled"
              faIconClass = "fa fa-user icon"
              value = "National Electronics"
            />

            <IconInput
              type = "text"
              name = "STORE ADDRESS"
              lableName = "storeadd"              
              attDis = "disabled"
              faIconClass = "fa-solid fa-address-book"
              value = "Flat, House no., Building, Company, Apartment"
              moreInput = {
                <>
                  <div class="accInputCont accMb acc1mb">
                    <i class="fa-solid fa-address-book"></i>
                    <input type="text" name="storeadd" value="Area, Colony, Street, Sector, Village" disabled/>
                  </div>
                
                  <div class="accInputCont accMb">
                    <i class="fa-solid fa-address-book"></i>
                    <input type="text" name="storeadd" value="Near Location" disabled/>
                  </div>

                  <div class="accInputCont">
                    <i class="fa-solid fa-address-book"></i>
                    <input type="text" name="storeadd" value="City, State" disabled/>
                  </div>
                
                </>
              }
            />

            <IconInput
              type = "text"
              name = "STORE CONTACT DETAILS"
              lableName = "storeadd"              
              attDis = "disabled"
              faIconClass = "fa-solid fa-address-book"
              value = "Email"
              moreInput = {
                <>
                  <div class="accInputCont acc1mb">
                    <i class="fa-solid fa-address-book"></i>
                    <input type="text" name="storeadd" value="9999999999" disabled/>
                  </div>
                
                </>
              }
            />

            <h2>SELLER BANK DETAILS</h2>

            <IconInput
              type = "text"
              name = "BANK ACCOUNT DETAILS"
              lableName = "storeadd"              
              attDis = "disabled"
              faIconClass = "fa-solid fa-address-book"
              value = "Bank User Name"
              moreInput = {
                <>
                  <div class="accInputCont accMb acc1mb">
                    <i class="fa-solid fa-address-book"></i>
                    <input type="text" name="storeadd" value="Bank Name" disabled/>
                  </div>
                
                  <div class="accInputCont accMb">
                    <i class="fa-solid fa-address-book"></i>
                    <input type="text" name="storeadd" value="Account Number" disabled/>
                  </div>

                  <div class="accInputCont">
                    <i class="fa-solid fa-address-book"></i>
                    <input type="text" name="storeadd" value="IFSC Code" disabled/>
                  </div>
                
                </>
              }
            />

            <h2>SELLER CONTACT DETAILS</h2>

            <IconInput
              type = "text"
              name = "SELLER NAME"
              lableName = "contact"              
              attDis = "disabled"
              faIconClass = "fa fa-user icon"
              value = "Seller Name"
            />

            <IconInput
              type = "text"
              name = "CONTACT EMAIL"
              lableName = "contact"              
              attDis = "disabled"
              faIconClass = "fa fa-user icon"
              value = "demo@gmail.com"
            />

            <IconInput
              type = "text"
              name = "CONTACT MOBILE NUMBER"
              lableName = "contact"              
              attDis = "disabled"
              faIconClass = "fa fa-user icon"
              value = "9999999999"
            />

            <IconInput
              type = "text"
              name = "ALTERNATE MOBILE NUMBER"
              lableName = "contact"              
              attDis = "disabled"
              faIconClass = "fa fa-user icon"
              value = "9999999999"
            />

            <h2>CHANGE PASSWORD</h2>

            <IconInput
              type = "password"
              name = "OLD PASSWORD"
              lableName = "password"
              faIconClass = "fa fa-user icon"
              placeholder = "Enter your Old Password"
            />

             <IconInput
              type = "password"
              name = "NEW PASSWORD"
              lableName = "password"
              faIconClass = "fa fa-user icon"
              placeholder = "Enter your New Password"
            />

            <IconInput
              type = "password"
              name = "REPEAT NEW PASSWORD"
              lableName = "password"
              faIconClass = "fa fa-user icon"
              placeholder = "Enter your New Password Again"
            />

            <MyInput 
            type = "submit"
            value = "Save"
            class="submitBtn"
            />

        </form>
    );

}


export default MyAccount;