import { TbWorld } from "react-icons/tb";
import { FaFacebookF,FaTwitter ,FaInstagram  } from "react-icons/fa";




export default function Footer() {
  return (
    <footer className="flex justify-between align-items border-t-2 m-auto max-w-[1200px]">
      <ul className="flex justify-between align-items gap-1 p-3">
        <li>&copy Airbnb, inc,</li>
        <li>&#183;</li>
        <a href="#">Vertraulichkeit</a>
        <li>&#183;</li>
        <a href="#">Allgemeine Geschäftsbedingungen</a>
        <li>&#183;</li>
        <a href="#">Sitemap</a>
        <li>&#183;</li>
        <a href="#">Betrieb der Website</a>
        <li>&#183;</li>
        <a href="#">Firmeninformationen</a>
      </ul >
      <ul className="flex justify-between items-center gap-2 p-3">
        <li><a href="#" className="font-bold flex items-center gap-1"><TbWorld /> <p>Deutsch (DE)</p></a></li>
        <li><a href="#" className="font-bold">€ EUR</a></li>
        <li className="bg-[#484848] p-1" ><a href="#" className="text-[#fff]  text-sm" ><FaFacebookF/></a></li>
        <li className="bg-[#484848] p-1" ><a href="#" className="text-[#fff]  text-sm" ><FaTwitter/></a></li>
        <li className="bg-[#484848] p-1" ><a href="#" className="text-[#fff] text-sm" ><FaInstagram/></a></li>
      </ul>
    </footer>
  )
}