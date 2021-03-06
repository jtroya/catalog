import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Table } from 'react-materialize';

class PhoneDetailComponent extends Component {
  componentDidMount () {
    this.props.getInfoDetail(this.props.phoneId);
  }

  renderInfo = () => {
    const { brand, model, color, description, price, storage, imageUrl  } = this.props.selectedItem;
    return (
      <Row className="container">
        <Col s={ 12 } m={ 4 } l={ 4 }>
          <div className="div_panel scale-transition">
            <img className="div_panel-image" alt={ model } src={ imageUrl } />
          </div>
        </Col>
        <Col s={ 12 } m={ 8 } l={ 8 }>
          <Table>
            <tbody>
              <tr><td>Model</td><td>{ model }</td></tr>
              <tr><td>Brand</td><td>{ brand }</td></tr>
              <tr><td>Colour</td><td>{ color }</td></tr>
              <tr><td>Description</td><td>{ description }</td></tr>
              <tr><td>Price</td><td>{ price }</td></tr>
              <tr><td>Storage</td><td>{ storage }</td></tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }

  render() {    
    return (
      <Row>
        { this.props.selectedItem &&
          this.renderInfo()
        }
      </Row>
    )
  }
}

PhoneDetailComponent.propTypes = {
  getInfoDetail: PropTypes.func,
  brand: PropTypes.string,
  model: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  storage: PropTypes.string,
  imageUrl: PropTypes.string
};

export default PhoneDetailComponent;
