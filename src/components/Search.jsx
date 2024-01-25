import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <div className="flex gap-5 w-full p-8 md:p-10 items-center ">
            <FaSearch style={{ color: "white", fontSize: "1.5rem" }} />
            <input
                type="text"
                placeholder="Search for movies or TV series"
                className="w-full md:w-[50%] bg-inherit md:p-2 outline-none text-white"
            />
        </div>
    );
};

export default Search;
