import { ChevronRightIcon } from '@heroicons/react/outline';

const AboutMe = () => {
  return (
    <section id="about" className="flex items-center py-28">
      <div className="container mx-auto p-8 md:px-28 lg:px-44">
        <div className="flex items-center space-x-2 pb-10">
          <h2 className="headingsm md:headingsm">About Me</h2>
          <span className="bg-green-700 w-56 h-[0.02rem]"></span>
        </div>

        <div className="lg:w-[55%] body">
          <p className="mt-4">
            Hello, my name is Eric Ricky and I love creating digital products.
            My interest in programming grew out of curiosity. Growing up, I was
            always fascinated by the world of technology and the endless
            possibilities it offered.
          </p>
          <p className="mt-4">
            My late father was a software engineer. He instilled in me a love
            for{' '}
            <span className="text-green-400 underline">problem solving</span>{' '}
            and <span className="text-green-400 underline">creativity</span> .
            Although he is no longer with us, his influence and guidance
            continue to inspire me everyday as I pursue my passion for
            programming.
          </p>
          <p className="mt-4">
            I’ve been using my skills to build websites for freelance clients
            and also working on personal projects. I’m constantly pushing myself
            to learn new technologies and stay up-to-date with the latest
            industry trends, and I’m always looking for new challenges and
            opportunities to showcase my skills.
          </p>
          <p className="mt-4">
            Here are a few technologies I’ve been working with recently:
          </p>

          <div className="flex items-center space-x-10 mt-4">
            <ul className="flex flex-col space-y-2">
              {['JavaScript (ES6+)', 'React.js', 'Next.js'].map((lang) => (
                <li
                  key={lang}
                  className="flex items-center space-x-2 text-purple-500"
                >
                  <ChevronRightIcon className="h-4 text-purple-400" />
                  <span>{lang}</span>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col space-y-2">
              {['Typescript', 'Firebase', 'Wordpress'].map((lang) => (
                <li
                  key={lang}
                  className="flex items-center space-x-2 text-purple-700"
                >
                  <ChevronRightIcon className="h-4 text-purple-400" />
                  <span>{lang}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
