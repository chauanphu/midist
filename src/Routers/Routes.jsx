import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import AI4Health from "../Pages/ProjectPage/AI4Health/AI4Health";
import ParcelLocker from "../Pages/ProjectPage/ParcelLocker/ParcelLocker";
import StudentTracking from "../Pages/ProjectPage/StudentTracking/StudentTracking";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <HomePage/>},
            {path: "ai4health", element: <AI4Health/>},
            {path: "parcel_locker", element: <ParcelLocker/>},
            {path: "student_tracking", element: <StudentTracking/>}
        ]
    }
]);