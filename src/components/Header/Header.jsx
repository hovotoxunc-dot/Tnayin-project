import { NavLink } from "react-router-dom";

export default function Header() {
  const navStyle = ({ isActive }) =>
    isActive
      ? "text-pink-400 text-[25px] px-8 py-3 no-underline"
      : "text-red-500 text-[25px] px-6 py-3 no-underline hover:bg-purple-300 hover:text-black transition-all duration-300";

  return (
    <nav className="w-full bg-gray-500 h-20 flex items-center">
      <ul className="flex justify-around w-full list-none items-center">
        <li>
          <NavLink to="/" className={navStyle}>Home</NavLink>
        </li>

        <li>
          <NavLink to="/AboutPage" className={navStyle}>About</NavLink>
        </li>

        <li>
          <NavLink to="/Contact" className={navStyle}>Contact</NavLink>
        </li>

        <li>
          <NavLink to="/Weather" className={navStyle}>Weather</NavLink>
        </li>

        <li>
          <NavLink to="/Register" className={navStyle}>Register</NavLink>
        </li>
      </ul>
    </nav>
  );
}