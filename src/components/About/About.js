import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "../About/AboutElement";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/shobhit1812/Shobhit-Nautiyal-Portfolio/main/Assets/Images/about.jpg"
            alt="Shobhit Photo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Shobhit Nautiyal</strong> I am 22 years old , I was Born in Rudraprayag , 18 Dec 2000 and My personality Easy going person and easy to find a new friend. I Am Very Interested In The Creative Field , Being A Developer & Designer Is One Of My Life Goals, With A Talent In This Field I Want To Always Learn New Things And Strengthen Every Process.
          </div>
          <div className="AboutBio tagline2">
          And I am a student of Institute of Technology, Gopeshwar. I learn on Web Development , UI / UX Design , and DSA.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;