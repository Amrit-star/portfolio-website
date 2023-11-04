import React from 'react';
import ecommerce from "../assets/portfolio/ecommerce.png";
import noteApp from "../assets/portfolio/noteApp.png";
import education from "../assets/portfolio/education.png";
import toss from "../assets/portfolio/toss.png";
import colorFlipper from "../assets/portfolio/colorFlipper.png";
import calculator from "../assets/portfolio/calculator.png";


const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        src: ecommerce,
        demo: "https://amrit-star.github.io/Grocery-Store/",
      },
      {
        id: 2,
        src: noteApp,
        demo: "https://keeperappbyamrit.netlify.app/",
      },
      {
        id: 3,
        src: education,
        demo: "https://amrit-star.github.io/educational-website/",
      },
      {
        id: 4,
        src: toss,
        demo: "https://amrit-star.github.io/dice-game/",
      },
      {
        id: 5,
        src: colorFlipper,
        demo: "https://amrit-star.github.io/color-flipper/",
      },
      {
        id: 6,
        src: calculator,
        demo: "https://amrit-star.github.io/Calculator/",
      },
    ];
  
    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
          <div className="pb-10">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, demo }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <a href={demo} target="_blank" rel="noreferrer">
                    <button className="w-1/2 px-6 py-1 m-2 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>
                  
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;