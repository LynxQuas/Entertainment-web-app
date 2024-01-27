import useData from "../hooks/useData.jsx";
import SlideLeft from "../ui/SlideLeft.jsx";
import SlideRight from "../ui/SlideRight.jsx";
import TrendingContainer from "../ui/TrendingContainer.jsx";
import MovieCart from "./MovieCart.jsx";

const TrendingAll = () => {
    const { data, isLoading, error } = useData(
        "https://api.themoviedb.org/3/trending/all/day?language=en-US"
    );
    const trendingMovieCartClass =
        "min-w-[20rem] flex text-white flex-col gap-2 snap-center";

    if (isLoading)
        return (
            <div className="w-full">
                <h1 className="text-white">Loading....</h1>
            </div>
        );

    if (error)
        return (
            <div className="w-full">
                <h1 className="text-red-600">{error}</h1>
            </div>
        );

    return (
        <div className="relative w-full border-b-2 border-gray-400">
            <h1 className="text-white text-2xl px-10">Trending</h1>
            <TrendingContainer>
                {data.map((data) => (
                    <MovieCart
                        data={data}
                        key={data.id}
                        className={trendingMovieCartClass}
                    />
                ))}
            </TrendingContainer>
            <SlideLeft />
            <SlideRight />
        </div>
    );
};

export default TrendingAll;
