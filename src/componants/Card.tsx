import React from 'react';
import '../css/Card.css';

export default function Card(props:any):JSX.Element {
    const {Title, Description, Status} = props;
  return (
    <>
      <div className='card'>
        <h5>Title</h5>
        <span className='element'>{Title}</span>
        <h5>Description</h5>
        <span className='element'>{Description}</span>
        <h5>Status</h5>
        <span className='element'>{Status}</span>
      </div>
    </>
  );
}
