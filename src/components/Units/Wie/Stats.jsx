import React from 'react'
const stats = [
    {
      id: "stats-1",
      title: "Members",
      value: "150+",
    },
    {
      id: "stats-2",
      title: "Workshops",
      value: "8+",
    },
    {
      id: "stats-3",
      title: "Events",
      value: "4+",
    },
  ];
function Stats() {
  return (
    <div className='bg-white flex justify-center pt-10 items-center'>
        <section className={`flex justify-center items-center md:gap-10 gap-4 md:flex-row cont hidd flex-wrap sm:mb-20 mb-6`}>
            {stats.map((stat) => (
                <div key={stat.id} className={`flex-1 flex md:justify-start justify-center items-center md:flex-row flex-col m-3`} >
                    <h4 className="font-semibold md:pl-0 pl-4 md:text-4xl text-3xl xs:leading-[53.16px] leading-[43.16px] text-[#A64D79]">
                    {stat.value}
                    </h4>
                    <p className=" font-semibold text-[#595959] md:text-2xl text-xl xs:leading-[26.58px] leading-[21.58px] uppercase ml-3">
                    {stat.title}
                    </p>
                </div>
            ))}
        </section>
    </div>
  )
}

export default Stats