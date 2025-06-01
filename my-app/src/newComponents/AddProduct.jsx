import React, { useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const Navigate = useNavigate();
  const [Product, setProducts] = useState({
    name: '',
    price: '',
    size: '',
    color: '',
    category: '',
    quantity: '',
    description: ''
  });

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3700/Products/addProduct', Product).then(() => {
      Navigate('/crud');
    }).catch(err => {
      console.error("Error while adding data", err);
    });
  };

  function changeHandler(e) {
    const newProduct = { ...Product };
    newProduct[e.target.id] = e.target.value;
    setProducts(newProduct);
  }

  return (
    <div>
      <br /><br /><br /><br />
      <form onSubmit={submitHandler}>
        <div>
          <input type="text" placeholder='name' name='name' id='name' value={Product.name} onChange={changeHandler}  className="w-[250px] mt-2"/>
        </div>
        <div>
          <input type="number" placeholder='Price' name='price' id='price' value={Product.price} onChange={changeHandler}  className="w-[250px] mt-2"/>
        </div>
        <div>
          <input type="text" name='size' placeholder='Size' id='size' value={Product.size} onChange={changeHandler}  className="w-[250px] mt-2"/>
        </div>
        <div>
          <input type="text" placeholder='color' id='color' name='color' value={Product.color} onChange={changeHandler} className="w-[250px] mt-2" />
        </div>
        <div>
          <input type="text" placeholder='Category' name='category' id='category' value={Product.category} onChange={changeHandler}  className="w-[250px] mt-2"/>
        </div>
        <div>
          <input type="number" placeholder='Quantity' id='quantity' name='quantity' value={Product.quantity} onChange={changeHandler}  className="w-[250px] mt-2"/>
        </div>
        <div>
          <input type="text" name='description' placeholder='Description' id='description' value={Product.description} onChange={changeHandler}  className="w-[250px] mt-2" />
        </div>

        <input type='submit' className='btn btn-success w-5' value="submit" />
        <Link to="/crud" className='btn btn-primary'>Back</Link>
      </form>
      <Outlet />
    </div>
  );
}

export default AddProduct;
