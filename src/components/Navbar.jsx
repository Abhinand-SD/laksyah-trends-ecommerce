import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import { Link, NavLink } from "react-router-dom"
import ShopContext from "../context/ShopContext"

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const {showSearch, setShowSearch, getCartCount} = useContext(ShopContext)

  const handdleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={assets.logo} alt="logo" className="w-28" /></Link> 

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">

        <NavLink to="/" text="Home" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" text="Home" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" text="Home" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" text="Home" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-5">
        <img onClick={()=> setShowSearch(!showSearch)} src={assets.search_icon} alt="searchicon" className="w-5 cursor-pointer" />

        <div className="group relative">
          <img src={assets.profile_icon} alt="profileicon" className="w-5 cursor-pointer" />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>

          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
        </Link>
        <img src={assets.menu_icon} alt="menubar" onClick={handdleToggle} className="w-5 cursor-pointer sm:hidden" />

        {/* sidebar */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${toggle ? 'w-full' : 'w-0'}`}>
          <div className="flex flex-col text-gray-600">
            <div onClick={handdleToggle} className="flex items-center gap-4 p-3 cursor-pointer">
              <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="dropdwonmenuback" />
              <p>Back</p>
            </div>

            <NavLink onClick={handdleToggle} className="py-2 pl-6 border-b" to='/' >Home</NavLink>
            <NavLink onClick={handdleToggle} className="py-2 pl-6 border-b" to='/collection' >Collection</NavLink>
            <NavLink onClick={handdleToggle} className="py-2 pl-6 border-b" to='/about' >About</NavLink>
            <NavLink onClick={handdleToggle} className="py-2 pl-6 border-b" to='/contact' >Contact</NavLink>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar
