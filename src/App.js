import React from "react";
import NavBar from "./components/NavBar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";

const style = {
  App: `max-w-[728px] mx-auto text-center `,
  container: `flex flex-col min-h-[90vh] bg-blue-100 mt-10 shadow border relative rounded-tr-3xl rounded-tl-3xl rounded-br-3xl rounded-bl-3xl `,
};

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.App}>
      <div className={style.container}>
        <NavBar />
        {user ? <Chat /> : null}
      </div>
    </div>
  );
};

export default App;
