import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./auth/register";
// import { ApolloClient, InMemoryCache } from "@apollo/client";
import Login from "./auth/login";
import ContactList from "./auth/constactList";
import AuthenticateRoutes from "./AuthRoute";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route element={<AuthenticateRoutes />}>
            <Route path="/ContactList" element={<ContactList/> } /> 
          </Route>
        
          {/* <Route path="/ContactList" element={<ContactList/> } /> */}
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
