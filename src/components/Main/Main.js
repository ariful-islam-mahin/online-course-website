import React, { useState } from 'react';
import Order from '../Order/Order';
import Course from '../Course/Course';
import fakeData from '../../fakeData/fakeData';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'

const Main = () => {
    const [count, setCount] = useState([])
    function handleAddCourse(course){
        const newCount = [...count, course];
        setCount(newCount)
    }
    return (
        <div>
            <Container>
                <Row>
                <Col sm='9' className='border-right'>
                    {
                    fakeData.map(course => <Course handleClick={handleAddCourse} course={course}></Course>)
                    }
                </Col>
                <Col sm='3'>
                    <Order count={count}></Order>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;