import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export function Layout() {
    return (
        <div className="w-full h-screen bg-gradient-to-b from-gray-300  to-white">
            <Header/>  
            <Outlet/>  
        </div>
    )
}