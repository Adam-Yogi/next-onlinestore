import Link from 'next/link';
import React from 'react';

const login = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-pink-200 to-pink-500 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-white font-roboto pb-2">
        Zona Buku
      </h1>
      <div className='border-indigo-400 border-2 rounded-xl w-6/12 md:py-6 md:w-4/12 flex flex-col items-center gap-5 px-3 py-5 bg-white shadow-2xl"'>
        <h2 className="text-indigo-800 row-span-1 font-bold text-2xl md:text-4xl">
          Login
        </h2>
        <form className="row-span-3 md:w-8/12 grid grid-rows-3 gap-3 md:gap-5">
          <div className="flex justify-center flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              className="border-black w-100 border-2 rounded-xl p-1"
              required
            />
          </div>
          <div className="flex justify-center flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="border-black w-100 border-2 rounded-xl p-1"
              required
            />
          </div>

          <button className="bg-indigo-800 rounded-xl text-white font-bold">
            Masuk
          </button>
          <Link className="" href="/daftar">
            <button>Daftar</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default login;
