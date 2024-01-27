/* eslint-disable react/prop-types */
const MovieCart = ({ data, className }) => {
    return (
        <div key={data.id} className={className}>
            <img
                src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                alt={data.name ? data.name : data.title}
            />

            <div className="flex flex-col gap-1">
                <div className="flex gap-2 text-gray-600">
                    <span className="text-gray-300">
                        {data.vote_average.toFixed(2)}
                    </span>

                    <span>
                        {data.release_date
                            ? data.release_date
                            : data.first_air_date}
                    </span>

                    <span>{data.media_type}</span>
                </div>

                <h2 className="font-semibold text-gray-300">
                    {data.name ? data.name : data.title}
                </h2>
            </div>
        </div>
    );
};

export default MovieCart;
