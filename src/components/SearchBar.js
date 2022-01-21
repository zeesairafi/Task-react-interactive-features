import React from "react";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import products from "../products";
import react, {useState} from "react";
import ProductList from "./ProductList";
// Styling
const ProductList = () => {
  const [query, setQuery] = useState("");
  const productList = products.filter((product) => product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())).map((product) => <ProductItem product={product} key={product.id}/>);




//const SearchBar = (props) => {
  //return (
    //<input className="searchBar"
      
    //onChange={(event) => console.log(event.target.value)}
     
    return(<>
      <SearchBar  setQuery={setQuery}/>
      <div className="listWrapper">{productList}</div>
      
    </>
  );
};

export default SearchBar;
