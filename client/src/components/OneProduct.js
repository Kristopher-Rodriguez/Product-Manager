import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const OneProduct = (props) => {
  const { id } = useParams();
  const [oneProduct, setOneProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setOneProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <h2>{oneProduct.title}</h2>
      <p>Price: ${oneProduct.price}</p>
      <p>Description: {oneProduct.description}</p>
      <div>
        <Link to={"/"}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default OneProduct;
