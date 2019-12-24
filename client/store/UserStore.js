// DELETE THIS FILE


const signIn = (username, password) => {
  localStorage.setItem(process.env.key, username);
  //TODO: redirect and dispatch user
};

const signOut = () => {
  localStorage.removeItem(process.env.key);
  //TODO: remove from state
  Router.push('/signin');
};

React.useEffect(() => {
  const user = localStorage.getItem(process.env.key);
  if (user) {
    dispatch({
      type: USER,
      playload: user
    });
  } else {
    Router.push('/signin');
  }
}, []);
