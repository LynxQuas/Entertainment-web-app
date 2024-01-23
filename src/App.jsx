import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CollectionPage from "./pages/CollectionPage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import AppLayout from "./pages/AppLayout";

const App = () => {
    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            children: [
                { index: "/", element: <CollectionPage /> },
                { path: "/movies", element: <MoviesPage /> },
                { path: "/series", element: <SeriesPage /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
