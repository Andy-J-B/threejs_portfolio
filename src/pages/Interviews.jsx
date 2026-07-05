import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { interviews } from "../constants/interviews";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

const InterviewCard = ({ interview }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: interview.color,
        color: interview.textColor,
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={interview.date}
      iconStyle={{ background: interview.color }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <span className="text-white text-lg font-bold">
            {interview.company.charAt(0)}
          </span>
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {interview.company}
        </h3>
        <p className="text-white text-[16px] font-semibold opacity-80">
          {interview.position}
        </p>
      </div>

      <div className="mt-5 space-y-4">
        {interview.sections.map((section, idx) => (
          <div key={idx}>
            <h4 className="text-[15px] font-bold uppercase tracking-wider opacity-90 mb-2">
              {section.title}
            </h4>
            {section.items && (
              <ul className="list-disc ml-5 space-y-2">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-white-100 text-[13px] pl-1 tracking-wider leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.content && (
              <p className="text-white-100 text-[13px] tracking-wider leading-relaxed mb-1">
                {section.content}
              </p>
            )}
            {section.answer && (
              <div className="mt-2 pl-3 border-l-2 border-white/30">
                <p className="text-white text-[12px] font-semibold italic opacity-80">
                  My answer: {section.answer}
                </p>
              </div>
            )}
            {section.followUp && (
              <p className="text-white-100 text-[13px] tracking-wider leading-relaxed mt-2">
                Follow-up: {section.followUp}
              </p>
            )}
            {section.code && (
              <pre className="mt-2 p-3 bg-black/30 rounded text-[12px] font-mono overflow-x-auto">
                <code>{section.code}</code>
              </pre>
            )}
          </div>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Interviews = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="max-w-7xl mx-auto relative z-0 pt-28">
        <div className="c-space">
          <p className={`${styles.sectionSubText} text-center`}>
            My interview memories
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Interviews.
          </h2>
        </div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {interviews.map((interview) => (
              <InterviewCard
                key={interview.id}
                interview={interview}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Interviews;
