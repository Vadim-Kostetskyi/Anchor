import type { FC, ReactNode } from "react";
import styles from "./index.module.scss";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <>
    {/* <Header /> */}
    <main className={styles.main}>{children}</main>
    {/* <Footer /> */}
  </>
);

export default MainLayout;
