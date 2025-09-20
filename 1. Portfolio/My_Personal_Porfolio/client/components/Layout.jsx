import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Layout.css';
export default function Layout() {
return (
<>

<div className="wrapper">
    
        <h1>My Portfolio</h1>

            <nav>
                {/* Navigation Links with class for CSS */}
                <Link to="/" className="home">Home</Link> | 
                <Link to="/about" className="about">About</Link> |
                <Link to="/education" className="education">Education</Link> | 
                <Link to="/project" className="project">Project</Link> | 
                <Link to="/contact" className="contact">Contact</Link> | 
                
            </nav>

            <hr />
            <main>
                <Outlet />
                {/* This is where the routed components will be rendered */}
            </main>
           

</div>

</>
);
}