import React from "react";
import "./styles/globals.css"; // Import CSS

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className="px-4 bg-green-500" onClick={onClick}>
      {children}
    </button>
  );
};
