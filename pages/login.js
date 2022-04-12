import Link from 'next/link';

import React, { useState, useContext } from 'react';
import { Context } from '../store/AppContext';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logoColor from '../public/images/logocolor.png';

const login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    actions.login(email, password); //.then(() => {
    //   router.push('/');
    // });
  };

  if (store.token && store.token != '' && store.token != undefined) {
    actions.fetchUser();
    router.push('/');
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-200 gap-4 to-bg-[#252849] flex flex-col md:grid md:grid-cols-2 items-center justify-center">
      <div className="flex justify-center items-center w-full">
        <Image src={logoColor} width={250} height={150} />
      </div>
      {store.token && store.token !== '' && store.token !== undefined ? (
        <Link href="/">Lanjut</Link>
      ) : (
        <div className='border-2 rounded-xl w-6/12 md:py-6 md:w-9/12 flex flex-col items-center gap-5 px-3 py-5 bg-white shadow-2xl"'>
          <h2 className="text-indigo-900 row-span-1 font-bold text-2xl md:text-4xl">
            Login
          </h2>
          <div className="row-span-3 md:w-8/12 grid grid-rows-3 gap-3 md:gap-5">
            <div className="flex justify-center flex-col">
              <label htmlFor="email" className="font-semibold">
                E-Mail
              </label>
              <input
                type="email"
                placeholder="Enter E-mail"
                name="email"
                className="border-black w-100 border-2 rounded-xl p-2"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center flex-col">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="border-black w-100 border-2 rounded-xl p-2"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              onClick={() => {
                handleSubmit();
              }}
              className="bg-indigo-500 rounded-xl text-white font-bold"
            >
              Masuk
            </button>
            <Link className="font-semibold" href="/daftar">
              <button>Daftar</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default login;
