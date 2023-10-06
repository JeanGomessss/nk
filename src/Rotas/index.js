import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Principal from '../Principal';
import Login from '../Login';

export default function Rotas() {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Principal />}/>
            <Route path="/Login" element={<Login />}/>
          </Routes>
        </BrowserRouter>
    )
}