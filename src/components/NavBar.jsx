import { Link } from "react-router-dom";
import LanguageDropdown from "./LanguageDropdown";

function NavBar() {
    return (
        <nav className="w-full px-6 py-4 flex justify-between items-center shadow-2xl shadow-slate-200 bg-gradient-to-r from-gray-900 via-gray-800 to-slate-900 z-50">
            <section className="flex items-center justify-between px-4 gap-8">
                <div className="text-2xl font-bold text-white">Wegic</div>
                <ul className="hidden md:flex gap-6 text-gray-300 font-medium">
                    <li className="hover:text-gray-400 transition duration-100 cursor-pointer">Best Practice</li>
                    <li className="hover:text-gray-400 transition duration-100 cursor-pointer">Help Center</li>
                    <li className="hover:text-gray-400 transition duration-100 cursor-pointer">Pricing</li>
                </ul>
            </section>
            <section className="flex items-center gap-4">
                <ul className="hidden md:flex gap-6 text-gray-300 font-medium">
                    <LanguageDropdown/>
                    <Link to={"/login"}>
                        <li className="hover:text-gray-400 transition duration-100 cursor-pointer">Login</li>
                    </Link>
                </ul>
                <button className="bg-white text-slate-800 font-bold px-4 py-2 rounded-md hover:bg-gray-400 hover:text-white transition duration-200">
                    Build Your Site
                </button>
            </section>
        </nav>
    );
}

export default NavBar;
