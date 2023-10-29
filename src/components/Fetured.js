import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Fetured = () => {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlider = () => {
    const isFirstSlider = currentIndex === 0;
    const newIndex = isFirstSlider ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const islastSlide = currentIndex === sliders.length - 1;
    const newIndex = islastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const moveToSlides = (slidIndex) => {
    setCurrentIndex(slidIndex);
  };
  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div
        className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl
       p-2 rounded-full cursor-pointer bg-orange-700"
      >
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>
      <div
        className=" absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl
       p-2 rounded-full cursor-pointer bg-orange-700"
      >
        <BsChevronCompactRight onClick={nextSlide} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((sliderItems, slidIndex) => {
          return (
            <div
              key={slidIndex}
              onClick={() => moveToSlides(slidIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fetured;
