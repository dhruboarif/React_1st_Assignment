import React from "react";
import "./Read.css";
import { ProductContext } from "../ProductContext/ProductContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Read = () => {
  const [users, setUser] = useContext(ProductContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  return (
    <div className="read">
      <h1>ID: {user[0].id}</h1>
      <h1>ProductName: {user[0].name}</h1>
      <h1>Description: {user[0].desc}</h1>
      <h1>Price: {user[0].price} /= </h1>
      <h1>Product category: {user[0].cat} </h1>
      <Link to="/">
        <Button variant="info">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default Read;
