import React from 'react'
import { useNavigate } from 'react-router-dom';

const home = () => {
  const navigate = useNavigate();
  const handleClick =() =>{
    navigate('/about');
  }
  return (
    <div style={{ marginTop: '1rem' }}>
    <h1>Home</h1>
      <button onClick={handleClick}>Go to About</button>
    </div>
  )
}

export default home
