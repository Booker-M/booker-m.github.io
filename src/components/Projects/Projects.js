import React from 'react';

import { BlogCard, GameCard, FilterCard, CardInfo, ExternalLinks, GridContainer, GameContainer, FilterContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { games, webGames, webApps, filters } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <HeaderThree title>Games</HeaderThree>
    <GridContainer>
      {games.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <br />
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Visit</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <GameContainer>
      {webGames.map(({id, image, title, description, tags, source, visit}) => (
        <GameCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <br />
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Visit</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </GameCard>
      ))}
    </GameContainer>
    <HeaderThree title>Augmented Reality Filters</HeaderThree>
    <FilterContainer>
      {filters.map(({id, video, title, description, tags, source, visit}) => (
        <FilterCard key={id}>
          <video 
            src={video}
            autoPlay
            muted
            loop
            width='100%'
            style={{borderRadius: '10px'}}
          />
          <TitleContent>
            <HeaderThree>{title}</HeaderThree>
          </TitleContent>
          <UtilityList>
            <ExternalLinks href={visit}>Visit</ExternalLinks>
          </UtilityList>
        </FilterCard>
      ))}
    </FilterContainer>
    <CardInfo>Created a collection of filters using Snapchat’s Lens Studio, combining machine learning, augmented reality, and 3D modeling and animation to place thousands of users in immersive environments.</CardInfo>
          <div>
            <br />
            <TitleContent>Stack</TitleContent>
            <TagList style={{justifyContent: 'center'}}>
              <Tag style={{padding: '0px 3em'}}>Lens Studio</Tag>
              <Tag style={{padding: '0px 3em'}}>JavaScript</Tag>
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href='https://lensstudio.snapchat.com/creator/M8l_OTWi9GC9QoOzds63uQ'>Creator Profile</ExternalLinks>
          </UtilityList>
    <HeaderThree title>Miscellaneous</HeaderThree>
    <GridContainer>
      {webApps.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <br />
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Visit</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>

);

export default Projects;