import React from 'react'

function Day2() {
  return (
    <div class="relative wrap overflow-hidden p-10 h-full">
      <h1 className='flex justify-center text-xl font-semibold'>February 18</h1>
    <div class="border-2-2 -z-10 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
    <div class="border-2-2 -z-10 absolute border-opacity-90 border-[#FEDA5E] h-60 border" style={{ left: '50%' }}></div>
    {/* Award 1 */}
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
      <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline cont hidd">
        <div class="order-1 w-5/12"></div>
        <div class="flex items-center order-1 bg-[#FEDA5E] shadow-xl w-16 h-10 rounded-full">
          <h1 class="mx-auto font-semibold text-lg text-white">12:00</h1>
        </div>
        <div class="order-1 rounded-lg w-5/12 px-6 py-4">
          <p class=" text-xl relative lg:left-20 font-semibold leading-snug tracking-wide text-white text-opacity-100 flex items-center justify-end gap-2">
            End of The Hackathon.
          </p>
        </div>
      </div>
      {/* Award 2 */}
      <div class="mb-8 flex justify-between items-center w-full right-timeline cont hidd"> 
        <div class="order-1 w-5/12"></div>
        <div class="flex items-center order-1 bg-[#0061a8] shadow-xl w-16 h-10 rounded-full">
          <h1 class="mx-auto font-semibold text-lg text-white">03:00</h1>
        </div>
        <div class="order-1 rounded-lg w-5/12 px-6 py-4">
          <p class="text-xl relative lg:right-20 font-semibold leading-snug tracking-wide text-[#0061a8] text-opacity-100 flex items-center justify-start gap-2">
            Pitching.
          </p>
        </div>
      </div>
  </div>
  )
}

export default Day2