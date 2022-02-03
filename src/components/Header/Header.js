import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px' }}>
            <DiCssdeck size="3rem"/> <Span>Booker Martin</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#work">
            <NavLink>Experience</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#education">
            <NavLink>Education</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technology</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Booker-M">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/bookerm/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="mailto:bookerjmartin@gmail.com">
          <AiFillMail size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
