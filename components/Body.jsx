import { Outlet } from "react-router-dom";
import Cabecalho from "./Cabecalho";
import Footer from "./Footer";

export default function Body() {
  return (
    <div>
      <Cabecalho />
      <Outlet />
      <Footer />
    </div>
  );
}