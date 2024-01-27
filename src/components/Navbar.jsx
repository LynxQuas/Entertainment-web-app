import { Link, NavLink } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { PiTelevision } from "react-icons/pi";
import { MdMovieCreation } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className="bg-slate-900 flex items-center text-stone-100 gap-12 p-4 md:py-10 md:flex-col md:w-[5rem] md:min-h-screen md:h-full">
            <Link to="/">
                <MdMovieCreation
                    style={{
                        fontSize: "2.5rem",
                        color: " red",
                    }}
                />
            </Link>
            <ul className="flex gap-10 items-center p-2 md:flex-col">
                <li>
                    <NavLink to="/">
                        {({ isActive }) => (
                            <AiFillAppstore
                                style={{
                                    fontSize: "2rem",
                                    color: isActive ? "white" : "gray",
                                }}
                            />
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies">
                        {({ isActive }) => (
                            <MdLocalMovies
                                style={{
                                    color: isActive ? "white" : "gray",
                                    fontSize: "2rem",
                                }}
                            />
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/series">
                        {({ isActive }) => (
                            <PiTelevision
                                style={{
                                    color: isActive ? "white" : "gray",
                                    fontSize: "2rem",
                                }}
                            />
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
