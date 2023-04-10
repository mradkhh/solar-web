import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {publicRoutes} from "./router";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          {
              publicRoutes.map(route =>
                  <Route key={route.path} path={route.path} element={route.component}/>
              )
          }
          {/*<Route path='/*' element={<NotFound/>}/>*/}
        </Routes>
      </BrowserRouter>
  )
}

export default App
