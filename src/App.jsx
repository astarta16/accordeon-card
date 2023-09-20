import { useState } from "react";
import ImageMobile from "./assets/illustration-woman-online-mobile.svg";
// import ImageDeskop from './assets/illustration-woman-online-desktop.svg'
// import data from './components/data'

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg text-center relative w-[90%] h-[509px] md:w-[920px] flex md:flex-row flex-col">
        <div className="md:w-[40%] flex items-center justify-center">
          <img src={ImageMobile} alt="Card Image" className="w-[80%] md:w-[100%]" />
        </div>
        <div className="md:w-[60%] p-4">
          <h1 className="text-black text-2xl font-semibold">FAQ</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
