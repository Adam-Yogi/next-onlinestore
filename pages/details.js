import { useRouter } from 'next/router';

import Image from 'next/image';
import Thumbnail from '../components/Thumbnail';

const Details = (props) => {
  const otherBooksData = props.request;
  return (
    <div className="p-4 md:grid md:grid-cols-2 md:gap-2 lg:gap-4 items-center">
      <div className="rounded-lg overflow-hidden">
        <Image
          src="https://drive.google.com/uc?export=view&id=1VBdvrqY6p-kJ1DRlVkZwsZdTk0kUl82X"
          width={800}
          height={800}
          objectFit="fill"
          layout="responsive"
          alt="book cover"
        />
      </div>
      <div className="self-stretch p-2 text-white rounded-lg md:border-2 md:border-purple-200 md:border-opacity-10 space-y-2">
        <h1 className="text-3xl md:text-6xl font-bold text-yellow-200">
          Laskar Pelangi
        </h1>
        <p className="text-sm text-gray-300">
          Date Added : "Mon, 07 Mar 2022 17:23:27 GMT"
        </p>
        <div className="">
          <p className="text-sm md:text-md">
            "Bangunan itu nyaris rubuh. Dindingnya miring bersangga sebalok
            kayu. Atapnya bocor di mana-mana. Tetapi, berpasang-pasang mata
            mungil menatap penuh harap. Hendak ke mana lagikah mereka harus
            bersekolah selain tempat itu? Tak peduli seberat apa pun kondisi
            sekolah itu, sepuluh anak dari keluarga miskin itu tetap bergeming.
            Di dada mereka, telah menggumpal tekad untuk maju." Laskar Pelangi,
            kisah perjuangan anak-anak untuk mendapatkan ilmu. Diceritakan
            dengan lucu dan menggelitik, novel ini menjadi novel terlaris di
            Indonesia. Inspiratif dan layak dimiliki siapa saja yang mencintai
            pendidikan dan keajaiban masa kanak-kanak."
          </p>
        </div>
        <div>
          <p>Harga: </p>
          <p className="font-semibold text-2xl">Rp70000.00</p>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center justify-center">
          <button className="font-bold border-2 border-purple-400 hover:border-purple-600 rounded-lg p-2 text-purple-300 hover:text-purple-500 md:text-lg">
            Beli Sekarang
          </button>
          <button className="border-2 border-purple-200 rounded-lg p-2 text-purple-200 hover:text-white md:text-lg">
            Masukkan Keranjang
          </button>
        </div>
      </div>
      <div className="flex gap-2 col-span-2 overflow-y-scroll">
        {otherBooksData.map((book) => (
          <Thumbnail
            key={book[0]}
            bookId={book[0]}
            imgUrl={book[5]}
            title={book[1]}
            price={book[3]}
            dateAdded={book[6]}
            available={book[4]}
          />
        ))}
      </div>
    </div>
  );
};

export default Details;

export async function getServerSideProps(context) {
  const request = await fetch(`http://localhost:5000/books`).then((res) =>
    res.json()
  );
  return {
    props: { request }, // will be passed to the page component as props
  };
}
