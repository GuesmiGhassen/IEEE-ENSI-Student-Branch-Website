import Section from "./Section";
import Heading from "./Heading";
import { Gradient } from "./design/Timeline";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoGameControllerOutline } from "react-icons/io5";

const Timeline = () => {
  return (
    <Section crosses id="Program">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]">
        <div className="flex justify-center"> 
          <Heading title="Program" text="Delve into our timeline and workshops" />
        </div>
        

        <div className="relative">
          <div className="relative z-1 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20">
            <div>
              <VerticalTimeline lineColor="rgb(255 255 255 / 0.1)">
                <VerticalTimelineElement
                  className={``}
                  contentStyle={{
                    background: "rgb(255 255 255 / 0.1)",
                    color: "",
                    borderRadius: "10px",
                  }}
                  date="8.30"
                  iconStyle={{
                    background: "rgb(255 255 255 / 0.1)",
                    color: "#fff"
                  }}
                  icon={<IoGameControllerOutline />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Mot d'ouverture
                  </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className={``}
                  contentStyle={{
                    background: "rgb(255 255 255 / 0.1)",
                    color: "#fff",
                    borderRadius: "20px",
                  }}
                  date="9:40"
                  iconStyle={{
                    background: "rgb(255 255 255 / 0.1)",
                    color: "#fff",
                  }}
                  icon={<IoGameControllerOutline />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Pause café
                  </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className={``}
                  contentStyle={{
                    background: "rgb(255 255 255 / 0.1)",
                    color: "#fff",
                    borderRadius: "20px",
                  }}
                  date="10:00"
                  iconStyle={{
                    background: "rgb(255 255 255 / 0.1)",
                    color: "#fff",
                  }}
                  icon={<IoGameControllerOutline />}
                >
                  <h3 className="vertical-timeline-element-title">Workshops</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className={``}
                  contentStyle={{
                    background: "rgb(255 255 255 / 0.1)",
                    color: "#fff",
                    borderRadius: "20px",
                  }}
                  date="12:15"
                  iconStyle={{
                    background: "rgb(255 255 255 / 0.1)",
                    color: "#fff",
                  }}
                  icon={<IoGameControllerOutline />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Pause déjeuner{" "}
                  </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className={``}
                  contentStyle={{
                    background: "rgb(255 255 255 / 0.1)",
                    color: "#fff",
                    borderRadius: "20px",
                  }}
                  date="13.00"
                  iconStyle={{
                    background: "rgb(255 255 255 / 0.1)",
                    color: "#fff",
                  }}
                  icon={<IoGameControllerOutline />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Conférence et remise des prix{" "}
                  </h3>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Timeline;
