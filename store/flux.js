import { useRouter } from 'next/router';

const getState = ({ getStore, getActions, setStore }) => {
  const router = useRouter();
  return {
    store: {
      token: null,
      user: {},
      books: [],
      userBooks: [],
      userCart: {},
      totalQuantity: 0,
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
          const res = await fetch('http://localhost:5000/login', opts);
          if (res.status !== 200) {
            alert('wrong password or username');
            return false;
          }
          const data = await res.json();
          sessionStorage.setItem('user_token', data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error('there was an error logging in');
        }
      },

      fetchUser: async () => {
        const store = getStore();
        const opts = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
        };
        try {
          const res = await fetch('http://localhost:5000/getuser', opts);
          if (res.status !== 200) {
            return false;
          }
          const data = await res.json();
          setStore({ user: data[0] });

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
          const res = await fetch('http://localhost:5000/register', opts);
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
          const res = await fetch('http://localhost:5000/updateuser', opts);
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
          const res = await fetch(
            'http://localhost:5000/updateprofilepic',
            opts
          );
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
          const res = await fetch('http://localhost:5000/books', opts);
          const data = await res.json();
          setStore({ books: data });
        } catch (error) {
          console.error('there was an error fetching data');
        }
      },
      fetchUserBooks: async () => {
        const store = getStore();
        const opts = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
        };
        try {
          const res = await fetch('http://localhost:5000/userproduct', opts);
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
          const res = await fetch(`http://localhost:5000/deleteproduct`, opts);
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
          const res = await fetch('http://localhost:5000/addproduct', opts);
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
          const res = await fetch(`http://localhost:5000/updateproduct`, opts);
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
          const res = await fetch(`http://localhost:5000/addCartItem`, opts);
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
        const opts = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${store.token}`,
            'Content-Type': 'application/json',
          },
        };
        try {
          const res = await fetch('http://localhost:5000/getCartItem', opts);
          const data = await res.json();

          setStore({
            userCart: data,
            totalQuantity: data.totalQuantity ? data.totalQuantity : 0,
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
          const res = await fetch('http://localhost:5000/delCartItem', opts);
          const data = await res.json();
          alert(data.msg);
          router.reload();
        } catch (error) {
          console.error('there was an error fetching cart data');
        }
      },
    },
  };
};

export default getState;
