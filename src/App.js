import React from "react"
import './App.css';
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Navbar from "./Navbar";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <div className="App"><Navbar/></div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/article/:name" element={<Article/>}/>
                <Route path="/articles" element={<Articles/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
