import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import userAvatar from '../public/images/user.webp';
import {
  ShoppingCartIcon,
  MenuIcon,
  XCircleIcon,
} from '@heroicons/react/outline';
import { Context } from '../store/AppContext';
import { useContext, useState } from 'react';
import logo from '../public/images/logob.svg';

const Nav = () => {
  const router = useRouter();
  const { store, actions } = useContext(Context);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className=" shadow-2xl">
      <div className="grid relative grid-rows-1 grid-cols-3 lg:flex lg:gap-0 bg-gradient-to-tl from-indigo-900 to-indigo-800 text-white lg:justify-between items-center lg:items-center px-3 py-2 lg:py-3 sm:px-10 ">
        <div
          className=" lg:hidden cursor-pointer"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          {showMenu ? (
            <XCircleIcon className="h-8 w-8  col-start-1" />
          ) : (
            <MenuIcon className="h-8 w-8 col-start-1" />
          )}
        </div>

        <div className="flex items-center justify-center min-h-full md:scale-120">
          <Link href="/">
            <Image src={logo} width={135} height={60} />
          </Link>
        </div>

        <div
          className={`font-thin top-0 absolute ${
            showMenu ? 'left-0' : '-left-[100%]'
          } transition-all ease-in-out duration-200 lg:static z-10 w-screen lg:w-100 p-3 row-start-2 col-span-3 flex space-x-12 sm:space-x-32 items-center grow justify-center tracking-widest bg-gradient-to-tl from-indigo-900 to-indigo-800 md:bg-transparent`}
        >
          <Link
            onClick={() => {
              setShowMenu(false);
            }}
            href="/"
          >
            <p className="cursor-pointer border-b-2 border-opacity-0 hover:border-opacity-100 transition-all ease-in-out duration-200 border-white">
              HOME
            </p>
          </Link>
          <p
            onClick={() => {
              setShowMenu(false);
            }}
            className="cursor-pointer border-b-2 border-opacity-0 hover:border-opacity-100 transition-all ease-in-out duration-200 border-white"
          >
            ABOUT
          </p>
          {store.token && store.token != '' && store.token != undefined ? (
            <Link
              onClick={() => {
                setShowMenu(false);
              }}
              href="/myproducts"
            >
              <p className="cursor-pointer border-b-2 border-opacity-0 hover:border-opacity-100 transition-all ease-in-out duration-200 border-white">
                MY PRODUCTS
              </p>
            </Link>
          ) : (
            ''
          )}
        </div>
        <div className="place-self-end h-12 flex  items-center space-x-5">
          {store.token && store.token != '' && store.token != undefined ? (
            <>
              <Link href="/cart" role="button">
                <div className="relative flex hover:animate-bounce">
                  <ShoppingCartIcon className=" h-8 w-8 flex-1" />
                  <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {store.totalQuantity}
                  </span>
                </div>
              </Link>
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
                <p className="text-sm whitespace-nowrap capitalize flex">
                  {store.user.nama}
                </p>
              </div>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-gradient-to-r hover:bg-gradient-to-l from-purple-500 to-violet-800    font-roboto  border-transparent hover:border-2 border-opacity-80 hover:border-purple-100 transition-all ease-in-out duration-150 bg-indigo-300 hover:bg-indigo-400 rounded-xl shadow-lg p-2 font-semibold text-lg md:text-xl text-white">
                Login
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
