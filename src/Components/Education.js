import React, {Component} from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <section className="education">
                    <div className="content-wrap item-details">
                        <h2>{this.props.item.education.title}</h2>

                        <section>
                            <h3>{this.props.item.education.university.name}</h3>
                            <p>{this.props.item.education.university.dep}</p>
                            <p>{this.props.item.education.university.degree}</p>
                        </section>

                        <section>
                            <h3>{this.props.item.education.college.name}</h3>
                            <p>{this.props.item.education.college.degree}</p>
                            <p>{this.props.item.education.college.dep}</p>

                        </section>

                        <section>
                            <h3>{this.props.item.education.college.name}</h3>
                            <p>{this.props.item.education.school.degree}</p>
                            <p>{this.props.item.education.school.dep}</p>
                        </section>
                    </div>
                </section>
            </div>
        );
    }
}

export default Education;