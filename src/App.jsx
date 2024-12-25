import "./App.css";
// import { onAuthStateChanged } from "firebase/auth";
// import {auth} from "./Utils/firebase"
import Head from "./Component/Head";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";
import userContext from "./Utils/userContext";
import { useEffect, useState } from "react";
import store from "./Utils/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import Demo from "./Component/Demo";

function App() {
  return (
    <>
      <Provider store={store}>
        <Head />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#EF4444",
              color: "#f7f7f7",
            },
          }}
        />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
