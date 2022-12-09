import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import {CustomLink} from "./CustomLink";

const Layout = () => {
    return (
        <>
            <header>
                {/*                <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to={'/'}>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to={'/posts'}>Blog</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to={'/about'}>About</NavLink>*/}
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/posts'}>Blog</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
            </header>
            <main className={'container'}>
                <Outlet/>
            </main>
            <footer className={'container'}>footer</footer>
        </>
    );
};

export default Layout;