import React from "react";
import {
  SkillsContainer,
  SkillsH1,
  SkillsCards,
  Card,
  Img,
} from "./SkillsElements";

import python from "../../images/python.svg";
import javascript from "../../images/javascript.svg";
import react from "../../images/react.svg";
import redux from "../../images/redux.svg";
import nodejs from "../../images/nodejs-icon.svg";
import mongodb from "../../images/mongodb.svg";
const Skills = () => {
  return (
    <>
      <SkillsContainer>
        <SkillsH1>Skills</SkillsH1>
        <SkillsCards>
          <Card>
            <Img src={python} />
          </Card>
          <Card>
            <Img src={javascript} />
          </Card>
          <Card>
            <Img src={react} />
          </Card>
          <Card>
            <Img src={redux} />
          </Card>
          <Card>
            <Img src={nodejs} />
          </Card>
          <Card>
            <Img src={mongodb} />
          </Card>
        </SkillsCards>
      </SkillsContainer>
    </>
  );
};

export default Skills;
