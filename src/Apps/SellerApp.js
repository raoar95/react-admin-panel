import React from "react";
import AdminPanel from "../Pages/seller/admin-panel";
import Home from "../Pages/seller/home"
import LoginPopup from "../Pages/seller/login";
import RegPopup from "../Pages/seller/registration";
import AddProduct from "../Pages/seller/add-product";
import Television from "../Pages/seller/specification/Electronincs/television";
import Table from "../Components/seller/tableComp";
import { BrowserRouter } from 'react-router-dom';

function SellerApp() {
  return (
   <>
    <BrowserRouter>
    {/* <RegPopup /> */}
    <AdminPanel />
    </BrowserRouter>
   </>
   );
 }

export default SellerApp;