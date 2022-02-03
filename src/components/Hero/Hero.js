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
        I’m a senior at Loyola Marymount University studying Computer Science. I have a diverse array of interests, including software engineering, web development, game production, and artificial intelligence. I would value the opportunity to learn from and contribute to an equally passionate team!
      </SectionText>
      <Button onClick={() => window.location = 'mailto:bookerjmartin@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;