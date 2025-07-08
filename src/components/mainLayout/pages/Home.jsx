import { Outlet } from "react-router"
import Bannar from "../Bannar/Bannar"

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Outlet></Outlet>
    </div>
  )
}

export default Home