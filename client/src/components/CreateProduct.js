import React, { useState } from "react";
import axios from "axios";

const CreateProduct = (props) => {
  const { productList, setProductList } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {

    e.preventDefault();
    
    axios
      .post("http://localhost:8000/api/product", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProductList([...productList, res.data]);
        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Product Manager</h1>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Title</label>
          <br />
          <input
            value={title}
            name="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input
            value={price}
            name="price"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </p>
        <p>
          <label>Description</label>
          <br />
          <input
            value={description}
            name="description"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
export default CreateProduct;
