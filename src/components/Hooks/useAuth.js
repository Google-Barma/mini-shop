import { useEffect, useState } from 'react';

export default function useAuth(authFirebase) {
  const [authentication, setAuthentication] = useState(null);

  const auth = authFirebase();
  const provider = new authFirebase.GoogleAuthProvider();
  console.log(auth);

  const logIn = () => auth.signInWithPopup(provider);

  const logOut = () =>
    auth
      .signOut()
      .then()
      .catch(error => console.log(error.message));

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setAuthentication(user);
      } else {
        setAuthentication(null);
      }
    });
  }, [auth, authentication]);

  return { authentication, logIn, logOut };
}
