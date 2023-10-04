import React, { useState } from 'react'
import Navbar from './Nevbar'
import './flight.css'
import { SwapOutlined, RiseOutlined, FallOutlined } from "@ant-design/icons"
import { Radio, Checkbox, Input, Card, Button, Tabs } from 'antd';
import type { TabsProps } from 'antd';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'International',
    children: [
      {
        id: 1,
        image: 'katmandu.jpg',
        title: 'delhi to Katmandu',
        endroll: 'false'
      },
      {
        id: 2,
        image: 'singapur.jpg',
        title: 'delhi to Singapur',
        endroll: 'false'
      },
      {
        id: 3,
        image: 'bankok.jpg',
        title: 'delhi to Bangkok',
        endroll: 'false'
      },
      {
        id: 4,
        image: 'dubai.jpg',
        title: 'delhi to Dubai',
        endroll: 'false'
      },
      {
        id: 5,
        image: 'london.jpg',
        title: 'delhi to London',
        endroll: 'false'
      },
      {
        id: 6,
        image: 'istanbul.jpg',
        title: 'Delhi to Istanbul',
        endroll: 'false'
      },],
  },
  {
    key: '2',
    label: 'Domestic',
    children: [{
      id: 1,
      image: 'leh.jpg',
      title: 'New delhi to Leh',
      endroll: 'true'
    },
    {
      id: 2,
      image: 'pune.jpeg',
      title: 'New delhi to Pune',
      endroll: 'true'
    },
    {
      id: 3,
      image: 'hydrabad.jpg',
      title: 'New delhi to Hydrabad',
      endroll: 'true'
    },
    {
      id: 4,
      image: 'mum.jpg',
      title: 'New delhi to Mumbai',
      endroll: 'true'
    },
    {
      id: 5,
      image: 'sri.webp',
      title: 'New delhi to Srinagar',
      endroll: 'true'
    }],
  },
];

function Flight() {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onChangeRadio = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const onChangeTabs = (key: string) => {
    console.log(key);
  };
  const { Meta } = Card;
  return (
    <div>
      <Navbar />
      <div className='seound-div-flight'>
        <h1>Compare a book flights</h1>
        <p className='p-d-flight'>descover your dream destination</p>
        <div className='uper'>
          <Radio.Group onChange={onChangeRadio} value={value}>
            <Radio value={1}>Road-way</Radio>
            <Radio value={2}>Multicity</Radio>
            <Radio value={3}>One-way</Radio>
          </Radio.Group>
          <select className='select-fli'>
            <option>Economy</option>
            <option>premum Economy</option>
            <option>Bussiness</option>
            <option>Fist class</option>
          </select>
          <select className='select-fli'>
            <option>1 adult</option>
            <option> 1 Child</option>
          </select>
          <Checkbox onChange={onChange}>Checkbox</Checkbox></div>
        <br></br>
        <div className='div-in'>
          <Input className='input-flight' placeholder="Where from?" suffix={<RiseOutlined />} />
          <SwapOutlined className='fas fa-plane' />
          <Input className='input-flight' placeholder="Airport" suffix={<FallOutlined />} />
          <Button className='button-ser'>Search</Button></div>
      </div>
      <div className='cards-flight'>
        <h2 className='flight-h2'>Popular Flights Near You</h2>
        <p className='flight-p'>Find deals on domestic and international flights</p>
        <Tabs defaultActiveKey="1" onChange={onChangeTabs}>
          {items.map((tab) => (
            <Tabs.TabPane tab={tab.label} key={tab.key}>
              <div className='flight-cards-container'>
                {tab.children.map((flight) => (
                  <Card key={flight.id}>
                    <img alt={flight.title} src={flight.image} className='img-card-div' />
                    <Meta title={flight.title} />
                  </Card>
                ))}
              </div>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
      {/* <div>
      <h1>Frequently Asked Questions</h1>
      <h4>How can I book a flight online?</h4>
      <p>You can book flights online through airline websites or online travel agencies (OTAs) like Expedia, Kayak, or Google Flights.</p>
      </div> */}
    </div>
  )
}

export default Flight
