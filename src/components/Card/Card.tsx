import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  disableEffectOnHover?: boolean;
};

const Card: React.FC<CardProps> = ({
  children,
  className,
  disableEffectOnHover = false,
}) => {
  return (
    <div
      className={`cursor-default rounded-xl bg-white py-8 px-4 shadow transition  ${
        !disableEffectOnHover && "hover:scale-[1.02] hover:bg-neutral-100"
      } ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;
