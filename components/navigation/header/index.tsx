import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useHeaderContext } from '../../../lib/context/header-context';
import Logo from '../../ui/brand/logo';
import { navItems } from './nav-data';

const MobileMenu = dynamic(() => import('./mobile-menu'));

const Hearder = () => {
  const headerCtx = useHeaderContext();
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition ease-in-out duration-300 ${
        headerCtx?.isWhite || menuIsOpen
          ? 'bg-white py-0 shadow-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto flex flex-wrap items-center justify-between lg:justify-between xl:px-0 p-4">
        {/* logo */}
        <Logo />

        <div className="flex items-center">
          {/* menu */}
          <div className="hidden lg:flex items-center">
            {navItems.map((item, index) => (
              <li className="mr-2" key={index}>
                <Link href={item.link} prefetch={false}>
                  <a
                    className={`inline-block px-4 py-2 text-md font-medium no-underline rounded-md dark:text-gray-200 hover:text-teal-900 focus:text-teal-900 ${
                      router.asPath === item.link
                        ? 'text-teal-900'
                        : 'text-gray-800'
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </div>

          {/* cta */}
          <div className="hidden lg:flex space-x-5">
            <a
              href="/files/erickresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-branddark text-white hover:opacity-70 rounded-md md:ml-5 flex items-center"
            >
              Resume
            </a>
          </div>

          {/* mobile humberger */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuIsOpen((prev) => !prev)}
          >
            {menuIsOpen ? (
              <XIcon className="h-6" />
            ) : (
              <MenuAlt3Icon className="h-6" />
            )}
          </div>
        </div>
      </nav>

      {/* mobile items */}
      {menuIsOpen && <MobileMenu setMenuIsOpen={setMenuIsOpen} />}
    </header>
  );
};

export default Hearder;
