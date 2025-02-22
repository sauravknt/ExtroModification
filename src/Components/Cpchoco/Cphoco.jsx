import React from 'react'
import './Cpchoco.css'
import data_product from '../Assets/CpChoco/choco'
import Aliveitem from '../PtmtAlive/Aliveitem'
import chocomain from '../Assets/bacground/cp-choco-bg.jpg'

const Cphoco = () => {
  return (
    <div className='chocon'>
        <img src={chocomain} alt=""  />
        <div className='choco-text'>
        <h1>CP CHOCO</h1>
        </div>
        <div className='chocom'>
          <div className='choco-main-right'>
            <h1>CP Faucets</h1>
            <b>1.	Qualified brass   </b><br /><br />
            <b>2.	Chrome plating done to ensure mirrir </b><br /><br />
            <b>3.	Qualified spindle</b><br /><br />
            <b>4.	Multi layer aerator </b><br /><br />
            <b>5.	Uniform thickness</b><br /><br />
            <b>6.	7 year warranty</b><br /><br />
          </div>
    <div className='choco-main-left'>
    <div className='choco-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Cphoco


