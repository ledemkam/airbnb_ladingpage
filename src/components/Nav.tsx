import { Link } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

export default function Nav() {
  return (
    <nav className="w-full flex items-center justify-between p-3 px-20">
      <Link to="/" className="text-2xl font-bold flex items-center gap-2 text-[#ff5a5f]">
        <FaAirbnb className="text-4xl" /> 
        <span>airbnb</span>
      </Link>

      <ul className="flex items-center gap-4 justify-center">
        <li className="font-bold text-[#484848]"><a href="#">Gehäuse</a></li>
        <li className="text-[#484848]"><a href="#">Erlebnisse</a></li>
        <li className=" text-[#484848]"><a href="#">Online-Entdeckungen</a></li>
      </ul>

      <div className="flex items-center justify-center gap-3">
        <a href="#"><TbWorld /></a>
        <div className="flex items-center justify-center gap-3 border border-[rgb(237,237,237)] p-3 rounded-full hover:shadow-md cursor-pointer">
          <IoMdMenu className="text-xl"/>
          <FaCircleUser className="text-3xl" />
        </div>
      </div>

    </nav>
  )
}