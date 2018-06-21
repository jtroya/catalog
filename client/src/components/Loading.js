import React from 'react';
import PropTypes from 'prop-types';
import { Preloader, Row, Col } from 'react-materialize';

function Loading({ flashing, size }) {
  return (
      <Row className="container">
        <Col s={ 12 } m={ 12 }>
          <div className="center-align">
            <Preloader flashing={ flashing } size={ size } />
          </div>
        </Col>
      </Row>
  );
}

Loading.propTypes = {
  flashing: PropTypes.bool,
  size: PropTypes.string
};

Loading.defaultProps = {
  flashing: false,
  size: 'medium'
};

export default Loading;
