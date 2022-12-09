import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import AboutPage from './Pages/AboutPage'
import BlogPage from './Pages/BlogPage'
import HomePage from './Pages/HomePage'
import NotFoundPage from './Pages/NotFoundPage'
import Layout from "./components/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'posts'} element={<BlogPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
