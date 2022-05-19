import React from 'react'

const Logo = (props) => {
  return (
      <img loading="lazy" src={props.img} className='img-fluid m-4' alt={props.alt} />
  );

}

export default Logo