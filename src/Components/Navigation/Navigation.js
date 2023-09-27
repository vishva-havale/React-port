import React from 'react'
// import './Navigation.css'
import '../style.css'
import profile from './profile.png'
const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className='d-flex align-items-center justify-content-center'>
                <img className='profile' src={profile}></img>
                <h3 className='p-0 my-0 logo-title'>VISHVAJIT</h3>
            </div>
            <button class="navbar-toggler mx-5" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div className='d-flex justify-content-end w-100 h-100'>
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#project">Project</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation