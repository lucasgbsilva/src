import { Link, Outlet } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div className="container">
      <h1>Home Screen Happy ❤️❤️</h1>
      <Outlet />
    </div>
  );
}