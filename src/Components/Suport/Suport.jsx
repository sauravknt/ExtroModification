
import React from 'react'
import './Suport.css'
import warranty from '../Assets/warranty.jpg'

const Suport = () => {
  return (
    <div>
       <div className='warranty'>
       <div className='warranty-col'>
       <img src={warranty} alt="" />
       </div>
       <div className='warranty-col1'>
        <form>
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder='Enter your mobile no' required />
          <button className="button button1">Send</button>
          <button className="button button2">Cancel</button>
        </form>
       </div>
       </div>
    </div>
  )
}

export default Suport
