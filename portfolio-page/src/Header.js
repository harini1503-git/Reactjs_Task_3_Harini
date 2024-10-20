import React from 'react';
import './header.css';

const Header= ()=>{
    return (
        <header className='header'>
            <h1>My portfolio</h1>
            <nav>
                <a href='#about'>About me</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#internships'>Internships</a>
                <a href='#contact'>Contact me</a>
            </nav>
        </header>
    );
};

export default Header;