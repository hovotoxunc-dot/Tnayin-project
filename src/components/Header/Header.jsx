import { NavLink } from "react-router-dom";

// const links = [
//   { to: "/", name: "Home" },
//   { to: "/AboutPage", name: "About" },
//   { to: "/Contact", name: "Contact" },
//   { to: "/Weather", name: "Weather" },
//   { to: "/Register", name: "Register" },
// ];

// export default function Header() {
//   return (
//     <nav className="bg-red-600 p-2">
//       <ul className="flex justify-evenly items-center">
//         {links.map((link) => (
//           <li key={link.to}>
//             <NavLink
//               to={link.to}
//               className="flex items-center justify-center text-white w-[120px] h-[50px]
//               hover:bg-black hover:rounded-md transition"
//             >
//               {link.name}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default function Header() {
//   return (
//     <nav className="bg-red-600 p-3">
//       <ul className="flex justify-evenly items-center">
//         <li>
//           <NavLink
//             to="/"
//             className="text-white hover:bg-black hover:rounded-md transition px-4 py-2"
//           >
//             Home
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/AboutPage"
//             className="text-white hover:bg-black hover:rounded-md transition px-4 py-2"
//           >
//             About
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/Contact"
//             className="text-white hover:bg-black hover:rounded-md transition px-4 py-2"
//           >
//             Contact
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/Weather"
//             className="text-white hover:bg-black hover:rounded-md transition px-4 py-2"
//           >
//             Weather
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/Register"
//             className="text-white hover:bg-black hover:rounded-md transition px-4 py-2"
//           >
//             Register
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }




// export default function Header() {
//   return (
//     <div className="bg-red-600 p-3">
//       <ul className="flex justify-evenly items-center">
//         <li><NavLink to="/" className={({ isActive }) => isActive ? "text-white bg-black px-4 py-2 rounded-md" : "text-white px-4 py-2 hover:bg-black hover:rounded-md transition"}>Home</NavLink></li>
//         <li><NavLink to="/AboutPage" className={({ isActive }) => isActive ? "text-white bg-black px-4 py-2 rounded-md" : "text-white px-4 py-2 hover:bg-black hover:rounded-md transition"}>About</NavLink></li>
//         <li><NavLink to="/Contact" className={({ isActive }) => isActive ? "text-white bg-black px-4 py-2 rounded-md" : "text-white px-4 py-2 hover:bg-black hover:rounded-md transition"}>Contact</NavLink></li>
//         <li><NavLink to="/Weather" className={({ isActive }) => isActive ? "text-white bg-black px-4 py-2 rounded-md" : "text-white px-4 py-2 hover:bg-black hover:rounded-md transition"}>Weather</NavLink></li>
//         <li><NavLink to="/Register" className={({ isActive }) => isActive ? "text-white bg-black px-4 py-2 rounded-md" : "text-white px-4 py-2 hover:bg-black hover:rounded-md transition"}>Register</NavLink></li>
//       </ul>
//     </div>
//   );
// }