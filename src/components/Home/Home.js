import React, { useContext } from "react";
import "./Home.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext/ProductContext";

const Home = () => {
  const [products, setProduct] = useContext(ProductContext);

  return (
    <div>
      <Link to="/create">
        <Button className="create__btn" variant="primary">
          Create Product
        </Button>
      </Link>

      <Table striped bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Product Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.desc}</td>
              <td>{product.price}</td>
              <td>{product.cat}</td>
              <td>
                <Link to={"/read/"+product.id}>
                  <Button className="action__btn" variant="success">
                    Read
                  </Button>
                </Link>
                <Link to={"/edit/"+product.id}>
                <Button className="action__btn" variant="info">
                  Edit
                </Button>
                </Link>
                <Link to={"/delete/"+product.id}>
                <Button className="action__btn" variant="danger">
                  Delete
                </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
