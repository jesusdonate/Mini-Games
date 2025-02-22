import { FaGear, FaHouse, FaBars, FaUser } from "react-icons/fa6";

interface NavBarIconProps {
  icon: React.ReactNode;
  text?: string; // Optional tooltip text
}
// Classnames for SideBar
// fixed top-0 left-0 h-screen w-16 m-0
// flex flex-col bg-gray-900 text-white shadow-lg
const NavBar = () => {
  return (
    <header>
      <div
        id="navbar"
        className="fixed h-11 w-full flex flex-row justify-between bg-navbar 
        rounded-full px-4 shadow-lg "
      >
        <div className="navbar-left flex flex-row space-x-4 pl-4">
          <NavBarIcon icon={<FaBars size="20" />} text="Menu" />
          <NavBarIcon icon={<FaHouse size="20" />} text="Home" />
        </div>

        {/* TODO: Replace h3 element with search bar */}
        <div
          id="search-bar"
          className="flex-grow text-center text-white border-2 border-black"
        >
          Search Bar Here
        </div>

        <div className="navbar-right flex flex-row space-x-4 pr-4">
          <NavBarIcon icon={<FaUser size="20" />} text="Profile" />
          <NavBarIcon icon={<FaGear size="20" />} text="Settings" />
        </div>
      </div>
    </header>
  );
};

const NavBarIcon = ({ icon, text = "tooltip 💡" }: NavBarIconProps) => (
  <div className="navbar-icon group">
    {icon}
    <span className="navbar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default NavBar;
