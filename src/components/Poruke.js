import React from "react";
import { auth } from "../firebase";

const style = {
  poruka: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  ime: `absolute mt-[-4rem] text-gray-600 text-xs`,
  poslano: `bg-orange-500 text-white flex-row-reverse text-end float-right rounded-bl-full text-xs`,
  primljeno: `bg-[#e5e5ea] text-black float-left`,
};

const Poruke = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.poslano}`
      : `${style.primljeno}`;

  return (
    <div>
      <div className={`${style.poruka} ${messageClass}`}>
        <p className={style.ime}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Poruke;
