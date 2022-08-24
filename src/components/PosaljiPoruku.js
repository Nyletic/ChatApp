import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  container: `h-14 w-full max-w-[728px]  flex text-xl absolute   bottom-0`,
  input: `w-full text-sm p-3 bg-gray-700 text-white outline-none border-none rounded-bl-3xl`,
  btn: `w-[20%] bg-blue-700 rounded-br-3xl text-white text-base`,
};

const PosaljiPoruku = () => {
  const [input, setInput] = useState("");

  const posaljiPoruku = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Molim vas unesite poruku..");
      return;
    }

    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <form className={style.container} onSubmit={posaljiPoruku}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Poruka"
      />
      <button className={style.btn} onClick={posaljiPoruku} type="submit">
        Pošalji
      </button>
    </form>
  );
};

export default PosaljiPoruku;
