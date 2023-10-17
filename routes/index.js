import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculadora from "../components/Calculadora";
import ContatoScreen from "../screens/ContatoScreen";
import HomeScreen from "../screens/HomeScreen";
import Body from "../components/Body";
import FetchScreen from "../screens/FetchScreen";

export default function RoutesRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
          <Route element={<HomeScreen />} path="/" />
          <Route element={<FetchScreen />} path="/fetch" />
          <Route element={<ContatoScreen />} path="/contato" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}