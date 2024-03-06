import { UnstyledButton } from "./unstyled-button";
import styles from "./button.module.scss";
import classNames from "classnames";

export enum ButtonSize {
  Small = "sm",
  Medium = "md",
  Large = "lg",
  XLarge = "xl",
}

export enum ButtonColor {
  Primary = "primary",
  Secondary = "secondary",
  Gray = "gray",
  Empty = "empty",
  EmptyGray = "emptyGray",
  Error = "error",
  EmptyError = "emptyError",
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  color?: ButtonColor;
};
export function Button({
  className,
  size = ButtonSize.Medium,
  color = ButtonColor.Primary,
  ...props
}: ButtonProps) {
  return (
    <UnstyledButton
      {...props}
      className={classNames(
        styles[size],
        styles[color],
        className,
        styles.button,
      )}
    />
  );
}
