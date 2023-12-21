import styles from "./footer.module.scss";
import getConfig from "next/config";

export function Footer() {
  const { publicRuntimeConfig } = getConfig();
  const version = publicRuntimeConfig?.version;

  return (
    <footer className={styles.footer}>
      <p className={styles.version}>Version: {version}</p>
      <div className={styles.footerLinksWrapper}>
        <a href="#" className={styles.footerLink}>
          Docs
        </a>
        <a href="#" className={styles.footerLink}>
          API
        </a>
        <a href="#" className={styles.footerLink}>
          Help
        </a>
        <a href="#" className={styles.footerLink}>
          Community
        </a>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/logo-small.svg" alt="logo" className={styles.logo} />
    </footer>
  );
}
