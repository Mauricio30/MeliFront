import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchBox from "./containers/SearchBox/index";

export const Router = ({props}) => {
    console.log('Id')
return (
    <Routes {...props}>
      <Route exact path="/">
        <Route path="items" element={<h1>Hola Inicio</h1>} />
        <Route path="items/:id" element={<h1>Hola description</h1>} />
      </Route>
      <Route path="*" exact element={<h1>Hola non</h1>} />
    </Routes>
)};
