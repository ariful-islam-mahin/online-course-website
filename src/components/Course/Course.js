import React from 'react';

const Course = (props) => {
    const {name, picture, price} = props.course;
    return (
        <div className='my-5 shadow p-4 rounded-lg bg-light'>
            <div className="col-sm-2">
                <img className='w-100' src={picture} alt=""/>
            </div>
            <h3>{name}</h3>
            <h4>${price}</h4>
            <button className='btn btn-primary' onClick={() => props.handleClick(props.course)}>Enroll now</button>
        </div>
    );
};

export default Course;