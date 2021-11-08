import React from "react";
import Header from '../Header/Header';
import { CssBaseline, Grid } from '@material-ui/core';
import './HelpPage.css'


function Help() {
    return (
        <> 
            <Header />
            <div class="help-section">
                <h1>Help/FAQ Page</h1>
                <p>Some text.</p>
            </div>
  
            <h2>Help</h2>
            <div class="row">
                <div class="column-help">
                    <div class="card">
                        <div class="container">
                            <p>Helpful Text</p>
                        </div>
                    </div>
                </div>
            </div>   

            <h2>Frequently Asked Questions</h2>
            <div class="row">
                <div class="column-help">
                    <div class="card">
                        <div class="container">
                            <h3>Question 1</h3>
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

export default Help;