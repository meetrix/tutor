/**
 * Created by jay on 09/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon, FormGroup, legend, Label} from 'reactstrap';
import DropDownMenu from '../../../components/Search/DropDownMenu/DropDownMenu';
import RadioButton from "../../../components/Search/RadioButton/RadioButton";

class ConsultantList extends Component {

    render() {
        return(
            <div>
                {/*Search Parameters*/}
                <Row>
                    {/*Search by Name*/}
                    <Col md="4">
                        <Input></Input>
                    </Col>

                    {/*Sort By Radio Buttons*/}
                    <Col md="8">
                        <FormGroup tag="fieldset">
                            <Label>Sort By</Label>
                            <FormGroup check>
                                <Label check>
                                    <RadioButton/>{' '}
                                    Option one
                                </Label>
                                <Label check>
                                    <RadioButton/>{' '}
                                    Option two
                                </Label>
                                <Label check>
                                    <RadioButton/>{' '}
                                    Option three
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    </Col>
                </Row>

                {/*Criteria Selection*/}
                <Row>
                    <Col md="3">
                        <DropDownMenu/>
                    </Col>
                </Row>

            </div>


        )
    }
}

// ConsultantList.propTypes = {
//     tutors: PropTypes.arrayOf(PropTypes.shape({
//         id:PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//
//
//     })),
//     actions: PropTypes.object.isRequired
//
// };

export default ConsultantList;