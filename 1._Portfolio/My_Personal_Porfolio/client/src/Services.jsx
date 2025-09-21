import React from 'react';
import './general.css';
export default function Services() {
return (
<>
<p className="project-title">My Services</p>
<p className="project-subtitle">What I can do for you</p>
<div className="services-container">
    <div className="service-card">
        <h3>Web Development</h3>
        <p>Building responsive and dynamic websites using modern technologies.</p>
    </div>
    <div className="service-card">
        <h3>UI/UX Design</h3>
        <p>Creating user-friendly interfaces and enhancing user experience.</p>
    </div>
    <div className="service-card">
        <h3>SEO Optimization</h3>
        <p>Improving website visibility and search engine rankings.</p>
    </div>
    <div className="service-card">
        <h3>Content Creation</h3>
        <p>Producing engaging content tailored to your audience.</p>
    </div>


</div>
</>
);
}

