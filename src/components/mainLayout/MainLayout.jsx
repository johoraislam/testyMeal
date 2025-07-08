import { Outlet } from "react-router"
import Footer from "./Foteer/Footer"
import Navber from "./Navbar/Navber"

const MainLayout = () => {
  return (
    <div>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout