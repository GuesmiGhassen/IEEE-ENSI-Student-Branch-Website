import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Ghassen from "./Website/Ghassen.jpg";
import Aya from "./Website/Aya.jpg";
import Khalil from "./Website/Khalil.jpg";
import Oussama from "./Website/Oussama.jpg";
import Oumayma from "./Website/Oumayma.jpg";
import Manar from "./Website/Manar.jpg";
import Yassine from "./Website/Yassine.jpg";
import Riadh from "./Website/Riadh.jpg";
import Nassim from "./Website/Nassim.jpg";
import Ahmed from "./External/Ahmed.jpg";
import Aziz from "./External/Aziz.jpg";
import Chayma from "./External/Chayma.jpg";
import Emna from "./External/Emna.jpg";
import Ghaissen from "./External/Ghaissen.jpg";
import Islem from "./External/Islem.jpg";
import Nadhem from "./External/Nadhem.jpg";
import Nour from "./External/Nour.jpg";
import OumaymaHa from "./External/OumaymaHa.jpg";
import Syrine from "./External/Syrine.jpg";
import Zaid from "./External/Zaid.jpg";
import AhmedChak from "./Media/AhmedChak.jpg";
import AhmedTra from "./Media/AhmedTra.jpg";
import Bechir from "./Media/Bechir.jpg";
import Eya from "./Media/Eya.jpg";
import Fakhri from "./Media/Fakhri.jpg";
import Haithem from "./Media/Haithem.jpg";
import Imen from "./Media/Imen.jpg";
import IslemBen from "./Media/IslemBen.jpg";
import Montassar from "./Media/Montassar.jpg";
import Nada from "./Media/Nada.jpg";
import Ons from "./Media/Ons.jpg";
import Rihem from "./Media/Rihem.jpg";
import Yasmine from "./Media/Yasmine.jpg";
import AhmedKa from "./Sponsoring/AhmedKa.jpg";
import Amal from "./Sponsoring/Amal.jpg";
import Amine from "./Sponsoring/Amine.jpg";
import Aymen from "./Sponsoring/Aymen.jpg";
import Chawki from "./Sponsoring/Chawki.jpg";
import Rowaida from "./Sponsoring/Rowaida.jpg";
import Taha from "./Sponsoring/Taha.jpg";
import Wassim from "./Sponsoring/Wassim.jpg";
import Yassmine from "./Sponsoring/Yassmine.jpg";
import vec from "../About/Vector3.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function Team() {
  return (
    <div className="bg-[#f2f2f2] relative top-[-15px] lg:top-0">
      <div className="flex flex-col items-center m-10 relative top-5 lg:top-10 md:pb-0 pb-5 hidd cont">
        <div className="div110 lg:pb-10">
          <h id="titre_gods30" className="lg:ml-3 relative Color">
            MEET OUR OCs
          </h>
          <img src={vec} className="pl-10 lg:w-[250px] w-[260px]" alt="" />
        </div>
      </div>

      <div className="flex items-center justify-around lg:flex-row flex-col lg:gap-0 gap-10 hidd cont">
        <div className="relative top-2 border-2 border-[#feda5e] rounded-xl px-8 pb-16">
          <p className="relative top-8 font-semibold text-xl text-[#1d202b] justify-center flex">
            Website Team
          </p>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper top-14 w-[250px]"
          >
            <SwiperSlide>
              <div>
                <img src={Ghassen} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Guesmi Ghassen
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Aya} alt="" />
                <p className="flex justify-center bg-[#f2f2f2] pt-2 text-[#0061a8] text-lg">
                  Boussaid Aya
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Oumayma} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Riahi Oumayma
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Manar} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Khalifa Manar
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Oussama} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Chaabane Oussama
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Khalil} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Krifi Khalil
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Riadh} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Belgacem Riadh
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Yassine} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Grati Yassine
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Nassim} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Younes Nassim
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="relative top-2 border-2 border-[#feda5e] rounded-xl px-8 pb-16">
          <p className="relative top-8 font-semibold text-xl text-[#1d202b] justify-center flex">
            External Relations Team
          </p>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper top-14 w-[250px]"
          >
            <SwiperSlide>
              <div>
                <img src={Ghaissen} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Sebai Ghaissen
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Emna} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Arous Emna
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Ahmed} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Bouafif Ahmed
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Aziz} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Souid Aziz
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Chayma} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Chouikh Chayma
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Islem} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Nasri Islem
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Nadhem} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Benhadjali Nadhem
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Nour} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Jmal Nour
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={OumaymaHa} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Hammami Oumayma
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Syrine} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Hammami Syrine
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Zaid} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Chibani Zaid
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="relative top-2 border-2 border-[#feda5e] rounded-xl px-8 pb-16">
          <p className="relative top-8 font-semibold text-xl text-[#1d202b] justify-center flex">
            Media Team
          </p>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper top-14 w-[250px]"
          >
            <SwiperSlide>
              <div>
                <img src={Eya} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Methnani Eya
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Rihem} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Trigui Rihem
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Imen} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Bousseta Imen
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={IslemBen} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Ben Salah Islem
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={AhmedChak} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Chakroun Ahmed
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={AhmedTra} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Trabelsi Ahmed
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Bechir} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Zammouri Bechir
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Fakhri} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Mahfoudh Fakhri Eddine
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Haithem} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Khachlouf Haithem
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Montassar} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Benyoussef Med Montassar
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Nada} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Bouaouaja Nada
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Ons} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Nasri Ons
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Yasmine} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Chamkhi Yasmine
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="relative top-2 border-2 border-[#feda5e] rounded-xl px-8 pb-16">
          <p className="relative top-8 font-semibold text-xl text-[#1d202b] justify-center flex">
            Sponsoring Team
          </p>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper top-14 w-[250px]"
          >
            <SwiperSlide>
              <div>
                <img src={Wassim} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Kharrat Wassim
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Rowaida} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Ben Amor Rowaida
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Amal} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Chebil Amal
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={AhmedKa} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Kamoun Ahmed
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Amine} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Friwi Med Amine
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Aymen} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Masmoudi Aymen
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Chawki} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Ben Jemaa Chawki
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Taha} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Naguez Taha
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Yassmine} alt="" />
                <p className="flex justify-center pt-2 bg-[#f2f2f2] text-[#0061a8] text-lg">
                  Riabi Yasmine
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
