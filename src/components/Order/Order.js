import React from 'react';

const Enroll = (props) => {
    const count = props.count;
    const totalPrice = count.reduce((acc, current) => acc + current.price, 0)
    return (
        <div className=''>
            <h3 className='bg-dark text-white rounded-lg p-3'>Course order: {count.length}</h3>
            <h4 className='bg-dark text-white rounded-lg p-3'>Total prices: ${totalPrice}</h4>
            {
                count.map(course => {
                    return (
                        <div className='d-flex p-3 shadow m-3 rounded-lg bg-light'>
                            <img src={course.picture} alt=""/>
                            <div className='ml-4'>
                               <h4>{course.name}</h4>
                               <h5>${course.price}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Enroll;