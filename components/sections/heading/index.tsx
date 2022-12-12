import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

interface IHeading {
  title: string;
  link?: string;
  btnText?: string;
  children?: ReactNode;
}

const Heading: React.FC<IHeading> = ({ title, link, btnText, children }) => {
  const router = useRouter();

  return (
    <section>
      <div className="flex items-center justify-between py-1">
        <h2 className="headingxs md:headingsm">{title}</h2>

        {link && (
          <div
            onClick={() => router.push(link)}
            className="bg-green-50 shadow-md shadow-green-2/50 flex items-center space-x-2 py-1 px-2 hover:bg-green-100 rounded-md cursor-pointer"
          >
            {children}

            <p className="hidden md:inline-block font-medium text-sm py-1 no-underline rounded-md ">
              {btnText}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Heading;
