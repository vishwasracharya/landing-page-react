import React from 'react'

import Title from './../BasicComponents/Title'

const OurProjects = () => {
    return (
        <section className='my-5 py-5' id='projects'> 
        <img loading="lazy" src="img/graphics/project-graphic.png" className='img-fluid position-absolute graphics' style={{ right: 0, bottom: -3100 }} alt="Graphic" />
            <div className="container">
                <div className='text-center mb-3'>
                    <Title title='Our Projects' />
                    <p className='divider' style={{ width: 280, margin: 'auto' }}></p>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className='d-flex align-items-center justify-content-center justify-content-lg-end'>
                            <img loading="lazy" src="img/proj-1.png" className='img-fluid m-2' width={500} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className='d-flex align-items-center justify-content-center'>
                            <div className='d-flex align-items-center justify-content-center justify-content-lg-start flex-wrap'>
                                <img loading="lazy" src="img/proj-2.png" className='img-fluid m-2' width={500} alt="" />
                                <img loading="lazy" src="img/proj-3.png" className='img-fluid m-2' width={500} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default OurProjects