import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get('http://localhost:3700/Users/authenticate', {
          withCredentials: true
        });
        if (res.data.status !== 'ok') {
          navigate('/login');
        }
      } catch (err) {
        console.error('Auth failed', err);
        navigate('/login');
      }
    };

    verifyUser();
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
};

export default Dashboard;
