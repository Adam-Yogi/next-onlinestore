import Image from 'next/image';
import Link from 'next/link';
import { useState, useContext } from 'react';
import { Context } from '../store/AppContext';
import logoColor from '../public/images/logocolor.png';

const daftar = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const { store, actions } = useContext(Context);

  const handleSubmit = () => {
    actions.register(firstName, lastName, phone, email, password);
  };
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-200 gap-4 to-bg-[#252849] flex flex-col md:grid md:grid-cols-2 items-center justify-center">
      <div className="flex justify-center items-center w-full">
        <Image src={logoColor} width={240} height={130} />
      </div>
      <div className=' border-2 rounded-xl w-6/12 md:py-6 md:w-9/12 flex flex-col items-center gap-5 px-3 py-5 bg-white shadow-2xl"'>
        <h2 className="text-indigo-900 row-span-1 font-bold text-2xl md:text-4xl">
          Daftar
        </h2>
        <div className="row-span-3 md:w-8/12 grid grid-rows-3 gap-3 md:gap-5">
          <div className="flex justify-center flex-col">
            <label htmlFor="name" className="font-semibold">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="first_name"
              className="border-black w-100 border-2 rounded-xl p-2"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center flex-col">
            <label className="font-semibold" htmlFor="name">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="last_name"
              className="border-black w-100 border-2 rounded-xl p-2"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center flex-col">
            <label className="font-semibold" htmlFor="name">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter Last Name"
              name="no_telp"
              className="border-black w-100 border-2 rounded-xl p-2"
              required
              value={phone}
              maxLength={12}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center flex-col">
            <label className="font-semibold" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Enter Email"
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
            <label className="font-semibold" htmlFor="password">
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
            onClick={() => {
              handleSubmit();
            }}
            className="p-3  self-center w-100 bg-indigo-500 rounded-xl text-white font-bold"
          >
            Daftar
          </button>
          <Link className="text-lg font-semibold" href="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default daftar;
