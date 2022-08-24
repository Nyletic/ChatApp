import React, { useState, useEffect } from "react";
import Poruke from "./Poruke";
import { db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import PosaljiPoruku from "./PosaljiPoruku";

const style = {
  container: `flex flex-col p-[10px] `,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className={style.container}>
        {messages &&
          messages.map((message) => (
            <Poruke key={message.id} message={message} />
          ))}
      </div>
      <PosaljiPoruku />
    </>
  );
};

export default Chat;
