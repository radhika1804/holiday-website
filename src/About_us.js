import React from 'react'
import './aboutus.css'
import { Card, Col, Row } from 'antd';
import Navbar from './Nevbar'
const cardDataAbout=[
    {
        id:1,
        title:'Beach',
        image:'beach-card-two.jpg',
        description:'"Live in the sunshine, swim in the sea, drink the wild air."',
    },
    {
        id:2,
        title:'Mountains',
        image:'mountain.jpg',
        description:'"Every mountain top is within reach if you just keep climbing."'
    },
    {
        id:3,
        title:'Forest',
        image:'forest.jpg',
        description:'"Forests are the lungs of our land, purifying the air and giving fresh strength to our people."'
    },
    {
        id:4,
        title:'Desert',
        image:'desert.jpg',
        description:'"The desert, when the sun comes up... I couldnt tell where heaven stopped and the Earth began." '
    },
]
function About_us() {
    return (
        <div>
            <Navbar />
            <div className='class-image-about'>
                <div className='side'>
                    <h1>Travel With Us</h1>
                    <h2>“Jobs fill your pocket, but adventures fill your soul.”</h2>
                </div>
            </div>
            <div className='div-card-about'>
            <Row gutter={16} style={{marginLeft:"0", marginRight: "0"}} >
            {cardDataAbout.map((card) => (
              <Col xs={24} sm={12} md={8} lg={6} key={card.id}>
                <Card  title={card.location} bordered={false} className='card-gap'>
                  <img className='image-card' src={card.image} alt={card.location} />
                  <p className='card-title'>{card.title}</p>
                  <p className='p-d'>{card.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
            </div>
            <div>
                <h1 style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>We are best Pakage for your <span style={{ color: '#C2B280', marginLeft: '40px' }}>dream travel destination </span></h1>
                <p style={{ display: 'grid', paddingTop:'5px',justifyItems: 'center', justifyContent: 'center' }}>“Man cannot discover new oceans unless he has the courage to lose sight of the shore.”</p>
                <div className='niche'>
                    <h2 className='story'>  Travel</h2>
                    <p className='travel'>Traveling can be a great way to relax and explore new places, but it's not directly related to your profile as an associate Node.js developer. If you have any questions or topics related to Node.js development or programming, feel free to ask, and I'd be happy to help.</p>
                </div>
            </div>
            <div className='secound-niche'>
                <h2 className='vision'>Our Vision</h2>
                <p className='day'>Our "Holiday" travel websites are created to share information about various travel destinations, including details about attractions, accommodations, local cuisine, and cultural experiences. These websites aim to provide valuable information to travelers to help them plan their trips effectively.</p>
            </div>
            {/* <div>
                <h2 className='third-footer'>"What can we do to help you?"</h2>
                <p className='foter3'></p>
            </div> */}
        </div>
    )
}

export default About_us
