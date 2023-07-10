import './index.scss'
import Home from "./pages/home/Home";
import ErrorPage from "./pages/errorPage/ErrorPage";
import DevWebOC from "./pages/devWeb-OC/DevWeb-OC";


import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Contact from "./pages/contact/Contact";



function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />

                    <Route path="/contact" element={<Contact/>} />

                    <Route path="/devWeb-OC" element={<DevWebOC/>} />

                    <Route path="*" element={<ErrorPage/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
