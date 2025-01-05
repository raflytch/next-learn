import { useRouter } from "next/router";
import Footer from "../Footer";
import Navbar from "../Navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const disabledNavbar = ["/auth/login", "/auth/register", "/404"];
const disabledFooter = ["/auth/login", "/auth/register", "/404"];

const AppShell = ({ children }: AppShellProps) => {
  const { pathname } = useRouter();
  return (
    <>
      <main>
        {!disabledNavbar.includes(pathname) && <Navbar />}
        {children}
        {!disabledFooter.includes(pathname) && <Footer />}
      </main>
    </>
  );
};

export default AppShell;
