import { NavLink } from 'react-router-dom';
import { FaPlus, FaList, FaHome, FaSignOutAlt } from 'react-icons/fa'; // Import icons

function Navbar() {
  const name = sessionStorage.getItem('universityName');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-green-500 p-4 md:flex md:items-center md:justify-between">
      <div className="flex items-center">
        <span className="text-white font-bold text-xl">University</span>
        <span className="text-white ml-4">{name}</span>
      </div>

      <div className="md:flex md:items-center space-x-4">
        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            ☰
          </button>
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <div className={`md:flex space-x-4 ${menuOpen ? 'block' : 'hidden'}`}>
          {/* Home */}
          <NavLink to={'/'} className="bg-white text-green-500 font-bold py-2 px-4 rounded-lg">
           
            Home
          </NavLink>

          {/* Add Programs */}
          <NavLink to={'add-programs'} className="bg-white text-green-500 font-bold py-2 px-4 rounded-lg">
           
            Add Programs
          </NavLink>

          {/* View Students List */}
          <NavLink to={'view-students'} className="bg-white text-green-500 font-bold py-2 px-4 rounded-lg">
           
            View Students List
          </NavLink>
          <div className="">
          <button
            onClick={(e) => {}}
            className="bg-white text-green-500 font-bold py-2 px-4 rounded-lg"
          >
            <NavLink to={'logout'} className="text-green-500">
              Log Out
            </NavLink>
          </button>
        </div>
        </div>

   
       
      </div>
    </nav>
  );
}

export default Navbar;