import { UnstyledButton } from "./unstyled-button";
import styles from "./button.module.scss";
import classNames from "classnames";

export enum ButtonSize {
  Small = "sm",
  Medium = "md",
  Large = "lg",
  XLarge = "xl",
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
};
export function Button({
  className,
  size = ButtonSize.Medium,
  ...props
}: ButtonProps) {
  return (
    <UnstyledButton
      {...props}
      className={classNames(styles[size], className, styles.button)}
    />
  );
}
