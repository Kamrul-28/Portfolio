import React, {Component} from 'react';

class Skills extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <section className="skills">
                    <div className="content-wrap item-details divider">
                        <h2>{this.props.item.skills.title}</h2>

                        <section>
                            <h3>Programming Languages</h3>
                            <p>{this.props.item.skills.languages}</p>
                        </section>

                        <section>
                            <h3>Version Controlling System</h3>
                            <p>{this.props.item.skills.version}</p>
                        </section>
                        <section>
                            <h3>Text Processing</h3>
                            <p>{this.props.item.skills.text}</p>
                        </section>
                        <section>
                            <h3>Databases</h3>
                            <p>{this.props.item.skills.databases}</p>
                        </section>
                        <section>
                            <h3>Frameworks</h3>
                            <p>{this.props.item.skills.frameworks}</p>
                        </section>
                        <section>
                            <h3>Libraries</h3>
                            <p>{this.props.item.skills.libraries}</p>
                        </section>
                        <section>
                            <h3>Applications</h3>
                            <p>{this.props.item.skills.applications}</p>
                        </section>
                        <section>
                            <h3>Operating System</h3>
                            <p>Windows 10</p>
                        </section>
                        <section>
                            <h3>Soft Skills</h3>
                            <p>{this.props.item.skills.languages}</p>
                        </section>


                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;