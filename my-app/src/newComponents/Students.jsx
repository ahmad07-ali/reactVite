import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Student() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    rollno: '',
    name: '',
    address: ''
  });

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3700/Students/addStudent', data)
      .then(() => {
        navigate('/crud'); // just navigate, let Crud fetch updated data
      })
      .catch(err => {
        console.error("Error while adding student:", err);
      });
  };

  function changeHandler(e) {
    const newdata = {...data}
    console.log(newdata)
    newdata[e.target.id] = e.target.value
    console.log(newdata)
    setData(newdata)
  }

  // const changeHandler = (e) => {
  //   setData({...data,
  //     [e.target.id]: e.target.value
  //   });
  // };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            className="border-2"
            placeholder="Rollno"
            type="number"
            name="rollno"
            id="rollno"
            value={data.rollno}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            className="border-2"
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            className="border-2"
            placeholder="Address"
            type="text"
            name="address"
            id="address"
            value={data.address}
            onChange={changeHandler}
          />
        </div>
        <button className="btn btn-success" >Submit</button>
        <Link to="/crud" ><button className="btn btn-primary">Back</button></Link>
      </form>
    </div>
  );
}
