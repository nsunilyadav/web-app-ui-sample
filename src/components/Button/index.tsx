import React from "react";
import {
  Button as NativeButton,
  ButtonProps as NativeButtonProps,
} from "react-bootstrap";
import styles from "./styles.module.less";
import classNames from "classnames";

interface ButtonProps extends Omit<NativeButtonProps, "className" | "size"> {
  block?: boolean;
  className?: string;
  size?: "default" | "large" | "small";
}

const Button: React.FC<ButtonProps> = ({
  block,
  className,
  children,
  size = "default",
  ...props
}) => {
  return (
    <NativeButton
      className={classNames(className, styles.customButton, {
        [styles.fullWidth]: block,
        [styles[size]]: true,
      })}
      {...props}
    >
      {children}
    </NativeButton>
  );
};

export default Button;
