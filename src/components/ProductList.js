// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import React, {useState} from "react";

const ProductList = ({setCookie}) => {
  const [query, setQuery] = useState ("");
  const productList = products.filter((product) => product.name.toLocaleLowerCase.includes(query.toLocaleLowerCase())).map((product)=> <ProductItem product = {product} key={product.id} setCookie = {setCookie}/>);


  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="listWrapper">{productList}</div>
    </>
  );
  };

export default ProductList;
