import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero/>
        {/* <BgAnimation /> */}
        <div style={{padding: '6rem'}}>
        <img src='/images/Booker.png' style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          overflow: 'hidden',
          borderRadius: '10px'
        }}/>
        </div>
      </Section>
      <Projects />
      <Timeline />
      <Acomplishments />
      <Technologies />
    </Layout>
  );
};

export default Home;
