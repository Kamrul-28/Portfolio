import React, {Component} from 'react';

class Projects extends Component {
    render() {
        return (
            <div>
                <section className="projects">
                    <div className="content-wrap divider">
                        <h2>Projects</h2>

                        <section className="project-item">
                            <h3>BloodBank Management System</h3>
                            <p>Team Leader , Software Development Project</p>
                            <p>This is a Laravel Project</p>
                            <p>The basic building aim is to provide blood donation service to the city recently. Blood Bank Management System (BBMS) is a Web-based application that is designed to store, process, retrieve and analyze information concerned with the administrative and inventory management within a blood bank.This project aims at maintaining all the information pertaining to blood donorsdi</p>
                            <a href="https://github.com/Kamrul-28/BloodBank_Management">Source Code</a>
                        </section>

                        <section className="project-item">
                            <h3>School Management System</h3>
                            <p>Team Leader , Database Project</p>
                            <p>This is a Laravel Project</p>
                            <p>In this project main focus was Database design</p>
                            <a href="https://github.com/Kamrul-28/SchoolManagement">Source Code</a>
                        </section>



                    </div>
                </section>
            </div>
        );
    }
}

export default Projects;