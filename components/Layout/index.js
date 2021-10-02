import Header from "../Header";
import Footer from "../Footer";
import styles from "../../styles/Layout.module.css";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
