
import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css"
import Detail from "./components/Detail";

import React, {useState} from "react";
import products from "./products";


function App() {
const [cookie, setCookie] = useState (products[0]);

  return (
    
    <div>
      <Home />
      <ProductList setCookie={setCookie} />
      <Detail cookie ={cookie}/>
    </div>
  );
}

export default App;
