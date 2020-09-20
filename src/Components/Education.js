import React, {Component} from 'react';

class Education extends Component {
    render() {
        return (
            <div>
                <section className="education">
                    <div className="content-wrap item-details">
                        <h2>Education</h2>

                        <section>
                            <h3>Khulna University - Khulna, Bangladesh</h3>
                            <p>Computer Science and Engineering Discipline, Jan 2017- Present</p>
                            <p>Bachelor of Science</p>
                        </section>

                        <section>
                            <h3>Govt Azizul Haque College Bogra - Bogra, Bangladesh</h3>
                            <p>Higher Secondary School Certificate, Jun 2013 - dec 2015</p>
                            <p>Science , GPA - 5.00</p>
                        </section>

                        <section>
                            <h3>Armed Police Battalion Public School and College Bogra - Bogra, Bangladesh</h3>
                            <p>Secondary School Certificate, Jan 2002 - Dec 2012</p>
                            <p>Science , GPA - 5.00</p>
                        </section>
                    </div>
                </section>
            </div>
        );
    }
}

export default Education;