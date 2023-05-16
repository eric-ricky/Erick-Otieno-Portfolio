import PrimaryLayout from '../components/layouts/primary';
import AboutMe from '../components/sections/home/about';
import Contact from '../components/sections/home/contact';
import Hero from '../components/sections/home/hero';
import Projects from '../components/sections/home/projects';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </>
  );
};

export default Home;

Home.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
