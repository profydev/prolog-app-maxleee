import { UnstyledButton } from "./unstyled-button";
import styles from "./button.module.scss";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <UnstyledButton {...props} className={styles.button} />;
}
