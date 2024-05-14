import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div>
      <h3>Error occurred!</h3>
      <p>Error details:</p>
      <p>{location.state ? location.state.error : 'Unknown error'}</p>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
}

export default ErrorPage;
