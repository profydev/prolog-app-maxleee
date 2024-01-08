import styles from "./footer.module.scss";
import getConfig from "next/config";

export function Footer() {
  const { publicRuntimeConfig } = getConfig();
  const version = publicRuntimeConfig?.version;

  return (
    <footer className={styles.footer}>
      <p className={styles.version}>Version: {version}</p>
      <ul className={styles.footerLinksWrapper}>
        <li>
          <a href="#" className={styles.footerLink}>
            Docs
          </a>
        </li>
        <li>
          <a href="#" className={styles.footerLink}>
            API
          </a>
        </li>
        <li>
          <a href="#" className={styles.footerLink}>
            Help
          </a>
        </li>
        <li>
          <a href="#" className={styles.footerLink}>
            Community
          </a>
        </li>
      </ul>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className={styles.logo}>
        <img src="/icons/logo-small.svg" alt="logo" />
      </div>
    </footer>
  );
}
