const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
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
    },
  };
};

export default getState;
