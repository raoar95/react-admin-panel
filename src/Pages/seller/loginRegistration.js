import { React, useRef, useState } from "react";
import { MyInput, Select, Textarea, Checkbox, Radio } from "../../Components/seller/formComp";
import { Link } from "react-router-dom";
import Header from "../../Components/seller/header";

const LogReg = (props) => {

    // /**{
    //    * @param {*
    //    * closePopup : boolean
    //    * openLogin : boolean
    //    * }props
    // }*/

    const Login = () => {

        return (

            <>

                <MyInput
                    type="email"
                    lableName="email"
                    labelClass="loglable"
                    name="Email ID"
                    placeholder="Enter Your Email"
                />

                <MyInput
                    type="Password"
                    lableName="Password"
                    labelClass="loglable"
                    class="passInput"
                    name="Password"
                    placeholder="Enter Your Password"
                />

                {/* <i class="far fa-eye" id="togglePassword"></i> */}
                <div class="login-checkbox">
                    <input onChange={showPassword} type="checkbox" id="log-input" name="checkbox" />
                    <label for="log-input" class="login-lable">Show Password</label>
                    <span><Link to="/" onClick={setForgotTag}>Forgot Password?</Link></span>
                </div>

                <MyInput
                    type="Submit"
                    value="LOGIN"
                    class="logregSubmit"
                />

                <div class="bottom-text">
                    <span>New To Localscart? <Link to="/" onClick={setRegTag}>Sign Up Now</Link></span>
                </div>

            </>

        );

    }


    const ForgotPassword = () => {

        return (

            <>

                <div className="inputNote">
                    <p>Note: Password Reset link will be send to your registered email address.</p>
                </div>

                <MyInput
                    type="email"
                    lableName="email"
                    labelClass="loglable"
                    name="Email Address"
                    placeholder="Enter Your Email"
                />

                <MyInput
                    type="Submit"
                    value="SEND ME LINK"
                    class="logregSubmit"
                />

                <div class="bottom-text">
                    <span>Back To <Link to="/" onClick={setLogTag}>Login</Link></span>
                </div>

            </>

        )

    }


    const Registration = () => {

        return (

            <>

                <MyInput
                    type="text"
                    lableName="name"
                    labelClass="loglable"
                    name="First Name"
                    placeholder="Enter Your First Name"
                    attReq="required"
                />

                <MyInput
                    type="text"
                    lableName="name"
                    labelClass="loglable"
                    name="Last Name"
                    placeholder="Enter Your Last Name"
                    attReq="required"
                />

                <MyInput
                    type="email"
                    lableName="email"
                    labelClass="loglable"
                    name="Email ID"
                    placeholder="Enter Your Email"
                />

                <MyInput
                    type="password"
                    lableName="Password"
                    labelClass="loglable"
                    name="Password"
                    placeholder="Enter Your Password"
                />

                <MyInput
                    type="password"
                    lableName="Password"
                    labelClass="loglable"
                    name="Confirm Password"
                    placeholder="Re Enter Password"
                />

                <MyInput
                    type="submit"
                    value="NEXT ➧"
                    class="logregSubmit"
                    clickFunc={setStoretTag}
                />

                <div class="bottom-text">
                    <span>Already have an Account? <Link to="/" onClick={setLogTag}>Sign In</Link></span>
                </div>

            </>

        );

    }

    const StoreSellerRegDetails = () => {

        return (

            <>

                <div className="headItem">STORE DETAILS:</div>

                <MyInput
                    type="text"
                    lableName="name"
                    labelClass="loglable"
                    name="Store Name"
                    placeholder="Enter Your Store Name"
                />

                <lable className="loglable headLable">STORE ADDRESS:</lable>

                <MyInput
                    type="text"
                    lableName="address"
                    labelClass="loglable"
                    name="Address Line 1"
                    placeholder="Flat, House no., Building, Company, Apartment"
                />

                <MyInput
                    type="text"
                    lableName="address"
                    labelClass="loglable"
                    name="Address Line 2"
                    placeholder="Area, Colony, Street, Sector, Village"
                />

                <MyInput
                    type="text"
                    lableName="address"
                    labelClass="loglable"
                    name="Landmark"
                    placeholder="Near Jhanda Chock, Near Old Court, etc"
                />

                <MyInput
                    type="number"
                    lableName="pincode"
                    labelClass="loglable"
                    name="Pincode"
                    placeholder="831003"
                />

                <Select
                    name="Select City"
                    option={
                        <>
                            <option value="">Select your City</option>
                            <option value="">Jamshedpur</option>
                        </>
                    }
                />

                <Select
                    name="Select State"
                    option={
                        <>
                            <option value="">Select your State</option>
                            <option value="">Jharkhand</option>
                        </>
                    }
                />

                <Select
                    name="Select Country"
                    option={
                        <>
                            <option value="">India</option>
                            {/* <option value="">Indasfasfia</option> */}
                        </>
                    }
                />

                <lable className="loglable headLable">STORE CONTACT DETAILS:</lable>

                <MyInput
                    type="email"
                    lableName="email"
                    labelClass="loglable"
                    name="STORE Email ID"
                    placeholder="Enter Store Email ID"
                />

                <MyInput
                    type="number"
                    lableName="pincode"
                    labelClass="loglable"
                    name="Store Mobile Number"
                    placeholder="Enter Store Mobile Number"
                />

                <div className="headItem">SELLER DETAILS:</div>

                <MyInput
                    type="text"
                    lableName="name"
                    labelClass="loglable"
                    name="Seller Name"
                    placeholder="Enter Your Seller Name"
                />

                <lable className="loglable headLable">SELLER CONTACT DETAILS:</lable>

                <MyInput
                    type="email"
                    lableName="email"
                    labelClass="loglable"
                    name="Seller Email ID"
                    placeholder="Enter Seller Email ID"
                />

                <MyInput
                    type="number"
                    lableName="pincode"
                    labelClass="loglable"
                    name="Seller Mobile Number"
                    placeholder="Enter Seller Mobile Number"
                />

                <div className="headItem">SELLER PAYMENT DETAILS:</div>

                <MyInput
                    type="text"
                    lableName="bank"
                    labelClass="loglable"
                    name="Bank User Name"
                    placeholder="Enter Your Bank User Name"
                />

                <MyInput
                    type="text"
                    lableName="bank"
                    labelClass="loglable"
                    name="Bank Name"
                    placeholder="Enter Your Bank Name"
                />

                <MyInput
                    type="number"
                    lableName="bank"
                    labelClass="loglable"
                    name="Bank Account Number"
                    placeholder="Enter Your Bank Account Name"
                />

                <MyInput
                    type="text"
                    lableName="bank"
                    labelClass="loglable"
                    name="Bank IFSC Code"
                    placeholder="Enter Your Bank IFSC Code"
                />

                <MyInput
                    type="Submit"
                    value="SUBMIT"
                    class="logregSubmit"
                />

            </>

        )

    }



    //  Login Panel Content Change Js

    const [tag, setTag] = useState(<Login />);
    const [myClass, setMyClass] = useState("logregPanel InputComp");
    const [headVal, setheadVal] = useState("Login To Localscart Seller");

    const setLogTag = () => {

        const newVal = <Login />;
        setTag(newVal);
        const newHeadVal = "Login To Localscart Seller"
        setheadVal(newHeadVal)
        document.body.style.overflow = 'hidden';
        const newClass = "logregPanel InputComp"
        setMyClass(newClass);
    }

    const setRegTag = () => {

        const newVal = <Registration />;
        setTag(newVal);
        const newHeadVal = "Sign Up For Localscart Seller"
        setheadVal(newHeadVal)
        document.body.style.overflow = 'hidden';
        const newClass = "logregPanel InputComp regPan"
        setMyClass(newClass);

    }

    const setForgotTag = () => {

        const newVal = <ForgotPassword />;
        setTag(newVal);
        const newHeadVal = "Forgot Password"
        setheadVal(newHeadVal)
        document.body.style.overflow = 'hidden';

    }

    const setStoretTag = () => {

        const newVal = <StoreSellerRegDetails />;
        setTag(newVal);
        const newHeadVal = "Store, Seller & Payment Details"
        setheadVal(newHeadVal)
        const newClass = "logregPanel InputComp StoreReg"
        setMyClass(newClass);
        document.body.style.overflow = 'hidden';
    }

    //  Popup Body Overflow Hidden (For Reference Hook)

    // const myPopup = useRef(null);


    // When the user clicks anywhere outside of the modal, close it

    // const closePopup = () => {

    //     myPopup.current.style.display = "none";
    //     document.body.removeAttribute("style");

    // }


    // Input Password Show

    const showPassword = () => {

        let passInput = document.querySelector(".passInput");

        if (passInput.type === "password") {
            passInput.type = "text";
        } else {
            passInput.type = "password";
        }

    }

    // <Header logClick={setLogTag} regClick={setRegTag} />

    return (
        
        <div className={`myPopup ${props.openLogin ? "myPopup-active":""}`} 
        // ref={myPopup}
        > 
            <span className="closePopupBtn" onClick={props.closePopup}>×</span>
            <form method="post" class={myClass} action="/">
                <span className="closePopupBtn resPopupBtn" onClick={props.closePopup}>×</span>
                <i class="fa fa-unlock-alt"></i>
                <h1>{headVal}</h1>
                {tag}
                {/* <Registration /> */}
            </form>
        </div>
    );
}

export default LogReg;


