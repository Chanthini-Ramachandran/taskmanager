import React from 'react';

const Footer = ({ length }) => {
  return (
    <footer className='footer'>
      Number of Lists: {length-1}
    </footer>
  );
};

export default Footer;
