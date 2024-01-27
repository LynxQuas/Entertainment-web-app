import { useState } from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";
import Series from "../components/Series";
import TrendingAll from "../components/TrendingAll";
import MovieCart from "../components/MovieCart";

const CollectionPage = () => {
    const [searchResult, setSearchResult] = useState(null);

    console.log(searchResult);
    return (
        <>
            <Search onSearch={setSearchResult} />
            {searchResult && (
                <>
                    <h1 className="text-2xl text-white p-5">Search Results</h1>
                    <div className="flex justify-start w-full flex-wrap gap-4 border-b-2 border-gray-400 p-4">
                        {searchResult.results.map((item) => (
                            <MovieCart
                                key={item.id}
                                data={item}
                                className={"w-[20rem]"}
                            />
                        ))}
                    </div>
                </>
            )}

            <TrendingAll />
            <div className="flex flex-col px-10 py-5 border-b-2 border-gray-400">
                <Movies
                    showSeeAll={true}
                    www
                    url={
                        "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
                    }
                />
            </div>
            <div className="flex flex-col px-10 py-5">
                <Series
                    showSeeAll={true}
                    url={
                        "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
                    }
                />
            </div>
        </>
    );
};

export default CollectionPage;
