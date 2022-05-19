import React from 'react'

const Footer = () => {
    return (
        <section className='mt-5 pt-5' id='contactUs'>
            <div className="container">
                <footer className='bg-soft-primary p-5'>
                    <div className="row">
                        <div className="col-md-4 col-lg-3 mb-3">
                            <h5 className='ms-4'>Social</h5>
                            <ul className="list-unstyled">
                                <li className='mb-2'>
                                    <a className='text-decoration-none text-dark' href="https://www.facebook.com/">
                                        <img loading="lazy" src="img/facebook.png" className='img-fluid' width={16} height={16} alt="Facebook Icon" />
                                        <span className='ms-2'>Facebook</span>
                                    </a>
                                </li>
                                <li className='mb-2'>
                                    <a className='text-decoration-none text-dark' href="https://www.linkedin.com/">
                                        <img loading="lazy" src="img/linkedin.png" className='img-fluid' width={16} height={16} alt="LinkedIn Icon" />
                                        <span className='ms-2'>LinkedIn</span>
                                    </a>
                                </li>
                                <li className='mb-2'>
                                    <a className='text-decoration-none text-dark' href="https://www.google.com/">
                                        <img loading="lazy" src="img/google.png" className='img-fluid' width={16} height={16} alt="Google Icon" />
                                        <span className='ms-2'>Google +</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-lg-3 mb-3">
                            <h5>Explore</h5>
                            <ul className="list-unstyled">
                                <li className='mb-2'><a className='text-decoration-none text-dark' href="#services">Services</a></li>
                                <li className='mb-2'><a className='text-decoration-none text-dark' href="#team">Team</a></li>
                                <li className='mb-2'><a className='text-decoration-none text-dark' href="#clients">Clients</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-lg-3 mb-3">
                            <h5>Contact</h5>
                            <ul className="list-unstyled">
                                <li className='mb-2'>Lorem Ipsum dummy address</li>
                                <li className='mb-2'>used for display</li>
                                <li className='mb-2'>1234567890</li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-lg-3 mb-3">
                            <h5>Email</h5>
                            <ul className="list-unstyled">
                                <li className='mb-2'><a className='text-decoration-none text-dark text-break' href="mailto:mendlesoncommunication@email.com">mendlesoncommunication@email.com</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <footer className='mt-3'>
                    <p className='text-center'>© Copyright 2018 Mendleson Communication Pty Ltd </p>
                </footer>
            </div>
        </section>
    )
}

export default Footer;