import React, { ReactNode } from 'react';

interface IMainModalContainer {
  children: ReactNode;
}

const MainModalContainer: React.FC<IMainModalContainer> = ({ children }) => {
  return (
    <section className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.7)] grid place-items-center z-[999]">
      {children}
    </section>
  );
};

export default MainModalContainer;
