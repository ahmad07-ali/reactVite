import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./veifyComponents/Login";
import Signup from "./veifyComponents/Signup";
import Edit from "./newComponents/Edit";
import Navbar from "./Components/Pages/Navbar";
import Main from "./Components/ParentComponent/Main";
import Page2 from "./Components/Pages/Page2";
import Page5 from "./Components/Pages/Page5";
import Page6 from "./Components/Pages/Page6";
import Footer from "./Components/ParentComponent/Footer";
import ProductCrud from "./newComponents/ProductCrud";
import AddProduct from "./newComponents/AddProduct";
import CustomerForm from "./veifyComponents/CustomerForm";
import Cursor from "./newComponents/Cursor";
import ScrollUp from "./newComponents/ScrollUp";
import AutoScroll from "./newComponents/AutoScroll";



const App = () => {
  return (
    <BrowserRouter>
      <AutoScroll />
      <Navbar />
      <ScrollUp />
      <Cursor />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/submit" element={<Page6 />} />
        <Route path="/cart" element={<Page2 />} />
        <Route path="/crud" element={<ProductCrud />} />
        <Route path="/crud/addproduct" element={<AddProduct />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/orderform" element={<CustomerForm />} />
        <Route path="/userlogin" element={<Login />} />
        <Route path="/usersignup" element={<Signup />} />
        <Route path="/addProduct" element={< AddProduct />} />

      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
};

export default App;
