import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import userAvatar from '../public/images/user.webp';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Context } from '../store/AppContext';
import { useContext } from 'react';
import logo from '../public/images/logob.svg';

const Nav = ({ user }) => {
  const router = useRouter();
  const { store, actions } = useContext(Context);

  return (
    <nav className=" shadow-2xl">
      <div className="grid grid-rows-2 grid-cols-2 lg:flex lg:gap-0 bg-[#1d2241] text-white lg:justify-between items-center lg:items-center px-3 pt-3 lg:py-3 sm:px-10 ">
        <div className="flex items-center min-h-full md:scale-120">
          <Link href="/">
            <Image src={logo} width={135} height={60} />
          </Link>
        </div>

        <div className="font-thin row-start-2 col-span-2 flex space-x-12 sm:space-x-32 items-center grow justify-center tracking-widest ">
          <Link href="/">
            <p className="border-b-2 border-opacity-0 hover:border-opacity-100 transition-all ease-in-out duration-200 border-white">
              HOME
            </p>
          </Link>
          <p className="border-b-2 border-opacity-0 hover:border-opacity-100 transition-all ease-in-out duration-200 border-white">
            ABOUT
          </p>
          <p className="border-b-2 border-opacity-0 hover:border-opacity-100 transition-all ease-in-out duration-200 border-white">
            PRODUCTS
          </p>
        </div>
        <div className="place-self-end h-12 flex items-center space-x-5">
          {store.token && store.token != '' && store.token != undefined ? (
            <>
              <ShoppingCartIcon className="hover:animate-bounce h-8 w-8" />
              <div
                onClick={() => {
                  router.push('/user/profile');
                }}
                className="flex flex-col cursor-pointer items-center"
              >
                <div className=" w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={
                      store.user.profile_pic
                        ? store.user.profile_pic
                        : userAvatar
                    }
                    objectFit="cover"
                    objectPosition="center"
                    width={50}
                    height={50}
                  />
                </div>
                <p className="text-sm">{store.user.first_name}</p>
              </div>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-indigo-300 rounded-xl shadow-lg p-2 font-semibold text-lg md:text-xl text-white">
                Log In
              </button>
            </Link>
          )}
        </div>

        {/* <div className="h-10 w-10 bg-black rounded-full"></div> */}
      </div>
    </nav>
  );
};

export default Nav;
