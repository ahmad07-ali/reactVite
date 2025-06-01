import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Outlet} from 'react-router-dom';

function Crud() {
  const [Students, setStudents] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:3700/Students/getStudent').then(result=>{
      setStudents(result.data)
      console.log(result.data)
    }).catch(err=>{
      console.log("something went wrong" + err)
    })
  }, [])


  useEffect(() => {
    setStudents();
  }, []);

  const update = (id) => {
    navigate('/edit', { state: { studentId: id } });
  };

  const remove = (id) => {
    axios.delete('http://localhost:3700/Students/deleteStudent/' + id)
      .then(() => {
        setStudents(); // refresh list after deletion
        
      })
      .catch(err => {
        console.error('Something went wrong:', err);
      });
  };

  return (
     <div style={{
      // position: "sticky",
      // top: 30,
      // left: 0,
      // width: "100%",
      // height: "100vh",
       }}>
      <br />
      <Link className="btn btn-primary" to="student">Add Student</Link>
      <br />
      <h2>Student List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Rollno</th>
            <th>Name</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(Students) && Students.length > 0 ? (
            Students.map(student => (
              <tr key={student._id}>
                <td>{student._id}</td>
                <td>{student.rollno}</td>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>
                  <button className="btn btn-success" onClick={() => update(student._id)}>Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => remove(student._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>No student data found.</td>
            </tr>
          )}
        </tbody>
      </table>
       <Outlet/>
    </div>
  );
}

export default Crud;
