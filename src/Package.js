import React from 'react';
import Nevbar from './Nevbar';
import { Card, Col, Row } from 'antd';
import './package.css';
import { CalendarOutlined,UserAddOutlined ,CreditCardOutlined,CheckOutlined} from "@ant-design/icons"

const packageData = [
  {
    id: 1,
    image: 'maldives.webp',
    location: 'Maldives',
    person: 'One couple',
    price: '8,000/-',
    day: '5Days-6Nights',
  },
  {
    id: 2,
    image: 'dubai-p.webp',
    location: 'Dubai',
    person: 'One Adult',
    price: '15,000/-',
    day: 'One Day - One Night',
  },
  {
    id: 3,
    person: 'One Adult',
    image: 'japan-p.jpg',
    location: 'Japan',
    price: '20,000/-',
    day: 'Three Day - Three Night',
  },
  // {
  
  //     id: 4,
  //     image: 'goa.avif',
  //     location: 'Goa',
  //     person: 'One couple',
  //     price: '18,000/-',
  //     day: '5Days-6Nights',
    
  // }
];
const imagePackage=[
  {
    id:1,
    image:'italy.jpg'
  },
  {
    id:2,
    image:'sapin.webp'
  },
  {
    id:3,
    image:'lon.jpg'
  },
  {
    id:4,
    image:'swi.webp'
  }
]
const cardDataAboutPackage=[
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
function Package() {
  return (
    <div>
      <Nevbar />
      <div className="the-other-div-img">
        <div className="image-card-div">
          <p className='p-package'>We're Offering These Trip Packages</p>
          <h1 className='ppp-package'>Famous Trips Packages</h1>
          <span className='title-line'></span>
        </div>
        <div className='card-div-package'>
          <Row gutter={16}>
            {packageData.map((packageItem) => (
              <Col xs={24} sm={12} md={8} lg={6} key={packageItem.id}>
                <Card className="card-p-p-c" title={packageItem.location}>
                  <img className="image-card-p" src={packageItem.image} alt={packageItem.location} />
                  <div className="details-container">
                    <p className="p-p"><UserAddOutlined />Persons: {packageItem.person} </p>
                    <h4 className="h4-p-p"><CreditCardOutlined />Price: {packageItem.price} </h4>
                    <h4 className="p-p-day"><CalendarOutlined classID='one' />{packageItem.day}</h4>
                    <button className="button-p-p">See the availability  </button>
                    <button className="button-p">Book now <CheckOutlined /></button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className='thediv-with-pac'>
        <p>We're Offering These Trip Packages</p>
        <h1 style={{ color: '#C2B280' }}>Popular Places Around the World</h1>
        <span className='title-line'></span>
      </div>
      <div className='image-package-div'>
        <Row gutter={16}>
          {imagePackage.map((imageItem) => (
            <Col xs={24} sm={12} md={8} lg={6} key={imageItem.id}>
              <Card className="card-image-package">
                <img className="image-card-image-package" src={imageItem.image} alt={`Image ${imageItem.id}`} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className='thediv-below-two'>
        <p>We’re Offering These Popular Services</p>
        <h1>Getting Adventure with Services</h1>
        <span className='title-line'></span>
      </div>
      <div className='img-down'>
        <Row gutter={16} style={{ marginLeft: "0", marginRight: "0" }} >
          {cardDataAboutPackage.map((card) => (
            <Col xs={24} sm={12} md={8} lg={6} key={card.id}>
              <Card title={card.location} bordered={false} className='card-gap'>
                <img className='image-card' src={card.image} alt={card.location} />
                <p className='card-title'>{card.title}</p>
                <p className='p-d'>{card.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Package;