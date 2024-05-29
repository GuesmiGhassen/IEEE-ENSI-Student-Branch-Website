import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./Test";
import cn from "./Cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
export default function Calendar() {
  const eventss = [
    {
      date: [27, 28],
      month: 9,
      year: 2023,
      title: "IEEEXtreme 17.0",
      code: '#FAA41A',
      colorClass: "bg-[#FAA41A] text-white",
      imagesrc: [
        'XTREME17.0/Img1_truajg.jpg',
        'XTREME17.0/Img3_ylb2kq.jpg',
        'XTREME17.0/Img4_l8jzzn.jpg',
        'XTREME17.0/Img5_wvdqkl.jpg',
        'XTREME17.0/Img6_szl9rm.jpg',
        'XTREME17.0/Img7_pvnhum.jpg',
        'XTREME17.0/Img8_b2jlqq.jpg',
        'XTREME17.0/Img9_pe7zj8.jpg',
        'XTREME17.0/Img10_thwdq0.jpg',
        'XTREME17.0/Img11_ccaxfc.jpg',
        'XTREME17.0/Img12_t1fsaz.jpg',
        'XTREME17.0/Img13_rmvg5u.jpg',
        'XTREME17.0/Img14_yazdrw.jpg',
        'XTREME17.0/Img15_lxnwdx.jpg',
        'XTREME17.0/Img16_jo9no3.jpg',
        'XTREME17.0/Img17_b1f3eo.jpg'
      ]
    },{
      date:[25],
      month:9,
      year:2023,
      title: "PinkIt 5.0",
      code:'#FC69BA',
      colorClass: "bg-[#FC69BA] text-white",
      imagesrc: [
        'Pinkit/Img1_gn8w1q.jpg',
        'Pinkit/Img2_hsrxos.jpg',
        'Pinkit/Img3_sf5rt9.jpg',
        'Pinkit/Img4_zlyksr.jpg',
        'Pinkit/Img5_jtgklk.jpg',
        'Pinkit/Img6_wzfxwz.jpg',
        'Pinkit/Img7_y6b09x.jpg',
        'Pinkit/Img8_ll1bfk.jpg',
        'Pinkit/Img9_ccf9nj.jpg',
        'Pinkit/Img10_jqbxp9.jpg',
        'Pinkit/Img11_fsqhnq.jpg',
        'Pinkit/Img12_eojbis.jpg',
      ]
    },{
      date:[8],
      month:9,
      year:2023,
      title: "IEEEDAY",
      code:'rgb(59 130 246 / var(--tw-bg-opacity))',
      colorClass: "bg-blue-500 text-white",
      imagesrc:[
      'IEEEDAY/Img1_fsib2f.jpg',
      'IEEEDAY/Img2_tuu2wk.jpg',
      'IEEEDAY/Img3_cyb36a.jpg',
      'IEEEDAY/Img4_rdjkao.jpg',
      'IEEEDAY/Img5_dwaugi.jpg',
      'IEEEDAY/Img6_d8oxcm.jpg',
      'IEEEDAY/Img7_sf9rpk.jpg',
      'IEEEDAY/Img8_aekvdy.jpg',
      'IEEEDAY/Img9_pdvgnf.jpg',
      'IEEEDAY/Img10_cfpnzi.jpg',
      'IEEEDAY/Img11_u44qzn.jpg',
      'IEEEDAY/Img12_gxbifm.jpg',
      'IEEEDAY/Img13_xqrrt2.jpg',
      'IEEEDAY/Img14_escaqg.jpg',
      'IEEEDAY/Img15_ov8gvx.jpg',
      'IEEEDAY/Img16_rnzpxq.jpg',
      'IEEEDAY/Img17_sawh7u.jpg',
      'IEEEDAY/Img18_ournxy.jpg',
      'IEEEDAY/Img19_lzu7kl.jpg',
      'IEEEDAY/Img20_zl1jdy.jpg'
    ],
    },{
      date:[8],
      month:8,
      year:2023,
      title: "Launch Day",
      code:'red-800',
      colorClass: "bg-red-700 text-white",
      imagesrc: [
        'LaunchDay/Img1_mla9e3.jpg',
        'LaunchDay/Img2_fyt64w.jpg',
        'LaunchDay/Img3_efzt39.jpg',
        'LaunchDay/Img4_rwnqh0.jpg',
        'LaunchDay/Img5_facdig.jpg',
        'LaunchDay/Img6_iaslnb.jpg',
        'LaunchDay/Img7_obw5hy.jpg',
        'LaunchDay/Img8_bf6p6p.jpg'
      ]  
    },{
      date:[18,19],
      month:1,
      year:2023,
      title: "GODS 2.0",
      code:'#4A8BD2',
      colorClass: "bg-[#4A8BD2] text-white",
      imagesrc: [
        'GODS2.0/Img1_g55lfg.jpg',
        'GODS2.0/Img2_ackmal.jpg',
        'GODS2.0/Img3_okjg2w.jpg',
        'GODS2.0/Img4_xagnz2.jpg',
        'GODS2.0/Img5_bpub0t.jpg',
        'GODS2.0/Img6_laq48f.jpg',
        'GODS2.0/Img7_abmxax.jpg'
      ]  
    },{
      date:[21,22],
      month:9,
      year:2022,
      title: "IEEEXtreme 16.0",
      code:'#FAA41A',
      colorClass: "bg-[#FAA41A] text-white",
      imagesrc:[
        'XTREME16.0/Img1_oiucir.jpg',
        'XTREME16.0/Img2_nnbg4e.jpg',
        'XTREME16.0/Img3_n2lfgn.jpg',
        'XTREME16.0/Img4_wwdylm.jpg',
        'XTREME16.0/Img5_hqtn7x.jpg',
        'XTREME16.0/Img6_tc1pu8.jpg',
        'XTREME16.0/Img7_t78dv1.jpg',
        'XTREME16.0/Img8_uyaknd.jpg',
        'XTREME16.0/Img9_cfyrot.jpg',
        'XTREME16.0/Img10_pn3li6.jpg',
        'XTREME16.0/Img11_f06kun.jpg',
        'XTREME16.0/Img12_hzigjg.jpg'
      ]
    },{
      date:[19,20,21],
      month:11,
      year:2022,
      title: "TSYP X",
      code:'#5C51A6',
      colorClass: "bg-[#5C51A6] text-white",
      imagesrc:[
        'TSYPX/Img1_ttngzl.jpg',
        'TSYPX/Img2_hdwn9a.jpg',
        'TSYPX/Img3_c1f0h0.jpg',
        'TSYPX/Img4_mntsi2.jpg',
        'TSYPX/Img5_ltpdae.jpg',
        'TSYPX/Img6_eavxzd.jpg',
        'TSYPX/Img7_zryuto.jpg',
        'TSYPX/Img8_ld0cks.jpg',
        'TSYPX/Img9_oogww9.jpg',
        'TSYPX/Img10_irrdk2.jpg',
        'TSYPX/Img11_ndxl88.jpg',
        'TSYPX/Img12_ovvudp.jpg'
      ]
    },
  ];
  
  eventss.forEach(event => {
    event.imagesrc = event.imagesrc.map(imageName => `https://res.cloudinary.com/dvw61yp2y/image/upload/${imageName}`);
  });
  const defaultDate = dayjs();
  const [events] = useState({});
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(defaultDate);
  const [selectDate, setSelectDate] = useState(defaultDate);
  return (
    <div className="cont hidd">
    <div className="flex bg-blue-50 md:justify-between border mt-5 rounded-xl p-4 gap-75 sm:w-1/2 mx-auto items-center sm:flex-row flex-col-reverse">
      <div className="w-200 h-200 md:pr-12 md:border-r-2">
        <div className="flex relative justify-between items-center md:w-auto w-80">
          <h1 className="select-none font-semibold">
            {months[today.month()]}, <br /> {today.year()}
          </h1>
          <div className="flex gap-4 items-center ">
            <GrFormPrevious
              className="w-8 h-8 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className=" cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(currentDate);
              }}
            >
            </h1>
            <GrFormNext
              className="w-8 h-8 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 md:w-auto w-80">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className=" grid grid-cols-7 md:w-auto w-80">
          {/* Mark the date that you want*/} 
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth}, index) => {
              const dateStr = date.toDate().toDateString();
              // const dateEvents = events[dateStr] || [];

              // Find the date-specific data, if it exists
              const dateInfo = eventss.find((data) =>
                data.date.includes(date.date()) &&
                data.month === date.month() &&
                data.year === date.year()
              );

              return (
                <div
                  key={index}
                  className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      selectDate.toDate().toDateString() === dateStr ? "bg-blue-800 text-white" : "",
                      dateInfo ? dateInfo.colorClass : "", // Apply custom class if it exists
                      "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                    )}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
      {/* Mark the date that you want*/} 
      
      <div className="h-[100%] relative md:mb-0 mb-10 md:pb-0 pb-5 md:mr-4 mr-0 md:border-b-0 border-b-2">
          <h1 className="font-semibold text-base">
            Events on {selectDate.toDate().toDateString()}
          </h1>
          {events[selectDate.toDate().toDateString()] && (
            <ul className="list-disc text-gray-700">
              {events[selectDate.toDate().toDateString()].map(
                (eventName, index) => (
                  <li key={index}>{eventName}</li>
                )
              )}
            </ul>
          )}
        {eventss.map((event, index) => {
          if (
            selectDate.month() === event.month &&
            event.date.includes(selectDate.date()) &&
            selectDate.year() === event.year
          ) {
            return (
              <div key={index}>
                <div className="mt-4 text-red-600 font-semibold text-base flex gap-2 items-center" style={{ color: event.code }}>
                  <FontAwesomeIcon icon={faCircle} size="lg" className="text-sm"/> {event.title}
                </div>
              </div>
            );
          }
          return null;
        })}
          {eventss.every(event => 
            selectDate.year() !== event.year || 
            selectDate.month() !== event.month || 
            !event.date.includes(selectDate.date())
          ) && (
            <div className="mt-4 text-blue-600 font-semibold text-base">
              Pick a date and embark<br /> on an adventure in our<br /> world of memories.
            </div>
          )}
      </div>
      
      
    </div>
    {eventss.map((event, index) => {
      if (
        selectDate.month() === event.month &&
        event.date.includes(selectDate.date()) &&
        selectDate.year() === event.year
      ) {
        return (
          <div key={index}>
          <h1 className="md:text-3xl text-[22px] font-semibold text-center text-[#253C6A] uppercase pt-10">{event.title}</h1>
          <div className="mx-auto custom-line md:mt-0 -mt-1 bg-red-800 w-28 md:h-1.5 h-[0.25rem] relative"></div>
          <div className="mt-6 mx-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {event.imagesrc.map((image, imageIndex) => (
              <div key={imageIndex} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-100">
                  <img
                    src={image}
                    alt={event.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        );
      }
      return null;
    })}

  </div>
  );
}
