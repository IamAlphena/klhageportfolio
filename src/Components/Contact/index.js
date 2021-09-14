import React from 'react';


function Contact() {
   return( 
   <>
   <div className="container">
        <div className="contactcard">
            <h3>Email</h3>
            <p><a href="mailto:kimberly.hage@gmail.com"> kimberly.hage@gmail.com </a></p>
        </div>
        <div className="contactcard">
            <h3>Github</h3>
            <p><a href="https://www.github.com/IamAlphena"
                target="_blank"
                rel="noreferrer"> IamAlphena </a></p>
        </div>
        <div className="contactcard">
            <h3>LinkedIn</h3>
            <p><a href="https://www.linkedin.com/in/kimberlyhage/" 
                target="_blank" 
                rel="noreferrer"> Kimberly Hage </a></p>
        </div>
        <div className="contactcard">
            <h3>Resume</h3>
            <p><a href="https://docs.google.com/document/d/1V-JKj4VfPURT4fkRT9U5voA1sTbKiIUHxeIL2Ii9FMk/edit?usp=sharing"
                target="_blank" 
                rel="noreferrer"> Google Doc </a></p>
        </div>
        </div>
    </>
   )}
   
export default Contact;