/* eslint-disable react/prop-types */
const TrendingContainer = ({ children }) => {
    return (
        <div
            className=" flex overflow-x-scroll scrollbar-hide scroll whitespace-nowrap gap-4 py-4 px-10 snap-x"
            id="slider"
        >
            {children}
        </div>
    );
};

export default TrendingContainer;
