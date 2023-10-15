import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:"/",
        element:<h1>Hello again</h1>
    },
    {
        path:"/about",
        element:<h2>Aboutt</h2>
    }
])

export default router;