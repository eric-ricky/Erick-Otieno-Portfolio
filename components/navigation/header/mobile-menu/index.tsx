import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction } from 'react';
import { navItems } from '../nav-data';

interface IMobileMenu {
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<IMobileMenu> = ({ setMenuIsOpen }) => {
  const router = useRouter();
  return (
    <nav
      className={`h-screen w-full bg-slate-50 px-4 py-6 lg:hidden flex flex-col justify-center items-center`}
    >
      {navItems.map((item, index) => (
        <li
          onClick={() => setMenuIsOpen(false)}
          key={index}
          className="list-none px-4 py-6"
        >
          <Link href={item.link}>
            <a
              className={`${
                router.asPath === item.link ? 'text-primary' : 'text-black'
              } text-4xl text-center w-full rounded-md dark:text-gray-300 hover:text-primary focus:text-primary focus:outline-none dark:focus:bg-trueGray-700`}
            >
              {item.label}
            </a>
          </Link>
        </li>
      ))}
    </nav>
  );
};

export default MobileMenu;
