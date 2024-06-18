import { React, useRef, useState } from "react";
import { MyInput, Select, Textarea, Checkbox, Radio } from "../../Components/seller/formComp";
import { Link } from "react-router-dom";

const LoginPopup = (props) => {

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
                    <span>New To Localscart? <Link to="/">Sign Up Now</Link></span>
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


    const setForgotTag = () => {

        const newVal = <ForgotPassword />;
        setTag(newVal);
        const newHeadVal = "Forgot Password"
        setheadVal(newHeadVal)
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
        
        <div className={`myLogPopup ${props.openLogin ? "myPopup-active":""}`} 
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

export default LoginPopup;


