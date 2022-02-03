import React from 'react';

import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { HeaderThree} from '../Projects/ProjectsStyles';
import { AcomplishmentsData } from '../../constants/constants';

const Acomplishments = () => (
  <Section id="education">
    <SectionDivider />
    <br /><br /><br />
    <SectionTitle>Education</SectionTitle>
    <HeaderThree title>Loyola Marymount University</HeaderThree>
      <SectionText>Bachelor of Computer Science, May 2022</SectionText>
    <Boxes>
      {AcomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <boxText>{card.text}</boxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
