import { FaChevronRight } from "react-icons/fa";

const SlideRight = () => {
    const scrollRight = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 300;
    };

    const slideClass =
        "w-14 h-14 text-white cursor-pointer bg-gray-700 p-4 rounded-full absolute top-[35%]  hover:bg-gray-600";

    return (
        <FaChevronRight
            onClick={scrollRight}
            className={`${slideClass} right-0`}
        />
    );
};

export default SlideRight;
