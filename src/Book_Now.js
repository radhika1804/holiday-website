import {Form, Input, Radio, Select } from 'antd'
import React, { useState } from 'react'
import { FaCheck,FaWallet,FaUtensils,FaUsersSlash,FaPersonCircleCheck} from "react-icons/fa6";
import './book-now.css'
import {MailOutlined,EnvironmentOutlined } from "@ant-design/icons"
import Navbar from './Nevbar'
function Book_Now() {
  const [formData,setFormData]=useState({
    username:'',
    lastname:'',
    email:'',
    country:'',
    telephone:''
})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.match(emailRegex)) {
    alert('Please enter a valid email address');
    return;
  }
  const phoneNumberRegex = /^\d{10}$/;
  if (!formData.telephone.match(phoneNumberRegex)) {
    alert('Please enter a valid 10-digit phone number');
    return;
  }

  console.log('Form submitted with data:', formData);
  }
  
  const [value, setValue] = useState(1);
const [valueTwo, setValueTwo] = useState(1);

const onChangeRadio = (e) => {
  console.log('radio checked', e.target.value);
  setValue(e.target.value);
};

const onChangeRadioTwo = (e) => {
  console.log('radio checked', e.target.value);
  setValueTwo(e.target.value); 
};
const onChangeButtonSubmit=()=>{
  // alert('submit successfully')
}
  return (
    <div>
     <Navbar/>
    <div>
    <Form className='form-div' onSubmit={handleSubmit}> 
     <div >
      <label className='label'>First Name
        <input className='input-class' type='text' name='username' placeholder='User Fisrt Name' value={formData.username} onChange={handleChange}/>
      </label>
      <label>Last Name
        <input  className='input-class' type='text' name='lastname' placeholder='User Last Name' value={formData.lastname} onChange={handleChange} />
      </label>
      <label>E-Mail Address
        <Input  className='input-class' type='email' name='email' placeholder='Active E-mail Address' value={formData.email} onChange={handleChange} suffix={<MailOutlined/>}  required/>
        
      </label>
      <label>Country/region
      <Select className='select'>
        <option value="usa">United States of America</option>
        <option value="canada">Canada</option>
        <option value="uk">United Kingdom</option>
        <option value="australia">Australia</option>
        <option value="germany">Germany</option>
        <option value="India">India</option>
      </Select>
      </label><br></br>
      <label>Destinationation
      <Input type='text' placeholder='Enter your Email' suffix={<EnvironmentOutlined />}  required/>
      </label>
      <label>Telephone(mobile number preferred)
      <input  className='input-class' type='number'name='telephone' placeholder='+91' value={formData.telephone} onChange={handleChange} required/>
      </label><br></br><br></br>
      <label>Who are you booking for?<br></br>
      <Radio.Group onChange={onChangeRadio} value={value}>
      <Radio value={1}>I am the main guest</Radio>
      <Radio value={2}>someone else's Booking is for someone else</Radio>
      </Radio.Group>
      </label><br></br> 
      <label>Are you travelling for work?<br></br>
      <Radio.Group onChange={onChangeRadioTwo} value={valueTwo}>
      <Radio value={1}>Yes</Radio>
      <Radio value={2}>No</Radio>
      </Radio.Group>
      </label>
    </div>
    <br></br>
    <div>
      <h3>Good to know:</h3>
      <FaWallet/>
      No creadit card needed<br></br>
      <FaCheck/>
      Stay fexlibel: You can cancle for free befor 15 days
    </div>
    <br></br>
    <div>
    <h3>Executive Room</h3>
    <h5>
   <FaUtensils/>
    Breakfast included in the price</h5>
      <label>
      <h5>
        <FaUsersSlash/>
        Free cancellation before 15 days</h5>
      </label><br></br>
      <label>Full guest name <FaPersonCircleCheck/>
      <input  className='input-class' type='text' placeholder='Fist name, Last name'/></label>
      <label>Floor preference</label>
      <Select className='select'>
        <option value="Ground Floor">Ground Floor</option>
        <option value="No preference">No preference</option>
        <option value="Top Floor">Top Floor</option>
      </Select>
    </div>  
    <button onClick={onChangeButtonSubmit} className='submit-b'>Submit</button>
    </Form>
    </div>
     
    </div>
  )
}

export default Book_Now
