import { data } from "../../public/data.js";
import SlideLeft from "../ui/SlideLeft.jsx";
import SlideRight from "../ui/SlideRight.jsx";
import TrendingContainer from "../ui/TrendingContainer.jsx";
import MovieCart from "./MovieCart.jsx";

const TrendingAll = () => {
    return (
        <div className="relative w-full">
            <h1 className="text-white text-2xl px-10">Trending</h1>
            <TrendingContainer>
                {data.map((data) => (
                    <MovieCart data={data} key={data.id} />
                ))}
            </TrendingContainer>
            <SlideLeft />
            <SlideRight />
        </div>
    );
};

export default TrendingAll;
