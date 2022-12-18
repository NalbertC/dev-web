// import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from "../pages/Home";

export function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* <Route component = { Home }  path="/" exact /> */}
            </Routes>
        </Router>
    )
}