// import React, { useState } from 'react';
// import axios from 'axios';

// const OrderForm = () => {
//   const [formData, setFormData] = useState({
//     country: '',
//     first_name: '',
//     last_name: '',
//     address: '',
//     apartment: '',
//     city: '',
//     postal_code: '',
//     phone: '',
//     your_city: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3700/Products/addProduct', formData);
//       alert('Order submitted successfully!');
//       setFormData({
//         country: '',
//         first_name: '',
//         last_name: '',
//         address: '',
//         apartment: '',
//         city: '',
//         postal_code: '',
//         phone: '',
//         your_city: '',
//         email: '',
//       });
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       alert('Failed to submit order');
//     }
//   };

//   return (
//     <div className="container-fluid mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8 bg-white shadow p-4 rounded">
//           <h2 className="text-center mb-4">Order Submission</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="row">
//               <div className="col-6 mb-3">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>

//               <div className="col-6 mb-3">
//                 <label>Country</label>
//                 <select
//                   name="country"
//                   required
//                   value={formData.country}
//                   onChange={handleChange}
//                   className="form-select"
//                 >
//                   <option value="">Select Country</option>
//                   <option value="USA">USA</option>
//                   <option value="India">India</option>
//                   <option value="UK">UK</option>
//                 </select>
//               </div>

//               <div className="col-6 mb-3">
//                 <label>Select Your City</label>
//                 <select
//                   name="your_city"
//                   required
//                   value={formData.your_city}
//                   onChange={handleChange}
//                   className="form-select"
//                 >
//                   <option value="">Select City</option>
//                   <option value="New York">New York</option>
//                   <option value="Delhi">Delhi</option>
//                   <option value="London">London</option>
//                 </select>
//               </div>

//               <div className="col-6 mb-3">
//                 <label>First Name</label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   required
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>

//               <div className="col-6 mb-3">
//                 <label>Last Name</label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   required
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>

//               <div className="col-6 mb-3">
//                 <label>Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   required
//                   value={formData.address}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>

//               <div className="col-6 mb-3">
//                 <label>Apartment</label>
//                 <input
//                   type="text"
//                   name="apartment"
//                   value={formData.apartment}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>

//               <div className="col-6 mb-3">
//                 <label>City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   required
//                   value={formData.city}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>

//               <div className="col-6 mb-3">
//                 <label>Postal Code</label>
//                 <input
//                   type="text"
//                   name="postal_code"
//                   value={formData.postal_code}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>

//               <div className="col-6 mb-3">
//                 <label>Phone</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   required
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//             </div>

//             <div className="text-center mt-4">
//               <button type="submit" className="btn btn-primary px-5">
//                 Pay Now
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderForm;
