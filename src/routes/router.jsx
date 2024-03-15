import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    }
]);

export default router;