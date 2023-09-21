import { useState } from "react";
import ImageMobile from "./assets/illustration-woman-online-mobile.svg";
import { faqData } from "./components/data";
import Down from "./assets/icon-arrow-down.svg";

function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg text-center relative w-[90%] md:w-[920px] flex flex-col md:flex-row">
        <div className="md:w-[40%] flex items-center justify-center">
          <img
            src={ImageMobile}
            alt="Card Image"
            className="w-[80%] md:w-[100%]"
          />
        </div>
        <div className="md:w-[60%] p-4 flex flex-col justify-center items-center">
          <h1 className="text-black text-2xl p-4 font-semibold">FAQ</h1>
          <div>
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`mb-4 text-center ${
                  expandedIndex === index ? "relative" : ""
                }`}>
                <div
                  className="cursor-pointer flex justify-between items-center "
                  onClick={() => toggleAccordion(index)}>
                  <span className="mr-4">{item.question}</span>
                  <img
                    src={Down}
                    alt="Toggle Icon"
                    className={`w-3 h-3  transition-transform transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expandedIndex === index && (
                  <div className="mt-2 text-gray-500 text-left">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
