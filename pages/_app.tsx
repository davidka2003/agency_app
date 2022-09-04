import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "components/Header";
import styles from "./_app.module.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className={styles.MainWrapper}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
