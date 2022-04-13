import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const UpdateProduct = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/product/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Update Product</h1>
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
        <button type="submit">Update</button>
      </form>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default UpdateProduct;
