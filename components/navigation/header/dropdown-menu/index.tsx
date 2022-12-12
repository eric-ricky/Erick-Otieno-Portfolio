import { LogoutIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { useAuthContext } from '../../../../lib/context/auth-context';
import { userNavItems } from '../nav-data';

interface IDropdownMenu {
  setShowDropdown: Dispatch<SetStateAction<boolean>>;
}

const DropdownMenu: React.FC<IDropdownMenu> = ({ setShowDropdown }) => {
  const router = useRouter();
  const userCtx = useAuthContext();

  return (
    <div className="absolute top-10 right-0 w-44 bg-brandlight shadow-lg rounded-xl flex flex-col">
      <div className="flex flex-col rounded-t-lg bg-white pt-2">
        {userNavItems.map((item) => (
          <div
            key={item.label}
            onClick={() => {
              setShowDropdown(false);
              router.push(item.link);
            }}
            className="bg-white px-4 py-2 capitalize cursor-pointer hover:bg-gray-50"
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="p-4 bg-white hover:bg-gray-50 rounded-b-lg border-t-2">
        <button
          className="flex items-center space-x-2 hover:text-slate-900 cursor-pointer"
          onClick={() => {
            setShowDropdown(false);
            userCtx?.logout();
          }}
        >
          <LogoutIcon className="h-6" />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
};

export default DropdownMenu;
