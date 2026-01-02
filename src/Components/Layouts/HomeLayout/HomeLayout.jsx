import { Outlet } from "react-router";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <nav className="">
        <Navbar></Navbar>
      </nav>
      <header></header>
      <main className="">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
