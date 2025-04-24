import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { HeaderThree} from '../Projects/ProjectsStyles';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="work">
      <SectionDivider />
      <br /><br /><br />
      <SectionTitle>Experience</SectionTitle>
      <HeaderThree title>Oracle Cloud Infrastructure</HeaderThree>
      <br />
      <text>Santa Clara, CA</text>
      <text>Software Engineer II - Network Infrastructure Team</text>
      <text>March 2024 - Present</text>
      <br />
      <SectionText>
      ● Owned the operational readiness for the dynamic host configuration protocol and zero-touch provisioning of a ground-up datacenter. Created logs, Telemetry metrics, alarms, and runbooks for system health incident diagnosis and resolution. Designed user-friendly Grafana dashboards using MQL queries for Key Performance Indicator visualizations.
      </SectionText>
      <br />
      <SectionText>
      ● Contributed to large-scale infrastructure code and worked on REST APIs to integrate hardware architecture and network monitoring workstreams. Set up the Docker container environment on compute hosts. Fixed critical security vulnerabilities.
      </SectionText>
      <br />
      <SectionText>
      ● Drove design reviews for backend development of a cable validation web portal that provides data center technicians accessible real-time rack and cable setup instructions and feedback.
      </SectionText>
      <br />
      <text>Software Engineer I - Load Balancer Team</text>
      <text>July 2022 - March 2024</text>
      <br />
      <SectionText>
      ● Developed a Python tool to automate software updates for load balancers which redirected network traffic and validated service health. Optimized runtime using multithreading to efficiently update over 15,000 load balancers without customer impact.
      </SectionText>
      <br />
      <SectionText>
      ● Managed an intern in Summer 2024; Scoped project based on intern’s experience and team priorities, drove daily stand-ups to review and debug code, and provided performance evaluations.
      </SectionText>
      <br />
      <SectionText>
      ● Created a Python program using pandas to aggregate business metrics such as monthly bandwidth utilization and perform data analysis. Generated charts for efficiency improvements and quarterly profit reports delivered to key stakeholders including Oracle Cloud VPs.
      </SectionText>
      <HeaderThree title>Dolby Laboratories</HeaderThree>
      <br />
      <text>San Francisco, CA</text>
      <text>Enterprise Application Integrations Intern</text>
      <text>May 2021 - March 2022</text>
      <br />
      <SectionText>
      Designed, implemented, and documented an automated workflow task monitoring system in Informatica using XQuery and REST APIs to eliminate the time IT department spent manually scanning task logs.
      </SectionText>
      {/* <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}>
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer> */}
      {/* <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button">
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons> */}
    </Section>
  );
};

export default Timeline;