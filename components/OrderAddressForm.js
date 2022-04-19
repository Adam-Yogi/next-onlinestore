import { useState } from 'react';

import { cityProvince } from '../data/cityProvince';

const OrderAddressForm = ({ liftStateUp, closeModal }) => {
  const [selectedProvince, setProv] = useState(cityProvince[0].province);
  const [selectedProvID, setProvID] = useState(cityProvince[0].province_id);

  const [cityList, setCityList] = useState(cityProvince[0].cities);
  const [selectedCity, setCity] = useState(
    cityProvince[0].cities[0].type + ' ' + cityProvince[0].cities[0].city_name
  );
  const [selectedCityID, setCityID] = useState(cityProvince[0].province_id);
  const [alamat, setAlamat] = useState('');
  const [postal, setPostal] = useState('');
  const [penerima, setPenerima] = useState('');
  const [phone, setPhone] = useState('');

  const handleProvinceChange = (e) => {
    const value = e.target.value;
    const [province_id, province] = value.split(',');
    setProv(province);
    setProvID(province_id);
    const [{ cities }] = cityProvince.filter(
      (item) => item.province_id === province_id
    );
    setCityList(cities);
  };
  const handleCityChange = (e) => {
    const value = e.target.value;
    const [city_id, city] = value.split(',');
    setCity(city);
    setCityID(city_id);
  };

  const handleSave = () => {
    liftStateUp(
      penerima,
      phone,
      selectedCity,
      selectedCityID,
      selectedProvince,
      selectedProvID,
      alamat,
      postal
    );
  };

  return (
    <div className=" bg-black rounded-md shadow-2xl p-6 md:p-4 mx-3 md:m-0 gap-2 grid grid-cols-2">
      <div className="flex flex-col col-span-2">
        <label className="text-white font-nunito" htmlFor="penerima">
          Penerima:{' '}
        </label>
        <input
          required
          className="rounded-md w-5/6 shadow-xl"
          type="text"
          name="penerima"
          id="penerima"
          value={penerima}
          onChange={(e) => {
            setPenerima(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col col-span-2">
        <label className="text-white font-nunito" htmlFor="phone">
          Nomor Telepon Penerima:{' '}
        </label>
        <input
          required
          className="rounded-md w-5/6 shadow-xl"
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-white font-nunito" htmlFor="province">
          Provinsi:
        </label>
        <select
          className="w-8/12 rounded-md shadow-xl"
          name="province"
          id="province"
          onChange={(e) => handleProvinceChange(e)}
        >
          <option value="">-</option>
          {cityProvince.map((item, index) => (
            <option key={index} value={`${item.province_id},${item.province}`}>
              {item.province}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-white font-nunito" for="city">
          Kota:
        </label>
        <select
          className="w-8/12 rounded-md shadow-xl"
          name="city"
          id="city"
          onChange={(e) => handleCityChange(e)}
        >
          <option value="">-</option>
          {cityList.map((item, index) => (
            <option key={index} value={`${item.city_id},${item.city_name}`}>
              {item.type} {item.city_name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col col-span-2">
        <label className="text-white font-nunito" htmlFor="alamat">
          Alamat:{' '}
        </label>
        <textarea
          required
          className="resize-none h-20 rounded-md shadow-xl"
          type="text"
          name="alamat"
          id="alamat"
          value={alamat}
          onChange={(e) => {
            setAlamat(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white font-nunito" htmlFor="postal">
          Kode post:{' '}
        </label>
        <input
          required
          className="w-8/12 rounded-md shadow-xl"
          type="number"
          name="postal"
          id="postal"
          value={postal}
          onChange={(e) => {
            setPostal(e.target.value);
          }}
        />
      </div>
      <div className="text-white row-start-6">
        <button
          onClick={() => {
            handleSave();
          }}
          className="bg-gradient-to-r mt-3 hover:bg-gradient-to-l from-green-600 to-lime-600 p-2 rounded-lg text-white font-roboto font-bold text-xl border-2 border-transparent hover:border-2 border-opacity-80 hover:border-purple-100 transition-all ease-in-out duration-150"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default OrderAddressForm;
