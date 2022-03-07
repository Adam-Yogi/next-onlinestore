import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row bg-indigo-800 text-white justify-between items-center px-3 py-2 sm:px-10 ">
        <Link href="/">
          <h1 className="text-lg font-bold cursor-pointer">Brand</h1>
        </Link>

        <div className="flex space-x-10 sm:space-x-32 items-center grow justify-center">
          <Link href="/">HOME</Link>
        </div>
        {/* <div className="h-10 w-10 bg-black rounded-full"></div> */}
      </div>
    </nav>
  );
};

export default Nav;
