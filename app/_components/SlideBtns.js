"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";
function SlideBtns({ containerStyle, btnStyle, iconStyle }) {
  const swiper = useSwiper();
  return (
    <div className={containerStyle}>
      <button className={btnStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyle} />
      </button>
      <button className={btnStyle} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyle} />
      </button>
    </div>
  );
}

export default SlideBtns;
