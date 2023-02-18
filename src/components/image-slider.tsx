"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Cathedrale from "/public/cathedrale.jpg";
import Rts2021 from "/public/rts2021.jpg";
import Rts2022 from "/public/rts2022.jpg";
import RatiscrumLogo from "/public/rts-logo.png";

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const images = [Rts2021, Rts2022, RatiscrumLogo];

  return (
    <div className="navigation-wrapper relative">
      <div ref={sliderRef} className="keen-slider">
        {images.map((image, index) => (
          <div key={index} className="keen-slider__slide rounded-xl shadow border-t border-slate-600/30">
            <Image
              className="bg-cover bg-center"
              src={image}
              alt="Ratiscrum Logo"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
        ))
        }
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) => {
              instanceRef.current?.prev();
            }}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) => {
              instanceRef.current?.next();
            }}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </div>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`bg-gray-700 transition border-t hover:scale-105 border-gray-600 hover:shadow-xl shadow-lg rounded-full p-3.5 w-10 h-10 absolute top-1/2 fill-slate-200 cursor-pointer hover:bg-gray-800 ${props.left ? "-left-6" : "-right-6 left-auto"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
