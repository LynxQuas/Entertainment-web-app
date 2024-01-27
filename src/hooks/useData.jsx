import { useEffect, useState } from "react";

const useData = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGE2Mzg3MjYzYmU4YWFkODNhZGU1ZTA5YjVjNGRiZCIsInN1YiI6IjY1MDkwMzViMzk0YTg3MDExYzllNmM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.An03Ut_9kl-VT8pNRJ83oUajfz0N8SeJu1Cq6zV53EM",
            },
        };
        const getData = async (options) => {
            try {
                const res = await fetch(url, options);

                if (!res.ok) {
                    throw new Error("Failed to fetch data.");
                }

                const result = await res.json();

                setData(result.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        getData(options);
    }, [url]);

    return { data, isLoading, error };
};

export default useData;
