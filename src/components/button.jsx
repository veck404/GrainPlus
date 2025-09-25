import React from "react";

const Button = ({
  variant = "white",
  text = "Click",
  ringVariant = "ring-black",
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-outfit font-medium py-2.5 px-4 rounded-lg shadow-sm transition-transform duration-200";

  const variants = {
    white: `${base} bg-white text-gray-900 ${ringVariant}`,
    black: `${base} bg-gray-900 text-white ${ringVariant}`,
    outline: `${base} bg-transparent text-gray-900 border border-gray-300 ${ringVariant}`,
  };

  return (
    <button className={variants[variant] || variants.white}>{text}</button>
  );
};

export default Button;
