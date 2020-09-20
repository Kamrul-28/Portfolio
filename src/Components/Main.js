import React, {Component} from 'react';
import Header from "./Header";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Extracurriculars from "./Extracurriculars";
import "../shared/header.json"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            header:"",
            experience:"",
            education:"",
            skills:"",
            certifications:"",
            projects:"",
            extracurriculars:"",
            footer:""
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Experience />
                <Education />
                <Skills />
                <Certifications />
                <Projects />
                <Extracurriculars />
                <Footer />
            </div>
        );
    }
}

export default Main;