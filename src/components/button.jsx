import React, { useRef, useState } from "react";

const Button = ({
  variant = "white",
  text = "Click",
  ringVariant = "ring-black",
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-outfit font-medium py-2.5 px-4 rounded-lg shadow-sm transition-transform duration-300 ease-out";

  const variants = {
    white: `${base} bg-white text-gray-900 ${ringVariant}`,
    black: `${base} bg-gray-900 text-white ${ringVariant}`,
    brand: `${base} bg-green-600 text-white hover:bg-green-700 ${ringVariant}`,
    outline: `${base} bg-transparent text-gray-900 border border-gray-300 ${ringVariant}`,
  };
  const btnRef = useRef(null);
  const [transform, setTransform] = useState("translate3d(0,0,0)");
  const [scale, setScale] = useState(1);

  const handleMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    // maximum translation in px (increased for stronger movement)
    const max = 12;
    const dx = ((x - cx) / cx) * max;
    const dy = ((y - cy) / cy) * max;

    setTransform(`translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`);
  };

  const handleLeave = () => {
    setTransform("translate3d(0,0,0)");
    setScale(1);
  };

  const handleEnter = () => {
    // slightly scale up on hover
    setScale(1.07);
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
      onTouchStart={handleLeave}
      onFocus={handleLeave}
      onBlur={handleLeave}
      className={variants[variant] || variants.white}
      style={{ transform: `${transform} scale(${scale})` }}
    >
      {text}
    </button>
  );
};

export default Button;
