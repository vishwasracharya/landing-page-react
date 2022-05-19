import React from 'react'

import Title from './../BasicComponents/Title'

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Engagement',
            img: 'img/engagement-vector.png',
            description: 'We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.',
        },
        {
            id: 2,
            title: 'Communications',
            img: 'img/cominucation-vector.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. ',
        },
        {
            id: 3,
            title: 'Facilitation',
            img: 'img/facilation-vector.png',
            description: 'We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.',
        },
        {
            id: 4,
            title: 'Consultation and Research',
            img: 'img/consultation-vector.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. ',
        },
        {
            id: 5,
            title: 'Traning & Mentoring',
            img: 'img/training-and-vector.png',
            description: 'We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.',
        }
    ]
    return (
        <section className='my-5 py-5' id='services'>
        <img loading="lazy" src="img/graphics/service-graphic-1.png" className='img-fluid position-absolute graphics' style={{ right: 0, bottom: -1500 }} alt="Graphic" />
        <img loading="lazy" src="img/graphics/service-graphic-2.png" className='img-fluid position-absolute graphics' style={{ left: 0, bottom: -1800 }} alt="Graphic" />
        <img loading="lazy" src="img/graphics/service-graphic-3.png" className='img-fluid position-absolute graphics' style={{ right: 0, bottom: -2300 }} alt="Graphic" />
            <div className="container">
                <div className='text-center'>
                    <Title title='Services' />
                    <p className='divider' style={{ width: 150, margin: 'auto' }}></p>
                </div>
                <div className="row mb-5 d-flex align-items-center">
                    <div className="col-md-5 text-md-end">
                        <h4 className='text-uppercase'>{services[0].title}</h4>
                        <p>{services[0].description}</p>
                    </div>
                    <div className="col-md-6">
                        <figure className='d-flex justify-content-center'>
                            <img loading="lazy" src={services[0].img} className='img-fluid' width={350} alt="About Us" />
                        </figure>
                    </div>
                </div>

                <div className="row mb-5 d-flex align-items-center">
                    <div className="col-md-6 order-2 order-lg-0">
                        <figure className='d-flex justify-content-center'>
                            <img loading="lazy" src={services[1].img} className='img-fluid' width={350} alt="About Us" />
                        </figure>
                    </div>
                    <div className="col-md-4 text-start">
                        <h4 className='text-uppercase'>{services[1].title}</h4>
                        <p>{services[1].description}</p>
                    </div>
                </div>

                <div className="row mb-5 d-flex align-items-center">
                    <div className="col-md-5 text-md-end">
                        <h4 className='text-uppercase'>{services[2].title}</h4>
                        <p>{services[2].description}</p>
                    </div>
                    <div className="col-md-6">
                        <figure className='d-flex justify-content-center'>
                            <img loading="lazy" src={services[2].img} className='img-fluid' width={350} alt="About Us" />
                        </figure>
                    </div>
                </div>

                <div className="row mb-5 d-flex align-items-center">
                    <div className="col-md-6 order-2 order-lg-0">
                        <figure className='d-flex justify-content-center'>
                            <img loading="lazy" src={services[3].img} className='img-fluid' width={350} alt="About Us" />
                        </figure>
                    </div>
                    <div className="col-md-4 text-start">
                        <h4 className='text-uppercase'>{services[3].title}</h4>
                        <p>{services[3].description}</p>
                    </div>
                </div>

                <div className="row mb-5 d-flex align-items-center">
                    <div className="col-md-5 text-md-end">
                        <h4 className='text-uppercase'>{services[4].title}</h4>
                        <p>{services[4].description}</p>
                    </div>
                    <div className="col-md-6">
                        <figure className='d-flex justify-content-center'>
                            <img loading="lazy" src={services[4].img} className='img-fluid' width={350} alt="About Us" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;