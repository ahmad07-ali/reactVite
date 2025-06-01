import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';

const CustomerForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      country: '',
      first_name: '',
      last_name: '',
      address: '',
      apartment: '',
      city: '',
      postal_code: '',
      phone: '',
      your_city: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Required'),
      country: Yup.string().required('Required'),
      first_name: Yup.string().matches(/^[A-Za-z]+$/, "Only alphabets").required('Required'),
      last_name: Yup.string().matches(/^[A-Za-z]+$/, "Only alphabets").required('Required'),
      address: Yup.string().required('Required'),
      apartment: Yup.string(), // optional
      city: Yup.string().required('Required'),
      postal_code: Yup.string().matches(/^\d{5}$/, "Must be exactly 5 digits").required('Required'),
      phone: Yup.string().matches(/^\d{11}$/, "Must be 11 digits").required('Required'),
      your_city: Yup.string().required('Required'),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setErrorMessage('');
      setSuccessMessage('');

      try {
        const { data: users } = await axios.get('http://localhost:3700/Users/list');
        const registeredEmails = users.map(user => user.email);

        if (!registeredEmails.includes(values.email)) {
          setErrorMessage('Email is not registered. Please login or sign up.');
          return;
        }

        await axios.post('http://localhost:3700/customers/addCustomer', values, {
          withCredentials: true,
        });

        setSuccessMessage('Order submitted successfully!');
        resetForm();
      } catch (err) {
        console.error(err);
        setErrorMessage('Error submitting order. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 bg-white p-4 rounded shadow">
          <h2 className="text-center mb-4">Order Submission</h2>

          {/* Show messages like your original version */}
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}

          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              {/* Email and Login */}
              <div className="col-md-6 mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control"
                  placeholder="Enter your email"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </div>
              <div className="col-md-6 mb-3 d-flex align-items-end">
                <Link to="/userlogin" className="btn btn-outline-primary w-100">Login</Link>
              </div>

              {/* Other Fields */}
              {[
                { label: "Country", name: "country", type: "select", options: ["PK", "USA", "India", "UK"] },
                { label: "First Name", name: "first_name" },
                { label: "Last Name", name: "last_name" },
                { label: "Address", name: "address" },
                { label: "Apartment", name: "apartment" },
                { label: "City", name: "city" },
                { label: "Postal Code", name: "postal_code" },
                { label: "Phone", name: "phone" },
                { label: "Your City", name: "your_city", type: "select", options: ["Lahore", "New York", "Delhi", "London"] },
              ].map(({ label, name, type, options }) => (
                <div key={name} className="col-md-6 mb-3">
                  <label>{label}</label>
                  {type === "select" ? (
                    <select
                      name={name}
                      value={formik.values[name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-select"
                    >
                      <option value="">Select {label}</option>
                      {options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      name={name}
                      value={formik.values[name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                    />
                  )}
                  {formik.touched[name] && formik.errors[name] && (
                    <div className="text-danger">{formik.errors[name]}</div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary px-5"
                disabled={formik.isSubmitting}
              >
                Submit Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default CustomerForm;
