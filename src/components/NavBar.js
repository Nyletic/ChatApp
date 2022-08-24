import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

const style = {
  container: `bg-white border-gray-500 h-20 flex justify-between items-center p-4 rounded-tr-3xl rounded-tl-3xl border-8`,
  naslov: ` text-orange-700 text-2xl  hover:text-blue-300`,
};

const NavBar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.glavni}>
      <div className={style.container}>
        <h1 className={style.naslov}>Chat app</h1>
        {user ? <LogOut /> : <LogIn />}
      </div>
    </div>
  );
};

export default NavBar;
