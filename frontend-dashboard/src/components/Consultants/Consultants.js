/**
 * Created by supun on 08/01/18.
 */
/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, { Component, Fragment } from 'react';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import Consultant from './Consultant';

class Consultants extends Component {
  getConsultantCardColumns(consultantsInRow) {
    const consultantCardColumnWidth = 4;
    return (
      consultantsInRow.map((consultant, index) =>

        (<Consultant
        /* eslint react/no-array-index-key:0 */
          key={index}
          {...consultant}
          actions={this.props.actions}
          columnWidth={consultantCardColumnWidth}
        />))
    );
  }

  render() {
    const rows = [];
    const numberOfCardsInRow = 3;
    for (let i = 0; i < this.props.consultants.length; i += numberOfCardsInRow) {
      const element = (
        <Row className="consultant-array" key={i}>
          {this.getConsultantCardColumns(this.props.consultants.slice(i, i + numberOfCardsInRow))}
        </Row>
      );
      rows.push(element);
    }
    return (
      <Fragment>
        {rows}
      </Fragment>
    );
  }
}

Consultants.propTypes = {
  consultants: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,

  })).isRequired,
  actions: PropTypes.shape.isRequired,

};

export default Consultants;
