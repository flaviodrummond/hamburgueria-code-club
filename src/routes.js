import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Container/Home'
import Request from "./Container/Request";

function MyRoutes() {
    return(
        <Router>
         <Routes>   
                <Route path='/' element={<Home/>}/>

                <Route path='/pedidos' element={<Request/>}/>
        </Routes>

        </Router>
    )
}

export default MyRoutes