import "./Button.css";
import React from "react";

type Props = {
  children: React.ReactNode;
  color? : 'default' | 'primary' | 'danger';
  size? : string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ children, color = 'default', size = 'base', onClick = (event) => console.log(event) }: Props) {
  return <button className={`${color} ${size}`} onClick={(event) => onClick(event)}>{children}</button>;
}

export default Button;