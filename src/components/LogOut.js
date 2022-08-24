import React from "react";
import { auth } from "../firebase";

const style = {
  btn: `bg-blue-500 px-4 py-2 hover:bg-blue-400 rounded-full text-sm text-white`,
};

const LogOut = () => {
  return (
    <div>
      <button onClick={() => auth.signOut()} className={style.btn}>
        Logout
      </button>
    </div>
  );
};

export default LogOut;
