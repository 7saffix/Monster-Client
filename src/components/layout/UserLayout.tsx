import { Outlet } from "react-router";
import Header from "../common/Header";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const UserLayout = () => {
  return (
    <div>
      {/* header  */}
      <Header />
      <Navbar />
      {/* main  */}
      <main>
        <Outlet />
      </main>
      {/* footer  */}
      <Footer />
    </div>
  );
};

export default UserLayout;
