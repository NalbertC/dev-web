// import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { About } from '../pages/About';
import { Cloud } from '../pages/Cloud';
import { Css } from '../pages/Css';
import { Home } from "../pages/Home";
import { Html } from '../pages/Html';
import { Javasript } from '../pages/Javascript';
import { Navegadores } from '../pages/Navegadores';
import { NotFound } from '../pages/NotFound';
import { React } from '../pages/React';
import { Vscode } from '../pages/Vscode';

export function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/html" element={<Html/>} />
                <Route path='/css' element={<Css />} />
                <Route path='/javascript' element={<Javasript />} />
                <Route path='/react' element={<React />} />
                <Route path='/vscode' element={<Vscode />} />
                <Route path='/navegadores' element={<Navegadores />} />
                <Route path='/servicos-hopedagem' element={<Cloud />} />
                <Route path='/sobre' element={<About />} />
                <Route path='/*' element={<NotFound />} />

            </Routes>
        </Router>
    )
}