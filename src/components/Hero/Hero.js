import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Booker's Portfolio
      </SectionTitle>
      <SectionText>
      I'm a Software Engineer on the Network Infrastructure team at Oracle Cloud Infrastructure. I graduated Summa Cum Laude from Loyola Marymount University with a degree in Computer Science and a minor in Interactive, Gaming, & Immersive Media.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:bookerjmartin@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;