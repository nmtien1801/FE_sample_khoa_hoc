import React from "react";
import AppRouter from "./routes/AppRouter.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import MessengerButton from "./components/chatbox/MessengerButton.jsx";
// import ZaloBot from "./components/chatbox/zaloBot.jsx";

function App() {
  return (
    <>
      <AppRouter />
      {/* <ZaloBot /> */}
      {/* <MessengerButton /> */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
