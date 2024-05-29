import React from 'react'

function Day1() {
  return (
    <div class="relative wrap overflow-hidden p-10 h-full">
      <h1 className='flex justify-center text-xl font-semibold'>February 17</h1>
    <div class="border-2-2 -z-10 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
    <br />
    <br />
    {/* Award 1 */}
      <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline cont hidd">
        <div class="order-1 w-5/12"></div>
        <div class="flex items-center order-1 bg-[#0061a8] shadow-xl w-16 h-10 rounded-full">
          <h1 class="mx-auto font-semibold text-lg text-white">10:15</h1>
        </div>
        <div class="order-1 rounded-lg w-5/12 px-6 py-4">
          <p class="text-xl relative lg:left-20 font-semibold leading-snug tracking-wide text-black text-opacity-100 flex items-center justify-end gap-2">
            Opening Ceremony.
          </p>
        </div>
      </div>
      {/* Award 2 */}
      <div class="mb-8 flex justify-between items-center w-full right-timeline cont hidd"> 
        <div class="order-1 w-5/12"></div>
        <div class="flex items-center order-1 bg-[#0061a8] shadow-xl w-16 h-10 rounded-full">
          <h1 class="mx-auto font-semibold text-lg text-white">10:30</h1>
        </div>
        <div class="order-1 rounded-lg w-5/12 relative lg:top-3 top-9 lg:px-6 px-1 py-4">
          <p class="text-xl relative lg:right-20 font-semibold leading-snug tracking-wide text-[#0061a8] text-opacity-100 flex items-center justify-start gap-2">
            WORKSHOP 
          </p>
          <p className='flex relative lg:right-16 font-medium'>
            Building Data pipelines with airflow.
          </p>
        </div>
      </div>
      {/* Award 3 */}
      <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline cont hidd">
        <div class="order-1 w-5/12"></div>
        <div class="flex items-center order-1 bg-[#0061a8] shadow-xl w-16 h-10 rounded-full">
          <h1 class="mx-auto font-semibold text-lg text-white">11:30</h1>
        </div>
        <div class="order-1 rounded-lg w-5/12 relative lg:top-3 top-9 lg:px-6 px-1 py-4">
          <p class="text-xl relative right-2 lg:left-20 font-semibold leading-snug tracking-wide text-[#0061a8] text-opacity-100 flex items-center justify-end gap-2">
            WORKSHOP
          </p>
          <p className='flex relative lg:left-16 justify-end font-medium'>
            Data loading and augmentation.
          </p>
        </div>
      </div>
      {/* Award 4 */}
      <div class="mb-8 flex justify-between items-center w-full right-timeline cont hidd">
        <div class="order-1 w-5/12"></div>
        <div class="flex items-center order-1 bg-[#0061a8] shadow-xl w-16 h-10 rounded-full">
          <h1 class="mx-auto font-semibold text-lg text-white">02:00</h1>
        </div>
        <div class="order-1 rounded-lg w-5/12 relative lg:top-3 top-6 lg:px-6 px-1 py-4">
          <p class="text-xl relative lg:right-20 font-semibold leading-snug tracking-wide text-[#0061a8] text-opacity-100 flex items-center justify-start gap-2">
            WORKSHOP 
          </p>
          <p className='flex relative lg:right-16 font-medium'>
            How to build A Career in AI.
          </p>
        </div>
      </div>
      {/* Award 5 */}
      <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline cont hidd">
        <div class="order-1 w-5/12"></div>
        <div class="flex items-center order-1 bg-[#0061A8] shadow-xl w-16 h-10 rounded-full">
          <h1 class="mx-auto font-semibold text-lg text-white">03:40</h1>
        </div>
        <div class="order-1 rounded-lg w-5/12 relative lg:top-6 top-[58px] lg:px-6 px-1 py-4">
          <p class="text-xl relative lg:left-20 font-semibold leading-snug tracking-wide text-[#0061a8] text-opacity-100 flex items-center justify-end gap-2">
            WORKSHOP
          </p>
          <p className='flex relative lg:left-16 lg:justify-end font-medium'>
            <span className='gap-2 flex pr-2'>MLOps:</span>Helping Financial Services <br /> accelerate Growth.
          </p>
        </div>
      </div>
      {/* Award 6 */}
      <div class="mb-8 flex justify-between items-center w-full right-timeline cont hidd">
        <div class="order-1 w-5/12"></div>
        <div class="flex items-center order-1 bg-[#FEDA5E] shadow-xl w-16 h-10 rounded-full">
          <h1 class="mx-auto font-semibold text-lg text-white">07:00</h1>
        </div>
        <div class="order-1 rounded-lg w-5/12 px-6 py-4">
          <p class="text-xl relative lg:right-20 font-semibold leading-snug tracking-wide text-white text-opacity-100 flex items-center justify-start gap-2">
            Start of The Hackathon.
          </p>
        </div>
      </div>
      <div class="border-2-2 lg:top-[40rem] top-[55rem] -z-10 absolute border-opacity-90 border-[#FEDA5E] h-full border" style={{ left: '50%' }}></div>
      <br />
      <br />
      </div>
  )
}

export default Day1