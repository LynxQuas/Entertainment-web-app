import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <>
            <header></header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default AppLayout;
