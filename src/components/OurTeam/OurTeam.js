import React from 'react'

import Title from './../BasicComponents/Title'
import Card from './../BasicComponents/Card'

const OurTeam = () => {
    const team = [
        {
            id: 1,
            name: "Jessica D'suza",
            alt: "Jessica D'suza Image",
            img: "img/person-1.png",
        },
        {
            id: 2,
            name: "Johny Williams",
            alt: "Johny Williams Image",
            img: "img/person-2.png",
        },
        {
            id: 3,
            name: "Sanya R,",
            alt: "Sanya R, Image",
            img: "img/person-3.png",
        }
    ]

    function TeamData() {
        return team.map((team, index) => {
            return (
                <Card
                    key={index}
                    id={team.id}
                    name={team.name}
                    alt={team.alt}
                    img={team.img}
                />
            )
        });
    }

    return (
        <section className='my-5 py-5' id='team'>
        <img loading="lazy" src="img/graphics/team-graphic.png" className='img-fluid position-absolute graphics' style={{ left: 0, bottom: -2600 }} alt="Graphic" />
            <div className="container">
                <div className='text-center'>
                    <Title title='Our Team' />
                    <p className='divider' style={{width: 150, margin: 'auto'}}></p>
                </div>
                <div className="row d-flex align-items-center justify-content-around">
                    <TeamData />
                </div>
            </div>
        </section>
    )
}

export default OurTeam