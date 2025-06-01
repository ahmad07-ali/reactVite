import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const ProductCrud = () => {
  const [Products, setProducts] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3700/products/getProducts").then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Oooooops!!! something went wrong" + err);
      });
  }, []);

  const update = (id) => {
    Navigate("/edit", { state: { ProductId: id } });
  };

  const remove = (id) => {
    axios.delete("http://localhost:3700/products/deleteProduct/" + id).then(() => {
      const updatedList = Products.filter(product => product._id !== id);
      setProducts(updatedList);
      })
      .catch((err) => {
        console.log("something went wrong:", err);
      });
  };
  return (
    <div>
      <br /><br /><br /><br />
      <Link className="btn btn-primary" to="/addproduct">
        Add Product
      </Link>
      <br />
      <h2>Product List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Size</th>
            <th>Color</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {Array.isArray(Products) && Products.length > 0 ? (
          Products.map(Product => (
            <tr key={Product._id}>
              <td>{Product._id}</td>
              <td>{Product.name}</td>
              <td>{Product.price}</td>
              <td>{Product.size}</td>
              <td>{Product.color}</td>
              <td>{Product.category}</td>
              <td>{Product.quantity}</td>
              <td>{Product.description}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => update(Product._id)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => remove(Product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
          
        )
        : (
          <tr>
            <td colSpan="6" style={{ textAlign: 'center' }}>No product data found.</td>
          </tr>
        )}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
};

export default ProductCrud;
