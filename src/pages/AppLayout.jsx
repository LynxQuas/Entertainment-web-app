import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <header className="md:max-w-[10rem]">
                <Navbar />
            </header>
            <main className="overflow-hidden bg-[#03001a]">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
