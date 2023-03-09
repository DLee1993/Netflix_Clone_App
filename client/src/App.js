import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";

// import img from "./assets/themovieDatabase.svg"

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<LandingPage />} />

                <Route path='/signup' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Route>
        </Routes>
    );
};

export default App;
