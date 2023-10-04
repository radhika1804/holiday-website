import React from 'react';
import Navbar from './Nevbar';
import './contact.css';
import { MailOutlined, MessageOutlined } from "@ant-design/icons";
import { Form, Select, Input, Button } from 'antd';

function isEmailValid(email) {
  return email.includes('@');
}

function Contect() {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div>
      <Navbar />
      <div className='div-bg'>
        <div className='contect'></div>
        <div className='from'>
          <Form
            className='from-blog'
            onFinish={onFinish}
          >
            <h1 className='head'>We Will Be Glad To Hear From You!</h1>
            <label>Name</label>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please enter your name!',
                },
              ]}
            >
              <Input className='input-blog' placeholder='Name' />
            </Form.Item>
            <label>E-Mail</label>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please enter your email!',
                },
                {
                  validator: (_, value) => {
                    if (isEmailValid(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Please enter a valid email address!');
                  },
                },
              ]}
            >
              <Input className='input-blog' placeholder='E-Mail' suffix={<MailOutlined />} />
            </Form.Item>
            <label>Destinationation</label>
            <Form.Item
              name="destination"
              rules={[
                {
                  required: true,
                  message: 'Please select a destination!',
                },
              ]}
            >
            <select className='select'>
  <option value="usa">USA</option>
  <option value="canada">Canada</option>
  <option value="uk">UK</option>
  <option value="australia">Australia</option>
  <option value="India">India</option>
</select>
            </Form.Item>
            <label>Your extra requirement</label>
            <Form.Item
              name="extraRequirement"
            >
              <Input.TextArea className='input-blog' placeholder='Your extra requirement' suffix={<MessageOutlined />} />
            </Form.Item>
            <Form.Item>
              <Button className='button-join' type="primary" htmlType="submit">
                Join Us
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contect;
