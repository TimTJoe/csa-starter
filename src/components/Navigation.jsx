import React from 'react';

const Navigation = React.memo(() => {
  return (
  <nav className='nav'>
    <a href="/" className='logo'>Home</a> 
    <a href="/about" className='logo'>about</a> 
  </nav>)
})

export default Navigation