import React from 'react'

import './Hero.css'

const Hero = () => {
    return (
        <section className=''>
            <img src="img/graphics/hero-graphic-1.png" className='img-fluid position-absolute fadeIn graphics-1' alt="Graphic" />
            <img src="img/graphics/hero-graphic-2.png" className='img-fluid position-absolute fadeIn graphics-2' alt="Graphic" />
            <img src="img/graphics/hero-graphic-3.png" className='img-fluid position-absolute fadeIn graphics-3' alt="Graphic" />
            <div className="container">
                <div className="row m-0 p-0 vertical-center d-flex align-item-center justify-content-center">
                    <div className="col-12 col-md-7">
                        <img src="img/hero.png" className='img-fluid position-absolute fadeIn hero-img' alt="Hero" />
                    </div>
                    <div className="col-12 col-md-5">
                        <div className='text-center text-md-start slideUp'>
                            <h1>Mendlenson <br /> Communication <br /> and Engagement</h1>
                            <h2 className='fs-6 fw-normal text-dark'>Lorem ipsum dolor sit adipisicing elit. Repellendus labore ipsum aperiam nemo placeat id dolorem aspernatur distinctio exercitationem.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
// "homepage": "https://vishwasracharya.github.io/landing-page-react",
export default Hero;