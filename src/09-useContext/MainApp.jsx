import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./context/userProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"


export const MainApp = () => {
  return (
    <UserProvider>
        <hr />
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="/*" element={<Navigate to="/about"/> }/>
        </Routes>
    </UserProvider>
  )
}
