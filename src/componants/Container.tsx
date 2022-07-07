import React from 'react';
import '../css/Container.css';

export default function Container(props:any):JSX.Element {
    const {etiquette, children} = props;

  return (
    <>
      <div className='container'>
        <div id='etiquette'>
            {etiquette}
        </div>
          {children}
      </div>
    </>
  )
}
