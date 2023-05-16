import { ArrowRightIcon, ExternalLinkIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const BGOverlay = ({ href }: { href: string }) => (
  <Link
    href={href}
    aria-label="Erick Otieno E-Commerce Project"
    target="_blank"
    rel="noreferrer"
    className="absolute top-0 left-0 z-20 w-full h-full bg-black bg-opacity-25 group hover:bg-opacity-70 duration-150 cursor-pointer lg:rounded-md grid place-items-center"
  >
    <ArrowRightIcon className="w-8 text-white -rotate-45 group-hover:scale-105" />
  </Link>
);

const BlurImage = ({
  styles,
  src,
  alt,
}: {
  styles: string;
  src: string;
  alt: string;
}) => {
  const [isLoading, setIsloading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      onLoadingComplete={() => setIsloading(false)}
      className={`${styles} ${
        isLoading ? 'scale-110 blur-md' : 'scale-100 blur-0'
      }`}
    />
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:bg-slate-400 pt-20 pb-10"
    >
      <div className="container mx-auto px-8 md:px-32">
        <div className="flex items-center space-x-2 pb-10">
          <h2 className="headingsm md:headingsm">Recent projects </h2>
          <span className="bg-green-700 w-56 h-[0.02rem]"></span>
        </div>
      </div>

      <div className="flex flex-col space-y-24 w-full my-10">
        <ProjectEcommerce />
        <ProjectVidawa />
      </div>
    </section>
  );
};

export default Projects;

const ProjectEcommerce = () => (
  <div className="container mx-auto grid grid-cols-12 items-center">
    <div className="col-span-12 lg:col-span-5">
      <div className="relative w-full lg:w-[115%] h-80 md:h-[28rem] lg:rounded-md overflow-hidden shadow-xl group">
        <BGOverlay href="https://shoppy-woocommerce.vercel.app/" />

        <BlurImage
          src="/images/ecommerce.jpg"
          alt="PJ"
          styles="object-cover group-hover:scale-110 duration-200"
        />
      </div>
    </div>

    <div className="col-span-12 lg:col-span-7 z-50 mt-14 lg:mt-0 px-8 md:px-0">
      <div className="text-right mb-4">
        <p className="text-rose-600">Featured Project</p>
        <p className="headingsm md:headingsm">E-Commerce Application</p>
      </div>

      <div className="bg-rose-600 shadow-md p-5 md:p-8 rounded-md flex items-center space-x-4 w-full md:text-right">
        <p className="text-rose-100 md:text-headingxs leading-normal md:leading-loose">
          Experience seamless online shopping with the E-commerce Application,
          showcasing my proficiency in developing robust and user-friendly
          e-commerce platforms. This project incorporates essential features
          like user authentication, product browsing and filtering, cart
          functionality, placing orders, and order tracking.
        </p>
      </div>

      <div className="flex justify-end mt-4">
        <Link
          href="https://shoppy-woocommerce.vercel.app/"
          aria-label="Erick Otieno E-Commerce Project"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 cursor-pointer hover:underline"
        >
          <ExternalLinkIcon className="h-6" />
          <span>Visit Site</span>
        </Link>
      </div>
    </div>
  </div>
);

const ProjectVidawa = () => (
  <div className="container mx-auto grid grid-cols-12 items-center w-full py-8">
    <div className="col-span-12 lg:col-span-5 z-50 px-8 md:px-0">
      <div className="w-full lg:w-[135%]">
        <div className="mb-4">
          <p className="text-rose-600">Featured Project</p>
          <p className="headingsm md:headingsm">Vidawa - Virtual Dr</p>
        </div>

        <div className="bg-[#082f49] p-5 md:p-8 rounded-md flex items-center space-x-4 w-full text-left">
          <p className="text-sky-100 md:text-headingxs leading-normal md:leading-loose">
            Vidawa represents my passion for leveraging technology to enhance
            the field of healthcare. With this project, I aimed to create a web
            platform that provides personalized health advice comparable to that
            of a human doctor, utilizing advanced AI models from OpenAI's API
            endpoints.
          </p>
        </div>

        <div className="flex mt-4">
          <Link
            href="https://vidawa.top/"
            aria-label="Erick Otieno Vidawa Project"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 cursor-pointer hover:underline"
          >
            <ExternalLinkIcon className="h-6" />
            <span>Visit Site</span>
          </Link>
        </div>
      </div>
    </div>

    <div className="col-span-12 lg:col-span-7">
      <div className="relative w-full lg:w-[85%] ml-auto h-80 md:h-[28rem] lg:rounded-md overflow-hidden mt-14 lg:mt-0 shadow-2xl lg:rounded-tr-[2rem] lg:rounded-bl-[2rem] group">
        <BGOverlay href="https://vidawa.top/" />
        {/* <Image
          src="/images/vidawa.ai.jpg"
          alt="Erick Otieno Vidawa Project"
          fill
          className="object-cover group-hover:scale-110 duration-200"
        /> */}

        <BlurImage
          src="/images/vidawa.ai.jpg"
          alt="Erick Otieno Vidawa Project"
          styles="object-cover group-hover:scale-110 duration-200"
        />
      </div>
    </div>
  </div>
);
