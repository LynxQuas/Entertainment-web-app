import CollectionIcon from "./CollectionIcon";
import MovieIcon from "./MovieIcon";
import SeriesIcon from "./SeriesIcon";

const Navbar = () => {
    return (
        <nav className="bg-slate-900 flex items-center text-stone-100 gap-12">
            <span className="p-2">Logo</span>
            <ul className="flex gap-10 items-center p-2">
                <CollectionIcon className={"w-10 h-10 fill-slate-100"} />

                <MovieIcon className={"w-10 h-10 stroke-gray-500"} />

                <SeriesIcon className={"w-10 h-10 stroke-gray-500"} />
            </ul>
        </nav>
    );
};

export default Navbar;
