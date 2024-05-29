import React from 'react'
import vec from '../About/Vector3.png'
import Modal from './Modal'
import Modal2 from './Modal2'
import Modal3 from './Modal3'
import One from './1.jpg'
import Two from './2.jpg'
import Three from './3.jpg'
import { useState } from 'react'
function News() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  return (
    <>
      <div className='relative bg-[#f2f2f2]'>
        <div className='flex flex-col items-center m-10 relative top-10 md:pb-0 pb-5'>
        <div className="div110">
            <h id="titre_gods30" className='lg:ml-3 relative Color'>LATEST NEWS </h>
            <img src={vec} className="vec1 pl-9 lg:pl-10" alt=''width={270}/>
          </div>
        </div>
        <div className='Cards flex lg:h-[30rem] items-center justify-center md:pr-0 pb-20'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                      {/* -------- Card1 -------- */}
            <div className='w-[22rem] h-[23rem] md:left-10 left-5 top-12 relative mr-10 mb-10'>
              <button onClick={() => setOpen(true)}>
                <img src={One} alt="" className='rounded-xl border hover:border-[#428bca]'/>
              </button>
              <Modal open={open} onClose={() => setOpen(false)}>
                <div className='grid'>
                  <img src={One} alt="" width={650} className='rounded-xl border'/>
                </div> 
              </Modal>
            </div>
                      {/* -------- Card2 -------- */}
            {true && (<div className='w-[22rem] h-[23rem] md:left-10 left-5 top-12 relative mr-10 mb-10'>
              <button onClick={() => setOpen2(true)}>
                <img src={Two} alt="" className='rounded-xl border hover:border-[#428bca]'/>  
              </button>
              <Modal2 open2={open2} onClose={() => setOpen2(false)}>
                <div className='grid'>
                  <img src={Two} alt="" width={650} className='rounded-xl border'/>
                </div> 
              </Modal2>
              </div>)}
                      {/* -------- Card3 -------- */}
            {true && (<div className='w-[22rem] h-[23rem] md:left-10 left-5 top-12 relative mr-10 mb-10'>
              <button onClick={() => setOpen3(true)}>
                <img src={Three} alt="" className='rounded-xl border hover:border-[#428bca]'/>
              </button>
              <Modal3 open3={open3} onClose={() => setOpen3(false)}>
                <div className='grid'>
                  <img src={Three} alt="" width={650} className='rounded-xl border'/>
                </div> 
              </Modal3>
            </div>)}
          </div> 
        </div>
      </div>
    </> 
  )
}

export default News