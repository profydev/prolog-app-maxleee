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
  Error = "error",
}

export enum ButtonVariant {
  Default = "default",
  Empty = "empty",
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
};
export function Button({
  className,
  size = ButtonSize.Medium,
  color = ButtonColor.Primary,
  variant = ButtonVariant.Default,
  ...props
}: ButtonProps) {
  return (
    <UnstyledButton
      {...props}
      className={classNames(
        styles[size],
        styles[color],
        styles[variant],
        className,
        styles.button,
      )}
    />
  );
}
