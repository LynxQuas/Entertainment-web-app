import { FaChevronLeft } from "react-icons/fa";

const SlideLeft = () => {
    const scrollLeft = () => {
        const slider = document.getElementById("slider");
        console.log(slider.scrollLeft);
        slider.scrollLeft = slider.scrollLeft - 300;
    };

    const slideClass =
        "w-14 h-14 text-white cursor-pointer bg-gray-700 p-4 rounded-full absolute top-[35%]  hover:bg-gray-600";

    return (
        <FaChevronLeft
            size={40}
            onClick={scrollLeft}
            className={`${slideClass} left-0`}
        />
    );
};

export default SlideLeft;
