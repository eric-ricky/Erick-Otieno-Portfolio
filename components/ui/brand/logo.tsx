import { SparklesIcon } from '@heroicons/react/outline';
import Link from 'next/link';

interface ILogo {}

const Logo: React.FC<ILogo> = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold font-logo tracking-wider flex items-center space-x-2 text-gradient-to-r from-green-400 to-blue-500"
    >
      <SparklesIcon className="h-8 bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-tr-lg rounded-bl-lg text-brandwhite" />
      <span className="headingsm">Ricky.</span>
    </Link>
  );
};

export default Logo;
