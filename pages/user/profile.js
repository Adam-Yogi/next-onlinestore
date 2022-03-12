import Image from 'next/image';
import LayoutNav from '../../components/LayoutNav';
import userAvatar from '../../public/images/user.webp';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@heroicons/react/solid';

const profile = () => {
  const router = useRouter();
  return (
    <LayoutNav>
      <button
        onClick={() => {
          router.back();
        }}
        className="text-white flex gap-2 items-center font-bold p-3"
      >
        <ArrowLeftIcon className="w-6 h-6" />
        Back
      </button>

      <div className="text-white p-3 py-5 md:grid md:grid-cols-2 md:gap-2">
        <div className="grid grid-cols-2 md:grid-rows-3 md:grid-cols-1 items-center justify-center">
          <div className="place-self-center md:row-span-2 w-11/12 md:w-6/12 rounded-full overflow-hidden">
            <Image
              src={userAvatar}
              height={200}
              layout="responsive"
              width={200}
            />
          </div>
          <div
            className="md:place-self-center
           flex flex-col p-4 md:p-2"
          >
            <p className="font-bold">John Wayne</p>
            <p className="text-gray-200">Jakarta</p>
            <p>Email : johnwayne@gmail.com</p>
            <p>Phone : 082442352527592</p>
          </div>
        </div>
        <form
          method="put"
          className="flex flex-col md:justify-around space-y-4"
        >
          <div className="flex justify-center flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="border-black w-100 border-2 rounded-xl p-3"
            />
          </div>
          <div className="flex justify-center flex-col">
            <label htmlFor="alamat">Alamat</label>
            <input
              type="text"
              placeholder="Alamat"
              name="alamat"
              className="border-black w-100 border-2 rounded-xl p-3"
            />
          </div>
          <div className="flex justify-center flex-col">
            <label htmlFor="umur">Umur</label>
            <input
              type="text"
              placeholder="Umur"
              name="umur"
              className="border-black w-100 border-2 rounded-xl p-3"
            />
          </div>
          <button
            tyoe="submit"
            className="bg-green-400 rounded-xl p-3 text-white font-bold"
          >
            Update
          </button>
        </form>
      </div>
    </LayoutNav>
  );
};

export default profile;
