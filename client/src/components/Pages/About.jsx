import React from "react";
import Header from '../Header/Header'
import { Grid } from '@material-ui/core';
import './AboutPage.css'

function About() {
    return (
        <> 
            <Header />
            <div class="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
            </div>
  
            <h2>Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <div class="container">
                            <h3>Ryan Doughty</h3>
                            <p class="title">Title</p>
                            <p>Some text that describes me.</p>
                            <p>ryan.doughty@case.edu</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
  
                <div class="column">
                    <div class="card">
                        <div class="container">
                            <h3>Jackson Kallen</h3>
                            <p class="title">Title</p>
                            <p>Some text that describes me.</p>
                            <p>jackson.kallen@case.edu</p>
                            <p><button class="button">Contact</button></p>
                         </div>
                    </div>
                 </div>
  
                <div class="column">
                    <div class="card">
                        <div class="container">
                            <h3>Matthew Vatne</h3>
                            <p class="title">Title</p>
                            <p>Some text that describes me.</p>
                            <p>matthew.vatne@case.edu</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                 </div>
            </div>  
        </>
    );
}

export default About;