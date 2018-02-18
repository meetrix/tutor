/**
 * Created by supun on 09/02/18.
 */
import React,{Component} from 'react'
import {Row,Col} from 'reactstrap'


import ScheduledWidget from '../../../components/Schedul/ScheduledWidget'
import ConsultantWidget from '../../../components/Consultants/ConsultantWidget'
import ImageWidget from '../../../components/Core/ImageWidget'
import BaseShowRow from '../../../components/BaseBox/BaseShowRow'
import ConsultImage from '../../../components/Consultants/ConsultantImage'
import LiveRoomContainer from '../../../containers/LiveRoomContainer/LiveRoomContainer'
import ConsultantLiveContainer from '../../../containers/ConsultantLiveContainer/ConsultantLiveContainer'
import VideoContainer from '../../../containers/VideoContainer/VideoContainer'
import MyConsultantsContainer from '../../../containers/MyConsutantsContainer/MyConsultantsContainer'
import {BaseScroll} from '../../../components/BaseBox'
class Test extends Component{

    constructor(props){
        super(props)


    }
    componentDidMount() {

    }
    render(){
        return(
            <Col>
                Dashbord
                <Row><MyConsultantsContainer/></Row>
                <Row><ConsultantLiveContainer/></Row>
                <Row><LiveRoomContainer/></Row>
                <Row><VideoContainer/></Row>
                {/*<Row><BaseScroll/></Row>*/}


            </Col>

        );
    }
}
export default Test;