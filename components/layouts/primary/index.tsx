import dynamic from 'next/dynamic';
import Hearder from '../../navigation/header';

const Footer = dynamic(() => import('../../navigation/footer'));

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <div className="body min-h-screen flex flex-col">
        <Hearder />
        <main className="flex-grow bg-brandwhite">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
