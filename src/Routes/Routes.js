import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import ShowModal from "../Pages/Shared/modal/ShowModal";
import OurShop from "../Pages/OurShop/OurShop/OurShop";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/shop/:category',
                element: <OurShop></OurShop>
            }

        ],

    },
    {
        path: '/modal',
        element: <ShowModal></ShowModal>
    }
])