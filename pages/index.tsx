import Head from 'next/head';
import PrimaryLayout from '../components/layouts/primary';
import AboutMe from '../components/sections/home/about';
import Contact from '../components/sections/home/contact';
import Hero from '../components/sections/home/hero';
import Projects from '../components/sections/home/projects';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Eric Ricky</title>
        <meta
          name="description"
          content="Eric Ricky is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences."
        />
      </Head>

      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </>
  );
};

export default Home;

Home.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;
