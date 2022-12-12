import GitHubIcon from '../../ui/icons/github';
import InstagramIcon from '../../ui/icons/instagram';
import LinkedInIcon from '../../ui/icons/linkedin';
import TwitterIcon from '../../ui/icons/twitter';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-100 via-white to-slate-100">
      <div className="container mx-auto py-10 px-6 flex flex-col lg:flex-row  justify-center space-y-4 lg:space-y-0">
        <div className="lg:fixed lg:bottom-10 lg:left-12 flex lg:flex-col items-center justify-center gap-4 lg:gap-10">
          <GitHubIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />

          <div className="lg:flex hidden h-44 w-[0.02rem] bg-slate-700"></div>
        </div>

        <p className="text-center">Designed & Build By Eric Ricky</p>

        <div className="lg:fixed lg:bottom-10 lg:right-0 social hidden lg:flex flex-col items-center gap-10">
          <p className="text-center lg:rotate-90 lg:mb-16">
            Email: ericricky200@gmail.com
          </p>

          <div className="h-44 w-[0.02rem] bg-slate-700"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
