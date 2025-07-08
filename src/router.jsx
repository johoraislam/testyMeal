import { createBrowserRouter } from "react-router"
import MainLayout from "./components/mainLayout/MainLayout"
import About from "./components/mainLayout/pages/About"
import Home from "./components/mainLayout/pages/Home"
import Contact from "./components/mainLayout/pages/Contact"
import Prodacts from "./components/mainLayout/pages/Food"
import Feature from "./components/mainLayout/Feature/Feature"

const router = createBrowserRouter([{
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                children:[
                    {
                        path:'feature',
                        element:<Feature></Feature>,
                        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')

                    }
                ]
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/food',
                element:<Prodacts></Prodacts>
                
            }
        ]
    }]) 

export default router