import React, { Component, Fragment } from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import DropDownMenu from './DropDownMenu';

class DropDownMenuSet extends Component {
  render() {
    const columnWidthMd = 12 / this.props.dropDownMenus.length;
    const menuSet = this.props.dropDownMenus.map(dropDownMenu =>
      (
        <Col xs="12" sm={columnWidthMd} md={columnWidthMd} key={`drop_down_menu_set_${dropDownMenu.name}`}>
          <DropDownMenu
            name={dropDownMenu.name}
            label={dropDownMenu.label}
            options={dropDownMenu.options}
          />
        </Col>));

    return (
    // Fragment is used to return columns without a dev wrap
      <Fragment>
        {menuSet}
      </Fragment>
    );
  }
}

DropDownMenuSet.propTypes = {
  dropDownMenus: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

export default DropDownMenuSet;
