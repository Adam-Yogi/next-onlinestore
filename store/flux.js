import { useRouter } from 'next/router';
import mode from '../mode';

const getState = ({ getStore, getActions, setStore }) => {
  const router = useRouter();
  return {
    store: {
      token: null,
      user: {},
      books: [],
      userBooks: [],
      userCart: { data: [], totalQuantity: 0, totalHarga: 0 },
      userCheckoutItems: [],
      totalQuantity: 0,
      userOrder: [],
      sellerOrder: [],
      buyerRatingProducts: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      syncTokenFromSessionStore: () => {
        const user_token = sessionStorage.getItem('user_token');

        if (user_token && user_token != '' && user_token != undefined)
          setStore({ token: user_token });
      },

      logout: () => {
        sessionStorage.removeItem('user_token');
        setStore({ token: null });
      },

      login: async (email, password) => {
        const actions = getActions();
        const opts = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const res = await fetch(
            `${mode.backend_url}/login`,

            opts
          );
          if (res.status !== 200) {
            alert('wrong password or username');
            return false;
          }
          const data = await res.json();
          sessionStorage.setItem('user_token', data.access_token);
          setStore({ token: data.access_token });
          actions.getCartItem();
          return true;
        } catch (error) {
          console.error('there was an error logging in');
        }
      },

      fetchUser: async () => {
        const store = getStore();

        // actions.syncTokenFromSessionStore();
        const opts = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
        };
        try {
          const res = await fetch(
            `${mode.backend_url}/getuser`,

            opts
          );
          if (res.status !== 200) {
            return false;
          }
          const data = await res.json();

          setStore({ user: data ? data[0] : {} });

          return true;
        } catch (error) {
          console.error('there was an error fetching user');
        }
      },
      register: async (firstName, lastName, phone, email, password) => {
        const opts = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            no_telp: phone,
            email: email,
            password: password,
          }),
        };
        try {
          const res = await fetch(
            `${mode.backend_url}/register`,

            opts
          );
          if (res.status !== 200) {
            alert('user already exist');
            return false;
          }
          const data = await res.json();
          alert(data.msg);
          return true;
        } catch (error) {
          console.error('there was an error registering');
        }
      },
      updateProfile: async (firstName, lastName, phone, newPassword) => {
        const store = getStore();
        const opts = {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            first_name:
              firstName.length > 0 ? firstName : store.user.first_name,
            last_name: lastName.length > 0 ? lastName : store.user.last_name,
            no_telp: phone.length > 0 ? phone : store.user.no_telp,
            password:
              newPassword.length > 0 ? newPassword : store.user.password,
          }),
        };
        try {
          const res = await fetch(`${mode.backend_url}/updateuser`, opts);
          if (res.status !== 200) {
            alert('there was an error updating');
            return false;
          }
          const data = await res.json();
          alert(data.msg);
          return true;
        } catch (error) {
          console.error('there was an error updating');
        }
      },

      updateProfilePic: async (profpicUrl) => {
        const store = getStore();
        const opts = {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            profile_pic: profpicUrl,
          }),
        };
        try {
          const res = await fetch(`${mode.backend_url}/updateprofilepic`, opts);
          if (res.status !== 200) {
            alert('there was an error updating');
            return false;
          }
          const data = await res.json();
          alert(data.msg);
          return true;
        } catch (error) {
          console.error('there was an error updating');
        }
      },
      fetchBooks: async () => {
        const store = getStore();
        const opts = {
          method: 'GET',
        };
        try {
          const res = await fetch(`${mode.backend_url}/books`, opts);
          const data = await res.json();
          setStore({ books: data });
        } catch (error) {
          console.error('there was an error fetching data');
        }
      },
      fetchUserBooks: async () => {
        const store = getStore();
        const actions = getActions();
        actions.syncTokenFromSessionStore();
        const opts = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
        };
        try {
          const res = await fetch(`${mode.backend_url}/userproduct`, opts);
          const data = await res.json();

          setStore({ userBooks: data });
        } catch (error) {
          console.error('there was an error fetching');
        }
      },
      deleteBook: async (bookid) => {
        const store = getStore();
        const opts = {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: bookid,
          }),
        };
        try {
          const res = await fetch(`${mode.backend_url}/deleteproduct`, opts);
          if (res.status !== 200) {
            console.log(res.status);
            alert('there was an error updating');
            return false;
          }
          const data = await res.json();
          alert(data.msg);
          router.reload();
          return true;
        } catch (error) {
          console.error('there was an error deleting');
        }
      },

      addBook: async (nama, harga, deskripsi, jumlah, image_product) => {
        const store = getStore();
        const opts = {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nama: nama,
            harga: harga,
            deskripsi: deskripsi,
            jumlah: jumlah,
            image_product: image_product,
          }),
        };
        try {
          const res = await fetch(`${mode.backend_url}/addproduct`, opts);
          if (res.status !== 200) {
            alert('error adding new product');
            return false;
          }
          const data = await res.json();
          alert(data.msg);
          router.reload();
          return true;
        } catch (error) {
          console.error('there was an error registering');
        }
      },

      updateProduct: async (
        bookId,
        nama,
        harga,
        deskripsi,
        jumlah,
        image_product
      ) => {
        const store = getStore();
        const opts = {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: bookId,
            nama: nama,
            harga: harga,
            deskripsi: deskripsi,
            jumlah: jumlah,
            image_product: image_product,
          }),
        };
        try {
          const res = await fetch(`${mode.backend_url}/updateproduct`, opts);
          if (res.status !== 200) {
            alert('there was an error updating');
            return false;
          }
          const data = await res.json();
          alert(data.msg);
          router.reload();
          return true;
        } catch (error) {
          console.error('there was an error updating');
        }
      },
      addToCart: async (bookId, jumlahOrder) => {
        const store = getStore();
        const opts = {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: bookId,
            jumlah: jumlahOrder,
          }),
        };
        try {
          const res = await fetch(`${mode.backend_url}/addCartItem`, opts);
          if (res.status !== 200) {
            alert('there was an error adding to cart');
            return false;
          }
          const data = await res.json();
          alert(data.msg);
          router.reload();
          return true;
        } catch (error) {
          console.error('there was an error adding to cart');
        }
      },
      getCartItem: async () => {
        const store = getStore();
        const actions = getActions();
        actions.syncTokenFromSessionStore();
        const opts = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
        };
        try {
          const res = await fetch(`${mode.backend_url}/getCartItem`, opts);
          const data = await res.json();

          setStore({
            userCart: data.data ? data : store.userCart,
            totalQuantity: data.totalQuantity || 0,
          });
        } catch (error) {
          console.error('there was an error fetching cart data');
        }
      },
      deleteCartItem: async (bookId, jumlah) => {
        const store = getStore();
        const opts = {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: bookId,
            jumlah: jumlah,
          }),
        };
        try {
          const res = await fetch(`${mode.backend_url}/delCartItem`, opts);
          const data = await res.json();
          alert(data.msg);
          router.reload();
        } catch (error) {
          console.error('there was an error fetching cart data');
        }
      },
      updateAddress: async (
        kota,
        idKota,
        provinsi,
        idProvinsi,
        alamat,
        kodepos
      ) => {
        const store = getStore();
        const opts = {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            alamat: alamat,
            idKota: idKota,
            kota: kota,
            idProvinsi: idProvinsi,
            provinsi: provinsi,
            kodepos: kodepos,
          }),
        };
        try {
          const res = await fetch(`${mode.backend_url}/updateaddress`, opts);
          if (res.status !== 200) {
            alert('there was an error updating');
            return false;
          }
          const data = await res.json();
          alert(data.msg);
          router.push('/user/profile');
          return true;
        } catch (error) {
          console.error('there was an error updating');
        }
      },
      getCheckoutItem: async () => {
        const store = getStore();
        const actions = getActions();
        actions.syncTokenFromSessionStore();

        const opts = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
        };
        try {
          const res = await fetch(`${mode.backend_url}/checkout`, opts);
          const data = await res.json();

          data.map((seller) => {
            seller.totalHargaToko = 0;
            seller.totalBerat = 0;
            seller.produk.map((item) => {
              seller.totalHargaToko += Number(item.totalHarga);
              seller.totalBerat += Number(item.quantity) * 300;
            });
          });
          setStore({
            userCheckoutItems: data,
          });
        } catch (error) {
          console.error('there was an error fetching checkout data');
        }
      },
      makeOrder: async (totalHarga, bank) => {
        const store = getStore();
        const opts = {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            totalharga: totalHarga,
            bank: bank,
          }),
        };
        try {
          const res = await fetch(`${mode.backend_url}/buatorder`, opts);
          if (res.status !== 200) {
            alert('there was an error placing order');
            return false;
          }
          const data = await res.json();

          router.push(
            `/pembayaran?bank=${data[0].bank}&totalHarga=${data[0].totalHarga}&vanumber=${data[0].vanumber}&orderID=${data[0].orderID}`,
            `pembayaran/order-${data[0].orderID}`
          );
          alert('success making order');
          return true;
        } catch (error) {
          console.error('there was an error placing order');
        }
      },
      getOrder: async () => {
        const store = getStore();
        const actions = getActions();
        actions.syncTokenFromSessionStore();
        const opts = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
        };
        try {
          const res = await fetch(`${mode.backend_url}/Order`, opts);

          const data = await res.json();

          setStore({
            userOrder: data.length > 0 ? data : [],
          });
          return true;
        } catch (error) {
          console.error('there was an error getting order');
        }
      },
      getSellerOrder: async () => {
        const store = getStore();
        const actions = getActions();
        actions.syncTokenFromSessionStore();
        const opts = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
        };
        try {
          const res = await fetch(`${mode.backend_url}/OrderSeller`, opts);

          const data = await res.json();

          setStore({
            sellerOrder: data.length > 0 ? data : [],
          });
          return true;
        } catch (error) {
          console.error('there was an error getting seller order');
        }
      },
      getOrderById: async (orderID) => {
        const store = getStore();
        const actions = getActions();
        actions.syncTokenFromSessionStore();
        const opts = {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderID: orderID,
          }),
        };
        try {
          const res = await fetch(`${mode.backend_url}/OrderById`, opts);

          const data = await res.json();
          console.log(data);
          setStore({
            buyerRatingProducts: data.length > 0 ? data : [],
          });
        } catch (error) {
          console.error('there was an error getting products data');
        }
      },
      rateProduct: async (orderID, productID, rate) => {
        const store = getStore();
        const opts = {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderID: orderID,
            productID: productID,
            rate: rate,
          }),
        };
        try {
          const res = await fetch(`${mode.backend_url}/rating`, opts);
          if (res.status !== 200) {
            alert('there was an error rating product');
            return false;
          }
          const data = await res.json();

          alert(data.msg);
          router.reload();
          return true;
        } catch (error) {
          console.error('there was an error rating product');
        }
      },
      cekStatus: async (orderID) => {
        const store = getStore();
        const opts = {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderID: orderID,
          }),
        };
        try {
          const res = await fetch(
            `${mode.backend_url}/cekstatuspembayaran`,
            opts
          );

          const data = await res.json();
          alert(data.msg);
          router.reload();
          return true;
        } catch (error) {
          console.error('there was an error checking payment status');
        }
      },
      finishOrder: async (orderID) => {
        const store = getStore();
        const opts = {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderID: orderID,
          }),
        };
        try {
          const res = await fetch(`${mode.backend_url}/orderFinish`, opts);
          if (res.status !== 200) {
            alert('there was an error');
            return false;
          }
          const data = await res.json();

          alert(data.msg);
          router.reload();
          return true;
        } catch (error) {
          console.error('there was an error');
        }
      },
    },
  };
};

export default getState;
