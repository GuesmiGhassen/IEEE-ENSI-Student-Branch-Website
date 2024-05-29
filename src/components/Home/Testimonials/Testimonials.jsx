import React from 'react';
import './style.css'
import {cardData} from '../../../constantes/index'
function testimonials() {
  // Sample card data (you can replace this with your actual data)
  

  return (
    <div className='relative -top-[14px] bg-[#0C0D26]'>
      <div className="cards bg-white rounded-tr-[8rem] min-h-screen flex items-center justify-center">
        <div className="outer">
          {cardData.map((card, index) => (
            <div className="card border-[1px] border-neutral-300" style={{ '--delay': card.delay }} key={index}>
              <div className="header flex items-center">
                <div className="profile flex items-center">
                  <div className="img">
                    <img src={card.imageSrc} alt={card.name} className='w-[90px] h-[90px] object-cover rounded-lg'/>
                  </div>
                  <div className="details">
                    <h4 className='text-[20px] font-semibold'>{card.name}</h4>
                    <p className='text-neutral-500'>{card.post}</p>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <p className='px-2 md:pt-4 pb-2 text-sm'>{card.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default testimonials;
