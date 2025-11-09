import { Outlet } from "react-router";
import Navbar from "../../Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <header></header>
      <main className="">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
