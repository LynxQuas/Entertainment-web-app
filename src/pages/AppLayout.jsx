import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = () => {
    return (
        <div className="flex w-screen flex-col md:flex-row">
            <header className="md:w-[10rem]">
                <Navbar />
            </header>
            <main className="overflow-hidden">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
