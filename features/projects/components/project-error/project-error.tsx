import styles from "./project-error.module.scss";
import { Button } from "@features/ui";

export function ProjectError() {
  return (
    <div className={styles.errorWrapper}>
      <p className={styles.errorMessage}>
        There was a problem while loading the project data
      </p>
      <Button />
    </div>
  );
}
