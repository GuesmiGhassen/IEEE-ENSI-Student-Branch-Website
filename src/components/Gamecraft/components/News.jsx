import Heading from "./Heading";
import Section from "./Section";
import GC2 from '../assets/GC2.jpg';
import GC3 from '../assets/GC3.jpg';
import GC4 from '../assets/GC1.png'
const News = () => {
  return (
    <Section crosses id="News">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl flex justify-center"
          title="Latest News"
        />
        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          <button onClick={() => window.location.href='https://drive.google.com/file/d/1oTZf2B1XfxajCLXOGwacA3yH3Q2BaIdL/view?usp=sharing'}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            >
              <div className="relative flex flex-col min-h-[22rem] pointer-events-none cursor-pointer">
                <img src={GC4} alt="" width={400}/>
                <button onClick={() => window.location.href='https://drive.google.com/file/d/1oTZf2B1XfxajCLXOGwacA3yH3Q2BaIdL/view?usp=sharing'} className="relative z-10 -top-24 lg:-top-28 flex min-w-[120px] items-center justify-center rounded-full border-2 border-[#0061A8] px-6 py-2 text-center text-xl font-semibold transition-all hover:border-[#feda5e]">
                  START NOW
                </button>
              </div>
              
            </button>
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] pointer-events-none">
                <img src={GC3} alt="" width={400}/>
              </div>
              
            </div>
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] pointer-events-none">
                <img src={GC2} alt="" width={400}/>
              </div>
              
            </div>
        </div>
      </div>
    </Section>
  );
};

export default News;
