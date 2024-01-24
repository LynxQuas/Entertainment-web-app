import { NavLink } from "react-router-dom";
import CollectionIcon from "./CollectionIcon";
import MovieIcon from "./MovieIcon";
import SeriesIcon from "./SeriesIcon";

const Navbar = () => {
    return (
        <nav className="bg-slate-900 flex items-center text-stone-100 gap-12">
            <span className="p-2">Logo</span>
            <ul className="flex gap-10 items-center p-2">
                <li>
                    <NavLink to="/">
                        {({ isActive }) => (
                            <CollectionIcon
                                className={`w-10 h-10 fill-gray-${
                                    isActive ? "100" : "500"
                                }`}
                            />
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies">
                        {({ isActive }) => (
                            <MovieIcon
                                className={`w-10 h-10 stroke-gray-${
                                    isActive ? "100" : "500"
                                }`}
                            />
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/series">
                        {({ isActive }) => (
                            <SeriesIcon
                                className={`w-10 h-10 stroke-gray-${
                                    isActive ? "100" : "500"
                                }`}
                            />
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
