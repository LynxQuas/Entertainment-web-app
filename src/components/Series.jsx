/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useData from "../hooks/useData";
import MovieCart from "./MovieCart";

const Series = ({ url, showSeeAll }) => {
    const { data, error, isLoading } = useData(url);

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
        <>
            <div className="flex items-center justify-between text-white my-10">
                <h2 className="text-2xl ">Series</h2>
                {showSeeAll && (
                    <Link
                        to="/series"
                        className="bg-red-600 w-[5rem] text-center"
                    >
                        See All
                    </Link>
                )}
            </div>
            <div className="flex flex-wrap gap-2 justify-start ">
                {data.map((data) => (
                    <MovieCart
                        key={data.id}
                        data={data}
                        className={"w-full md:w-[16rem] p-2"}
                    />
                ))}
            </div>
        </>
    );
};

export default Series;
