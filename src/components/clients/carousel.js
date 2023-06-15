import React from "react";

export const Carousel = ({ images }) => {
  return (
    <div className="relative max-w-[100rem] m-auto overflow-x-hidden pb-8 before:bg-gradient-to-r before:absolute before:z-10 before:h-40 sm:before:w-40 sm:before:from-white before:w-20 before:top-0 before:left-0 before:from-[rgb(255,255,255,0.8)] after:bg-gradient-to-l after:absolute after:z-10 after:h-40 after:w-20 after:top-0 after:right-0 after:from-[rgb(255,255,255,0.8)] sm:after:w-40 sm:after:from-white">
      <div className="grid grid-cols-[repeat(20,minmax(0,1fr))] place-items-center gap-12 w-[200rem] p-6 animate-scroll">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Carousel client ${index}`} />
        ))}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Carousel client ${index}`} />
        ))}
      </div>
    </div>
  );
};
