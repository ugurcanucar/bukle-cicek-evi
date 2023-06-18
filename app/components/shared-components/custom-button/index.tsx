import React from "react";
import style from "./style.module.scss";
type ButtonProps = {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  buttonStyle?: React.CSSProperties;
};

const CustomButton = (props: ButtonProps) => {
  return (
    <button
      className={style.button_wrapper}
      style={{
        backgroundColor: props.backgroundColor ?? "#F59728",
        color: props.textColor ?? "white",
        borderRadius: "100px",
        ...props.buttonStyle,
      }}
    >
      <span>{props.text}</span>
    </button>
  );
};

export default CustomButton;
