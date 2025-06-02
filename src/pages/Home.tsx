/// <reference types="vite-plugin-svgr/client" />
// import { useState, type FormEvent, type ChangeEvent } from "react";
// import { Button } from "./components/ui/button";
// import { Input } from "./components/ui/input";
// import LoginForm from "./components/ui/LoginForm";
// import { createPortal } from "react-dom";
// import PortalModal from "./components/PortalModal";
import LoginForm from "../components/ui/LoginForm";
import HeaderNavBar from "../components/ui/HeaderNavBar";
import LogoHeader from "../assets/imgs/logoTransparentBackgroundMini.svg";





function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div
          id="header"
          className="flex items-center justify-between w-full shadow-md py-4 px-8"
        >
          <div>
            <img className="w-45" src={LogoHeader}>
              
            </img>
          </div>
          <div>
            <HeaderNavBar />
          </div>
          <div>
            <LoginForm />
          </div>
        </div>
        <div
          id="first-div"
          className="flex items-center justify-center w-full flex-1"
        ></div>
      </div>
    </>
  );
}

export default Home;
