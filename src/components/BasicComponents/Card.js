import React from 'react'

const Card = (props) => {
  return (
    <div className="col-md-3 text-center py-4">
        <figure>
            <img loading="lazy" src={props.img} className='img-fluid' width={250} alt={props.alt} />
        </figure>
        <p className='fs-5 text-dark'>{props.name}</p>
    </div>
  )
}

export default Card