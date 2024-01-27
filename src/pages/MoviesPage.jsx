import { useState } from "react";
import Movies from "../components/Movies";

const MoviePage = () => {
    const [pageNum, setPageNum] = useState(1);
    return (
        <>
            <div className="text-white flex justify-center gap-10 pt-10">
                <button
                    className={pageNum === 1 && "hidden"}
                    onClick={() => setPageNum((prev) => prev - 1)}
                >
                    Previous
                </button>

                <span>{pageNum}</span>

                <button onClick={() => setPageNum((prev) => prev + 1)}>
                    Next
                </button>
            </div>

            <div className="flex flex-col justify-center px-10">
                <Movies
                    url={`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNum}&sort_by=popularity.desc`}
                />
            </div>
        </>
    );
};

export default MoviePage;
