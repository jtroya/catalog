import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ appName }) {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/"><span className="brand-logo center">{ appName }</span></Link>
      </div>
    </nav>
  );
};

Header.propTypes = {
  appName: PropTypes.string  
};

Header.defaultProps = {
  appName: 'Catalog'  
};

export default Header;
