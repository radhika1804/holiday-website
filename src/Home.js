import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
import { DatePicker, Space, Card, Col, Row, Input } from 'antd';
import 'react-datepicker/dist/react-datepicker.css';
import 'font-awesome/css/font-awesome.min.css';
import './home.css';
import { EnvironmentOutlined, MailOutlined, WindowsOutlined} from "@ant-design/icons"
import Nevbar from './Nevbar';
import { MdTravelExplore } from 'react-icons/md';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// import { ImLocation2 } from "@react-icons/all-files/im/ImLocation";
import { SendOutlined } from "@ant-design/icons"

import { Link } from 'react-router-dom';
const cardData = [
  {
    id: 1,
    location: 'Masuri',
    image: 'Mussoorie-hill.jpg',
    price: '3000/-',
    title: 'Mussoorie, the queen of hill stations, is famous for its scenic beauty, good social life and entertainment.  Thronged by holidayers, it vibrates with gaiety and merry making during the summer season.'
  },
  {
    id: 2,
    location: 'Manali',
    image: 'Manali-master.jpg',
    price: '3500/-',
    title: 'Besides offering quite a few places for sightseeing, Manali is also famous for adventure sports like skiing, hiking, mountaineering, paragliding, rafting, trekking, kayaking, and mountain biking.  ',
  },
  {
    id: 3,
    location: 'Mount-abu',
    image: 'Mount-abu.webp',
    price: '1000/-',
    title: 'Arbuda Devi Temple is one of the most famous temples of Mount Abu. It is dedicated to Goddess Durga and is located on a peak of the Aravalis. It has a large number of steps devotees need to climb before reaching the temple'
  },
  {
    id: 4,
    location: 'Udaipur',
    image: 'udaipur-high.jpg',
    price: '5000/-',
    title: 'Udaipur, the beautiful capital of Mewar, Rajasthan, is a royal tourist destination for travellers who love history, culture and architecture. It is quite a renowned destination owing to its massive palaces, ancient forts, beautiful lakes, lush green gardens, age-old temples, romantic backdrops and so much more.'
  },
  {
    id: 5,
    location: 'Jaipur',
    image: 'jaipur01.jpg',
    price: '2000/-',
    title: 'The palaces and forts in Jaipur are all distinctive in their own ways. However, the Jaigarh Fort is the most impressive fort and palace in Rajasthan, according to the list of attractions to see in Jaipur. This fort is located in the Cheel ka Teela, or the Hill of Eagles, a rocky promontory of the Aravalli Hills.'
  },
  {
    id: 6,
    location: 'Agra',
    image: 'agrafort.webp',
    price: '5000/-',
    title: 'Agra is best known for the Taj Mahal (17th century), designated a UNESCO World Heritage site in 1983. A complex mausoleum, the Taj Mahal is often considered to be the worlds best example of Mughal architecture. The Mughal emperor Shah Jahān built it for his favourite wife, Mumtāz Maḥal, in the mid-17th century'
  },
  {
    id: 7,
    location: 'Sikkim',
    image: 'sikkim.cms',
    price: '1000',
    title: 'Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kanchenjunga, the highest peak in India and third highest on Earth. Sikkim capital and largest city is Gangtok.'
  },
  {
    id: 8,
    location: 'Kolkata',
    image: 'kolkata.jpg',
    price: '10,000',
    title: 'Kolkata is known for its grand celebrations of the Hindu festival of Durga Puja, which is recognized by UNESCO for its importance to world heritage. Hence, Kolkata is also known as the city of joy.'
  },
  {
    id: '9',
    location: 'Goa',
    image: 'goa.avif',
    price: '12,000',
    title: 'The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa, with decreased tourist activity inland.'
  }


]

function Home() {
  const [selectedDate, setSelectedDate] = useState(null);
  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };
  return (
    <div className='img'>
      <Nevbar />
      <div className='main-div-one'>
        <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Our PACKAGES</p>
        <h2 style={{ fontSize: '30px', color: 'white' }}>Search Your <span style={{ color: '#0492C2', textDecoration: 'underline' }}>Holiday</span></h2>
        <br></br>

        <div className='white-bg'>
          <div className='input-row'>
            <div className='input-group'>
              <label className='lable'>select your destination</label>
              <Input className='des' type='text' placeholder='enter name here...' suffix={<EnvironmentOutlined />} />
              {/* <Input size="large" placeholder="large size" */}
              {/* //  prefix={<ImLocation2/>}  */}


            </div>

            <div className='input-group'>
              <label className='lable'>select your date</label>
              {/* <div className='date-input-container'>
                <DatePicker
                  className='date'
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText='Select your date'
                />
              </div> */}
              <div className='date-input-container'>
                <DatePicker className='date' onChange={onChange} />
              </div>
            </div>

            <div className='input-group'>
              <label className='lable-price'>max price:</label>
              <input className='price' type='text' placeholder='range' />
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
        <p style={{ fontSize: '25px', marginLeft: '15px' }}>Most Visited <span style={{ color: '#C2B280', textDecoration: 'underline' }}> Places</span></p>
        <Link to={'/Most_Visited_Places'} style={{ textDecoration: 'none' }}>
          <Row gutter={16} style={{ marginLeft: "0", marginRight: "0" }} >
            {cardData.map((card) => (
              <Col xs={24} sm={12} md={8} lg={6} key={card.id}>
                <Card title={card.location} bordered={false} className='card-gap'>
                  <img className='image-card' src={card.image} alt={card.location} />
                  <p className='card-price'>Price: {card.price}</p>
                  <p className='card-title'>{card.title}</p>
                  <button className='card-details'>DETAILS</button>
                </Card>
              </Col>
            ))}
          </Row>
        </Link>
      </div>
      {/* <div className='footer-div'>
        <h5 className='h5' ><MdTravelExplore  />Keep In <span style={{ color: '#0492C2', textDecoration: 'underline' }}>Touch</span></h5>
        <h2 className='h2-t'>Travel With Us</h2><Input className='fot' type='text' placeholder='Active E-Mail Address' suffix={<MailOutlined />} /><button className='fot-button'>send
        </button> */}
        {/* <div className='the-div'> */}
        {/* <MdTravelExplore  /> */}

        {/* <div className='white-div-footer'>
          <div className='sty' >
            <p className='good-thought'>
              “Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.” – Anthony Bourdain
              <br ></br><p className='p-i'><WindowsOutlined /> <AppleOutlined /> <AndroidOutlined /> <TwitterOutlined /> <InstagramOutlined /></p>
            </p>
          </div>
          <div className='st' >
            <p>
              <h3>OUR AGENCY</h3>
              <ul  >
                <Link ><li>Services</li></Link>
                <Link><li>Agency</li></Link>
                <Link><li>Tourism</li></Link>
                <Link><li>Payment</li></Link>
              </ul>
            </p>
            <p>
              <h3>PARTNERS</h3>
              <ul className='ul-div'>
                <Link><li>Hotels</li></Link>
                <Link><li>Booking</li></Link>
                <Link><li>Rental cars</li></Link>
              </ul>
            </p>
          </div> */}
        {/* </div> */}
      {/* </div> */}
    </div>
    // </div>
  );
}

export default Home;