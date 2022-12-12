import { ArrowRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useHeaderContext } from '../../../../lib/context/header-context';

const Hero = () => {
  const headerCtx = useHeaderContext();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    initialInView: true,
  });

  useEffect(() => {
    if (!inView) {
      headerCtx?.setIsWhite(true);
      console.log('not in view');
      return;
    }

    headerCtx?.setIsWhite(false);
    console.log('is in view');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 md:min-h-[70vh] h-full flex items-center"
    >
      <div className="container mx-auto p-8 md:px-28 lg:px-44">
        <div className="py-28 md:py-44">
          <p className="headingxs pb-4">Hi, my name is</p>
          <h1 className="headingsm lg:headinglg flex flex-col">
            <span>Erick Ricky.</span>
            <span className="text-gray-700">I build for the web.</span>
          </h1>
          <p className="body lg:w-[40%] mt-4">
            I’m a front-end developer. I specialize in building responsive and
            dynamic websites that are both user friendly and visually appealing.
            I’m always looking for new challenges and opportunities to showcase
            my skills.
          </p>

          <div className="mt-8 flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0  md:items-center w-full z-50">
            <Link href="#projects">
              <a className="bg-[#001E00] py-2 px-4 hover:bg-slate-800 text-white rounded-md flex items-center space-x-2 w-fit">
                <span>Some of my projects</span>
                <ArrowRightIcon className="h-6" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
