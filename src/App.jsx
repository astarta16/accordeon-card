import { useState } from 'react';
import ImageMobile from './assets/illustration-woman-online-mobile.svg'
// import ImageDeskop from './assets/illustration-woman-online-desktop.svg'
// import data from './components/data'

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white shadow-md rounded-lg text-center w-[920px] h-[509px]">
         <h1 className="text-black text-2xl ml-[100px] font-semibold">FAQ</h1>
         <div className="w-1/2">
          <img
          src={ImageMobile}
          alt="Card Image"
         className='top-[-40px]'
          
        />
         </div>
        
       
       
      </div>
    </div>
  );
}

export default App
