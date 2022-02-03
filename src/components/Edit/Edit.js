import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext/ProductContext";
import "./Edit.css";
import { useState } from "react";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const { id } = useParams();
  const product = products.filter((product) => product.id == id);

  const [name, setName] = useState(product[0].name);
  const [desc, setDesc] = useState(product[0].desc);
  const [price, setPrice] = useState(product[0].price);
  const [cat, setCat] = useState(product[0].cat);
  

  const editName = (e) => {
    setName(e.target.value);
    const edited_name = name;
    product[0].name = edited_name;
  };

  const editDesc = (e) => {
    setDesc(e.target.value);
    const edited_description = desc;
    product[0].position = edited_description;
  };

  const editPrice = (e) => {
    setPrice(e.target.value);
    const edited_price = price;
    product[0].salary = edited_price;
  };

  const editCat = (e) => {
    e.preventDefault();
    setCat([...products]);
  };

  return (
    <div className="edit">
      <Form>
        <Form.Group>
          <Form.Label>
            <h1>ID NO: {product[0].id}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={editName}
            placeholder={product[0].name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="Description"
            // value={position}
            onChange={editDesc}
            placeholder={product[0].desc}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            // value={salary}
            onChange={editPrice}
            placeholder={product[0].salary}
          />
        </Form.Group>
        <Link to="/">
          <Button onSubmit={()=>editCat} variant="primary" type="submit">
            Edit Product
          </Button>
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Edit;
