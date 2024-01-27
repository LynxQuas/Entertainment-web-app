import { useState } from "react";
import Series from "../components/Series";

const SeriesPage = () => {
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
                <Series
                    url={`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${pageNum}&sort_by=popularity.desc`}
                />
            </div>
        </>
    );
};

export default SeriesPage;
