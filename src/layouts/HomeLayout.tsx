import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const HomeLayout = () => {
  return (
    <div className="h-dvh flex flex-col">
      <nav>
        <NavBar />
      </nav>
      <main>
        <SideBar />
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
