import React, {Component} from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>

                <section class="work-experience">
                    <div class="content-wrap item-details divider">
                        <h2>{this.props.item.experience.title}</h2>
                        <p>See my complete work history on <a href="https://www.linkedin.com/in/md-kamrul-hasan-539337193/">LinkedIn</a>.</p>


                        <section class="job-item">
                            <div class="job-details">
                                <h3>Durbin Labs Limited</h3>
                                <p>Mentorship of Javascript and ReactJs</p>
                                <p>Aug 2020 - Present , 2 months</p>
                            </div>
                            <div class="job-summary">
                                <p>In This internship i have learned Javascript. i am learning advanced topics of reactjs now and going through a project called happiness tracker </p>
                            </div>
                        </section>

                        <section class="job-item">
                            <div class="job-details">
                                <h3>{this.props.item.experience.company}</h3>
                                <p>{this.props.item.experience.position}</p>
                                <p>{this.props.item.experience.duration}</p>
                            </div>
                            <div class="job-summary">
                                <p>{this.props.item.experience.description}</p>
                            </div>
                        </section>

                    </div>
                </section>
            </div>
        );
    }
}

export default Experience;