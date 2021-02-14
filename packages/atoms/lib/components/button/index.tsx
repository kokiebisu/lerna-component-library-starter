import React from "react";
import "../../styles.css";

export const Button = () => {
  return (
    <button
      onClick={() => alert("The button is clicked")}
      className="px-5 py-3 bg-red-400 rounded-lg text-white font-bold"
    >
      Button
    </button>
  );
};
