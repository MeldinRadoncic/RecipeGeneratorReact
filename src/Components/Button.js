import React from "react";

const Button = ({
  label,
  icon,
  type,
  onClick,
  className,
}) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={className}>
        {label}
        {icon && (
          <span className='ml-2 mt-2'>
            {icon}
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
