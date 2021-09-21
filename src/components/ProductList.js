// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";

const ProductList = () => {
  const productList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <>
      <SearchBar />
      <div className="listWrapper">{productList}</div>
    </>
  );
};

export default ProductList;
