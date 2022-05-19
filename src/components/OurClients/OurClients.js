import React from 'react'

import Logo from './../BasicComponents/Logo'
import Title from './../BasicComponents/Title'

const LogoLinks = [
    {
        img: "img/clients/boroondara.png",
        alt: "Boroondara Logo"
    },
    {
        img: "img/clients/port-phillip.png",
        alt: "Port Phillip Logo"
    },
    {
        img: "img/clients/brigitte.png",
        alt: "Brigitte Logo"
    },
    {
        img: "img/clients/level-crossing-removal.png",
        alt: "Level Crossing Removal Logo"
    },
    {
        img: "img/clients/bhp.png",
        alt: "BHP Logo"
    },
    {
        img: "img/clients/victoria.png",
        alt: "Victoria Logo"
    },
    {
        img: "img/clients/pacific-hydro.png",
        alt: "Pacific Hydro Logo"
    },
    {
        img: "img/clients/vcoss.png",
        alt: "VCOSS Logo"
    },
    {
        img: "img/clients/melbourne-water.png",
        alt: "Melbourne Water Logo"
    },
]

function LogoData() {
    return LogoLinks.map((logo, index) => {
        return (
            <Logo
                key={index}
                img={logo.img}
                alt={logo.alt}
            />
        )
    })
}

const OurClients = () => {
    return (
        <section className='my-5 py-5' id='clients'>
        <img loading="lazy" src="img/graphics/client-graphic.png" className='img-fluid position-absolute graphics' style={{ left: 0, bottom: -4200 }} alt="Graphic" />
            <div className="container">
                <div className='text-center'>
                    <Title title='Our Clients' />
                    <p className='divider' style={{ width: 150, margin: 'auto' }}></p>
                </div>
                <div className='d-flex align-items-center justify-content-center flex-wrap'>
                    <LogoData />
                </div>
            </div>
        </section>
    )
}

export default OurClients