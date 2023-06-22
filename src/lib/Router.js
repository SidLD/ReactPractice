import { createBrowserRouter, createRoutesFromElements , Route} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import About from "../pages/About/view.jsx";
import Blogs from "../pages/Blogs/view";
import ProgressBar from "../components/ProgressBar";
import CustomeForm from "../components/CustomeForm";
import Recursion from "../components/Recursion";

const routers = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index path="about" element={<About />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="form" element={<CustomeForm/>} />
            <Route path="recursive" element={<Recursion/>} />
            <Route path="progress" element={<ProgressBar />} />
        </Route>
    )
)
export default routers