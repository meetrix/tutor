/**
 * Created by jay on 09/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon, FormGroup, legend, Label} from 'reactstrap';
import DropDownMenu from '../../../components/Search/DropDownMenu/DropDownMenu';
import SortByRadioButtons from '../../../components/Search/SortByRadioButtons/SortByRadioButtons';

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
                        <SortByRadioButtons label="Sort" searchKey="sortBy" radioButtons={[{id: '1', label:'test'}]}/>
                    </Col>
                </Row>

                {/*Criteria Selection*/}
                <Row>
                    <Col md="3">
                        <DropDownMenu
                            searchKey="subject" label="Subject" options={["1", "2"]}
                        />
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