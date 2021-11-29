import React from "react";
import Header from '../Header/Header'
import { Grid } from '@material-ui/core';
import './AboutPage.css'
import './HelpPage.css'

function About() {
    return (
        <> 
            <Header />
            <div class="about-section">
                <h1>About Us and FAQ Page</h1>
                <p>
                    Deciding where to eat should not be a tough decision, 
                    and our system allows for the choice to be made simply and quickly.  
                    The result of letting our system choose the restaurant is that 
                    neither partner settles and is left unhappy, and neither is to 
                    blame for an unhappy dining experience.  Our customers need the 
                    response to the dreaded phrase, “I don’t care”, or the best selection 
                    of dining options for what they want, wherever they are. Because our 
                    recommendations are personalized, this should leave couples and 
                    families happier, along with people in an unfamiliar area the 
                    answer to where to go.
                </p>
            </div>
  
            <h2>Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <div class="container">
                            <h3>Ryan Doughty</h3>
                            <p class="title">Sophomore CS Student</p>
                            <p>From Houston, can count to 10 in Greek.</p>
                            <p>ryan.doughty@case.edu</p>
                        </div>
                    </div>
                </div>
  
                <div class="column">
                    <div class="card">
                        <div class="container">
                            <h3>Jackson Kallen</h3>
                            <p class="title">Junior CS Student</p>
                            <p>From Atlanta, plays the guitar.</p>
                            <p>jackson.kallen@case.edu</p>
                         </div>
                    </div>
                 </div>
  
                <div class="column">
                    <div class="card">
                        <div class="container">
                            <h3>Matthew Vatne</h3>
                            <p class="title">Junior CS Student</p>
                            <p>From Detroit, has a dog.</p>
                            <p>matthew.vatne@case.edu</p>
                        </div>
                    </div>
                 </div>
            </div> 
  
            <div class="about-section">
            </div>

            <h2>Frequently Asked Questions</h2>
            <div class="row">
                <div class="column-help">
                    <div class="card">
                        <div class="container">
                            <h3>How do I know I am getting a good recommendation?</h3>
                            <p>Answer</p>
                        </div>
                    </div>
                </div>
  
                <div class="column-help">
                    <div class="card">
                        <div class="container">
                            <h3>Question 2</h3>
                            <p>Answer</p>
                         </div>
                    </div>
                 </div>
  
                <div class="column-help">
                    <div class="card">
                        <div class="container">
                            <h3>Question 3</h3>
                            <p>Answer</p>                           
                        </div>
                    </div>
                 </div>
            </div>
        </>
    );
}

export default About;