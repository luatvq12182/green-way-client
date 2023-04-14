import { createBrowserRouter } from "react-router-dom";

import ClientLayout from "@/layouts";

import HomePage from "@/pages/HomePage";
import ProductsPage from "@/pages/Products";
import News from "@/pages/News";
import Contact from "@/pages/Contact";
import ProductDetail from "@/pages/ProductDetail";
import PostDetail from "@/pages/PostDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ClientLayout />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "products",
                element: <ProductsPage />,
            },
            {
                path: "products/:slug/:id",
                element: <ProductDetail />,
            },
            {
                path: "news",
                element: <News />,
            },
            {
                path: "news/:slug/:id",
                element: <PostDetail />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
    {
        path: "*",
        element: <h1>404</h1>,
    },
]);

export default router;
