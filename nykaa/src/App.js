

import AllRoutes from './Components/AllRoutes';
// import Home from './Components/Home';
import Navbar from "./Components/Navbar";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      
      {/* <Home /> */}
    </>
  );
}

export default App;
