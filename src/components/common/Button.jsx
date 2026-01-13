import React from "react";

const Button = ({ children, onClick, type = "primary", size = "md" }) => {
  const btnClass = `btn btn-${type} btn-${size}`;
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
