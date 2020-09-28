import React, {Component} from 'react';
import Header from "./Header";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Extracurriculars from "./Extracurriculars";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            header:{
                name: "Md. kamrul Hasan",
                developer: "Full-Stack Developer",
                description:"Looking for a entry-level position as a Software Engineer a dynamic farm that values my \n technical skills and provides scope for updating my knowledge, I seek a company that will \n help me contribute to its development while concurrently aiding my personal growth."
            },
            experience: {
                title:"Work Experience",
                company:"AppStick",
                position:"Software Developer Intern, Laravel",
                duration:"Jan 2019-Dec 2019  , 3 months",
                description:"In This internship i have learned basics of Laravel and complete some small projects. With the help of this internship my knowledge about software development increses"
            },
            education:{
                title:"Education",
                university:{
                    name:"Khulna University - Khulna, Bangladesh",
                    dep:"Computer Science and Engineering Discipline, Jan 2017- Present",
                    degree:"Bachelor of Science"
                },
                college:{
                    name:"Govt Azizul Haque College Bogra - Bogra, Bangladesh",
                    dep:"Science , GPA - 5.00",
                    degree:"Higher Secondary School Certificate, Jun 2013 - dec 2015"
                },
                school:{
                    name:"Armed Police Battalion Public School and College Bogra - Bogra, Bangladesh",
                    dep:"Science , GPA - 5.00",
                    degree:"Secondary School Certificate, Jan 2002 - Dec 2012"
                }

            },
            skills:{
                title:"Skills",
                languages:"C , C++ , JAVA , Python , PHP , JavaScript , Arduino , SQL",
                version:"Git , GitHub",
                text:"HTML ,LATEX",
                databases:"MySQL, MongoDb",
                frameworks:"Laravel , Bootstrap",
                libraries:"ReactJs , jQuery , React Native",
                applications:"WebStorm , Visual Studio Code , Subline Text , PhpStorm , intellij , MySQL Workbanch , Texmaker",
                softSkills:"Easily get into teams,Fast Learner and always try to make the most out of my time."
            }
        }
    }
    render() {
        return (
            <div>
                <Header item={this.state} />
                <Experience item={this.state} />
                <Education item={this.state} />
                <Skills item={this.state} />
                <Certifications />
                <Projects />
                <Extracurriculars />
                <Footer />
            </div>
        );
    }
}

export default Main;