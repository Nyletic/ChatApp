import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";

const style = {
  container: `flex justify-center `,
};

const logInGoogle = () => {
  const provider = new GoogleAuthProvider();

  signInWithRedirect(auth, provider);
};

const LogIn = () => {
  return (
    <div className={style.container}>
      <GoogleButton onClick={logInGoogle} />
    </div>
  );
};

export default LogIn;
