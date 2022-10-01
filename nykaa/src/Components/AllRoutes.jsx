import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Category from './Category'
import Login from './Login'
function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
             <Route path="/category" element={<Category/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path="/faceprimer" element={<Face/>}></Route>
           {/* <Route></Route>
            <Route></Route> */}
        </Routes>

    )
}
export default AllRoutes;