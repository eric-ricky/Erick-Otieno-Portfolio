import dynamic from 'next/dynamic';
import Head from 'next/head';
import Hearder from '../../navigation/header';

const Footer = dynamic(() => import('../../navigation/footer'));

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Eric Ricky</title>
        <meta
          name="description"
          content="Eric Ricky is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences."
        />
      </Head>

      <div className="body min-h-screen flex flex-col">
        <Hearder />
        <main className="flex-grow bg-brandwhite">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
