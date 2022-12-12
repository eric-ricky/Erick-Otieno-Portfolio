import { ExternalLinkIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:bg-slate-400 flex items-center py-20"
    >
      <div className="container mx-auto px-8 md:px-32 lg:px-56">
        <div className="flex items-center space-x-2 pb-10">
          <h2 className="headingsm md:headingsm">Some of my projects </h2>
          <span className="bg-green-700 w-56 h-[0.02rem]"></span>
        </div>

        <div className="flex flex-col space-y-16 w-full">
          <div className="grid grid-cols-12 items-center w-full py-8 md:pb-20">
            <div className="col-span-12 lg:col-span-5">
              <div className="relative w-full lg:w-[115%] h-80 rounded-md overflow-hidden shadow-2xl rounded-tr-[2rem] rounded-bl-[2rem]">
                <div className="absolute top-0 left-0 z-50 w-full h-full bg-[rgba(0,0,250,0.05)] hover:bg-[rgba(0,0,250,0.25)] cursor-pointer rounded-tr-[2rem] rounded-bl-[2rem]">
                  .
                </div>
                <Image
                  src="/images/gallaf.jpeg"
                  alt="Project Gallaf"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="rounded-tr-[2rem] rounded-bl-[2rem]"
                />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 z-50 mt-14 lg:mt-0">
              <div className="text-right mb-4">
                <p className="text-primary">Featured Project</p>
                <p className="headingsm md:headingsm">Gallaf Marketplace</p>
              </div>

              <div className="bg-gradient-to-l from-slate-100 via-slate-100 to-slate-50 shadow-md p-8 rounded-md flex items-center space-x-4 w-full text-right">
                A web-based marketplace that connects buyers and sellers of
                freelance accounts. This platform provides a safe and secure way
                for users to buy and sell these accounts, allowing them to
                easily expand their business or find the right account for their
                needs.
              </div>

              <div className="flex items-center justify-end space-x-4 mt-4 text-right">
                <p className="text-gray-500">Firebase</p>
                <p className="text-gray-500">Tailwindcss</p>
                <p className="text-gray-500">ReactJS</p>
                <p className="text-gray-500">NextJS</p>
              </div>

              <div className="flex justify-end mt-4">
                <a
                  href="https://gallaf.vercel.app/"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 cursor-pointer hover:underline"
                >
                  <ExternalLinkIcon className="h-6" />
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 items-center w-full py-8">
            <div className="col-span-12 lg:col-span-5 z-50">
              <div className="w-full lg:w-[135%]">
                <div className="mb-4">
                  <p className="text-primary">Featured Project</p>
                  <p className="headingsm md:headingsm">Cullen Networks</p>
                </div>

                <div className="bg-gradient-to-r from-slate-100 via-slate-100 to-slate-50 p-8 rounded-md flex items-center space-x-4 w-full text-left">
                  A platform that provides an easy way for farmers and food
                  providers to find and access the cold storage they need to
                  preserve their crops and products, ensuring that they stay
                  fresh and high-quality.
                </div>

                <div className="flex items-center space-x-4 mt-4">
                  <p className="text-gray-500">Firebase</p>
                  <p className="text-gray-500">Tailwindcss</p>
                  <p className="text-gray-500">ReactJS</p>
                  <p className="text-gray-500">NextJS</p>
                </div>

                <div className="flex mt-4">
                  <a
                    href="https://cullen-networks-providers-app.vercel.app/"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 cursor-pointer hover:underline"
                  >
                    <ExternalLinkIcon className="h-6" />
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="relative w-full lg:w-[85%] ml-auto h-80 rounded-md overflow-hidden mt-14 lg:mt-0 shadow-2xl rounded-tr-[2rem] rounded-bl-[2rem]">
                <div className="absolute top-0 left-0 z-20 w-full h-full bg-[rgba(0,0,250,0.05)] hover:bg-[rgba(0,0,250,0.25)] cursor-pointer rounded-tr-[2rem] rounded-bl-[2rem]"></div>
                <Image
                  src="/images/cullen.jpeg"
                  alt="hero grocery"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="rounded-tr-[2rem] rounded-bl-[2rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
