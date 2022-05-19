import React from 'react'

import Title from './../BasicComponents/Title'

const About = () => {
    return (
        <div>
        <img loading="lazy" src="img/graphics/about-graphic.png" className='img-fluid position-absolute graphics' style={{ left: 0, bottom: -900 }} alt="Graphic" />
            <section className='' id='aboutUs' style={{ marginTop: "20rem" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-2 order-lg-0">
                            <figure>
                                <img loading="lazy" src="img/about-us.png" className='img-fluid' width={500} alt="About Us" />
                            </figure>
                        </div>
                        <div className="col-md-5">
                            <div>
                                <Title title='About Us' />
                                <p className='divider' style={{ width: 150 }}></p>
                                <p className='mb-4'>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <figure>
                                        <img loading="lazy" src="img/enagagement-icon.png" className='img-fluid' alt="Enagagement Icon" />
                                    </figure>
                                    <h4 className='text-uppercase'>Enagagement</h4>
                                    <p>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum. <br /> READ MORE</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <figure>
                                        <img loading="lazy" src="img/comunication-icon.png" className='img-fluid' alt="Comunication Icon" />
                                    </figure>
                                    <h4 className='text-uppercase'>Comunication</h4>
                                    <p>We are award-winning leaders in communications and campaign management. <br /> READ MORE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About