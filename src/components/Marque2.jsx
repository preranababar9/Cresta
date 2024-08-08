import React from 'react'
import Marquee from 'react-fast-marquee'
import Frame1 from "/logo/Frame1.svg";
import Frame2 from "/logo/Frame2.svg";
import Frame3 from "/logo/Frame3.svg";
import Frame4 from "/logo/Frame4.svg";
import Frame5 from "/logo/Frame5.svg";
import Frame6 from "/logo/Frame6.svg";

const Marque2 = () => {
  return (
        <section className='py-20 '>
    <div className='max-width'>
        
        <Marquee >
        <img src={Frame1} alt="" className='mr-14 '/>
        <img src={Frame2} alt="" className='mr-14 '/>
        <img src={Frame3} alt="" className='mr-14 '/>
        <img src={Frame4} alt="" className='mr-14 '/>
        <img src={Frame5} alt="" className='mr-14 '/>
        <img src={Frame6} alt="" className='mr-14 '/>
        </Marquee>
        </div>
    </section>
  )
}

export default Marque2