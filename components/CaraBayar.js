const BCA = ({ vanumber }) => {
  return (
    <div className="flex flex-col gap-3 py-2 px-4 md:p-0 text-white place-self-center leading-2 w-100 md:w-8/12">
      <h2 className="text-3xl font-bold">Tata Cara Pembayaran</h2>
      <div>
        <p className="font-bold underline text-2xl">ATM BCA</p>
        <ol className="list-decimal list-inside tracking-wide">
          <li>Masukkan kartu ATM BCA dan PIN</li>
          <li>Pilih transaksi lainnya</li>
          <li>Pilih transfer</li>
          <li>Pilih rekening BCA Virtual Account</li>
          <li>
            Masukkan nomor BCA Virtual Account, yaitu{' '}
            <strong className="text-xl">{vanumber}</strong>
          </li>
          <li>Masukkan jumlah yang ingin dibayarkan</li>
          <li>Validasi pembayaran anda</li>
          <li>
            Pembayaran selesai dan akan dicek secara otomatis dengan me-refresh
            halaman ini
          </li>
        </ol>
      </div>
      <div>
        <p className="font-bold underline text-2xl">Mobile BCA</p>
        <ol className="list-decimal list-inside tracking-wide">
          <li>Lakukan Log in pada aplikasi BCA Mobile</li>
          <li>Pilih m-BCA</li>

          <li>Masukkan kode akses m-BCA</li>

          <li>Pilih m-Transfer</li>

          <li>Pilih BCA Virtual Account</li>

          <li>
            Masukkan nomor BCA Virtual Account, Yaitu{' '}
            <strong className="text-xl">{vanumber}</strong>
          </li>

          <li>Masukkan PIN m-BCA</li>

          <li>Pembayaran selesai</li>
        </ol>
      </div>
    </div>
  );
};

const BRI = ({ vanumber }) => {
  return (
    <div className="flex flex-col gap-3 py-2 px-4 md:p-0 text-white place-self-center leading-2 w-100 md:w-8/12">
      <h2 className="text-3xl font-bold">Tata Cara Pembayaran</h2>
      <div>
        <p className="font-bold underline text-2xl">ATM BRI</p>
        <ol className="list-decimal list-inside tracking-wide">
          <li>Masukkan kartu ATM BRI dan PIN</li>
          <li>Pilih transaksi lainnya</li>
          <li>Pilih transfer</li>
          <li>Pilih rekening BRI Virtual Account</li>
          <li>
            Masukkan nomor BRI Virtual Account, yaitu{' '}
            <strong className="text-xl">{vanumber}</strong>
          </li>
          <li>Masukkan jumlah yang ingin dibayarkan</li>
          <li>Validasi pembayaran anda</li>
          <li>
            Pembayaran selesai dan akan dicek secara otomatis dengan me-refresh
            halaman ini
          </li>
        </ol>
      </div>
      <div>
        <p className="font-bold underline text-2xl">Mobile BRI</p>
        <ol className="list-decimal list-inside tracking-wide">
          <li>Lakukan Log in pada aplikasi BRI Mobile</li>
          <li>Pilih m-BRI</li>

          <li>Masukkan kode akses m-BRI</li>

          <li>Pilih m-Transfer</li>

          <li>Pilih BRI Virtual Account</li>

          <li>
            Masukkan nomor BRI Virtual Account, Yaitu{' '}
            <strong className="text-xl">{vanumber}</strong>
          </li>

          <li>Masukkan PIN m-BRI</li>

          <li>Pembayaran selesai</li>
        </ol>
      </div>
    </div>
  );
};
const BNI = ({ vanumber }) => {
  return (
    <div className="flex flex-col gap-3 py-2 px-4 md:p-0 text-white place-self-center leading-2 w-100 md:w-8/12">
      <h2 className="text-3xl font-bold">Tata Cara Pembayaran</h2>
      <div>
        <p className="font-bold underline text-2xl">ATM BNI</p>
        <ol className="list-decimal list-inside tracking-wide">
          <li>Masukkan kartu ATM BNI dan PIN</li>
          <li>Pilih transaksi lainnya</li>
          <li>Pilih transfer</li>
          <li>Pilih rekening BNI Virtual Account</li>
          <li>
            Masukkan nomor BNI Virtual Account, yaitu{' '}
            <strong className="text-xl">{vanumber}</strong>
          </li>
          <li>Masukkan jumlah yang ingin dibayarkan</li>
          <li>Validasi pembayaran anda</li>
          <li>
            Pembayaran selesai dan akan dicek secara otomatis dengan me-refresh
            halaman ini
          </li>
        </ol>
      </div>
      <div>
        <p className="font-bold underline text-2xl">Mobile BNI</p>
        <ol className="list-decimal list-inside tracking-wide">
          <li>Lakukan Log in pada aplikasi BNI Mobile</li>
          <li>Pilih m-BNI</li>

          <li>Masukkan kode akses m-BNI</li>

          <li>Pilih m-Transfer</li>

          <li>Pilih BNI Virtual Account</li>

          <li>
            Masukkan nomor BNI Virtual Account, Yaitu{' '}
            <strong className="text-xl">{vanumber}</strong>
          </li>

          <li>Masukkan PIN m-BNI</li>

          <li>Pembayaran selesai</li>
        </ol>
      </div>
    </div>
  );
};

export { BCA, BNI, BRI };
