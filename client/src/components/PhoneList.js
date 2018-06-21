import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardTitle } from 'react-materialize';
import { Link } from 'react-router-dom';

import Loading from './Loading';

class PhoneList extends Component {
  componentDidMount() {
    this.props.fetchCatalog();
  }
  
  handleLinkDetail = (goTo, value) => {
    return (
      <Link to={ goTo }>{ value }</Link>
    );
  };

  displayHeader = (value) => {
    return (
      <CardTitle className="card_img" image={value}></CardTitle>
    );
  };

  renderList () {
    const { catalog } = this.props;
    if (catalog) {
      return catalog.map((item, index) => {
        return (
          <Col s={ 12 } m={ 6 } l={ 4 } key={ index }>
            <Card horizontal className="hoverable"
              header={ this.displayHeader(item.imageUrl)}
              title={ item.model}>
              { this.handleLinkDetail(`/detail/${item.phoneId}`, item.description) }
            </Card>
          </Col>
        );
      });
    }
  }
  
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <Row>
          { loading &&
            <Loading size='big' /> }
          { !loading &&
            this.renderList()
          }
        </Row>
      </div>
    )
  }
}

PhoneList.propTypes = {
  loading: PropTypes.bool,
  catalog: PropTypes.array
};

export default PhoneList;
