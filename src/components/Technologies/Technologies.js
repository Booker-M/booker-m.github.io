import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { SiUnity, SiUnrealengine, SiCsharp, SiJavascript, SiPython, SiJava, SiCplusplus } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br /><br /><br />
    <SectionTitle>Technology</SectionTitle>
    <SectionText>
      I've worked with a wide range of technologies.
    </SectionText>
    <List>
    <ListItem>
      <span>
        <SiUnity size="2.5rem" />
        <SiUnrealengine size="2.5rem" style={{marginLeft: '1.25rem'}}/>
      </span>
        <ListContainer>
          <ListTitle>Game Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            Unity and Unreal Engine
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <span>
        <DiReact size="3rem" />
        <DiFirebase size="3rem" style={{marginLeft: '1.25rem'}}/>
      </span>
        <ListContainer>
          <ListTitle>Full-Stack</ListTitle>
          <ListParagraph>
            Experience with <br />
            Network Infrastructure and React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <span>
        <SiCsharp size="2.5rem" />
        <SiJavascript size="2.5rem" style={{marginLeft: '1.25rem'}}/>
        <SiPython size="2.5rem" style={{marginLeft: '1.25rem'}}/>
        <SiJava size="2.5rem" style={{marginLeft: '1.25rem'}}/>
        <SiCplusplus size="2.5rem" style={{marginLeft: '1.25rem'}}/>
      </span>
        <ListContainer>
          <ListTitle>Coding Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Java, C#, JavaScript, CSS, HTML
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
