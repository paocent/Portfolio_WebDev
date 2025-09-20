import React from 'react';
import './general.css';
import EMS from './assets/EmployeeManagementSystem.png';
export default function Project() {
return (
<>

<p className="project-title">My Projects</p>

<div className="project-main">
    <div className="project-card">
        <img src={EMS} alt="Employee Management System" className="project-image" />
        <h3>Employee Management System</h3>
        <p>System that manages employee records and information as well as track employee flight details.</p>
        <p><a href={EMS} target="_blank" rel="noopener noreferrer">Expand Image</a></p>

    </div>
    <div className="project-card">
        <h3>Project 2</h3>
        <p>Description of Project 2</p>
    </div>
    <div className="project-card">
        <h3>Project 3</h3>
        <p>Description of Project 3</p>
    </div>
</div>







</>
);
}
