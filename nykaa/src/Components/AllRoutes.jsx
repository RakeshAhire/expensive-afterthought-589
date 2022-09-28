import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Category from './Category'
function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
             <Route path="/category" element={<Category/>}></Route>
            {/*<Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route> */}
        </Routes>

    )
}
export default AllRoutes;