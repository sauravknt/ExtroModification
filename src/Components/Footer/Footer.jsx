import React from 'react'
import './Footer.css'
import logos from '../Assets/extro.png'
import whatshap from '../Assets/whatsapp_4423697.png'
import facebook from '../Assets/facebook.png'
import instra from '../Assets/instagram_174855.png'
import twiter from '../Assets/twitter2.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className="footer">
  <div className="col">
    <img src={logos} alt="" className='logoss' />
    <p>Extro offers a selection of high-quality bathroom fittings that includes elegant faucets and rainfall showerheads. Embedded with a touch of luxury and durability we enhance the experience</p>
  </div>
  <div className="col">
  <h3>Office</h3>
 Head office: C-56/5,<br /> 2nd Floor, Mantec Tower, Noida, Sector-62,<br /> UP-201309
<br />Regional offices:<br />
  	Argora Chawk,<br /> Ranchi, Jharkhand <br />
  	Bairiya Chawk, Muzaffarpur, Bihar<br />
  contact@extro.co.in <br />
  +91-9310793393
  </div>
  <div className="col">
    <h3>Link</h3>
    <ul>
        <li><Link style={{textDecoration:'none'}} to='/'>Home</Link></li>
        <li>  <Link style={{textDecoration:'none'}} to='/Home'>About</Link></li> 
        <li ><Link style={{textDecoration:'none'}} to='/Support'>Support</Link></li>
        <li ><Link style={{textDecoration:'none'}} to='/Enquiry'>Enquiry</Link></li>
        
    </ul>
  </div>
  <div className="col">
    <h3>Socail Media</h3>
    <div className='media'>
 <a href=" https://wa.me/919310793393?=Hello How can i help you ?"> <img src={whatshap} alt=""  /></a>
<a href="https://www.facebook.com/share/p/QX9zuecN3KtA9W6R/"><img src={facebook} alt="" /></a>
<img src={twiter} alt="" />
<a href="https://www.instagram.com/harinamextro/"><img src={instra} alt="" /></a>
    </div>
  </div>
  </div>
  <hr />
 <p>Extro © 2016-All Right Receved </p>
   </div>
  )
}

export default Footer
