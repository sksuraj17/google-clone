import React from 'react';
import { Routes, Route } from "react-router-dom";

const CustomRoutes = () => {
  return (
    <Routes>
        <Route path="/" element= {<Home />} />
        <Route path ="/search" element= {<Results />} /> 
        <Route path ="/image" element= {<Results />} /> 
        <Route path ="/news" element= {<Results />} /> 
        <Route path ="/videos" element= {<Results />} /> 

    </Routes>
  )
}

export default CustomRoutes
