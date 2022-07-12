import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
export default Main;
