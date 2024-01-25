import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = () => {
    return (
        <div className="flex w-screen flex-col md:flex-row">
            <header>
                <Navbar />
            </header>
            <main className="w-screen h-screen">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
