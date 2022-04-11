import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = (props) => {
  const { productList, setProductList } = props;
  console.log(productList);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>All Products:</h2>
      {productList.map((product, index) => (
        <div key={index}>
          <Link to={`/product/${product._id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
