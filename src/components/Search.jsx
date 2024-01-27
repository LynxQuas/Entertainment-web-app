/* eslint-disable react/prop-types */
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {
    const searchText = useRef();
    const searchHandler = async (event) => {
        event.preventDefault();
        if (!searchText.current.value) return;

        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGE2Mzg3MjYzYmU4YWFkODNhZGU1ZTA5YjVjNGRiZCIsInN1YiI6IjY1MDkwMzViMzk0YTg3MDExYzllNmM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.An03Ut_9kl-VT8pNRJ83oUajfz0N8SeJu1Cq6zV53EM",
            },
        };

        const response = await fetch(
            `https://api.themoviedb.org/3/search/multi?query=
            ${searchText.current.value}&include_adult=false&language=en-US&page=1`,
            options
        );

        if (!response.ok) {
            console.log(response);
        }

        const result = await response.json();

        onSearch(result);
    };

    return (
        <form
            className="flex gap-5 w-full p-8 md:p-10 items-center "
            onSubmit={searchHandler}
        >
            <FaSearch style={{ color: "white", fontSize: "1.5rem" }} />
            <input
                type="text"
                ref={searchText}
                placeholder="Search for movies or TV series"
                className="w-full md:w-[50%] bg-inherit md:p-2 outline-none text-white placeholder:text-sm"
            />
            <button className="text-white bg-red-600 py-1 px-4 rounded-md">
                Search
            </button>
        </form>
    );
};

export default Search;
