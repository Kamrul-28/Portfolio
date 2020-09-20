import React, {Component} from 'react';

class Extracurriculars extends Component {
    render() {
        return (
            <div>
                <section className="extracurriculars">
                    <div className="content-wrap item-details">
                        <h2>Extracurricular Activities</h2>

                        <section>
                            <h3>Organizations</h3>
                            <p>Vice-President CLUSTER ( Club For Updated Search on Computer) , January 2017- January 2020</p>
                            <p>Executive Member Badhan , Khulna University Unit , January 2017-Present</p>
                            <p>Team Leader Bangladesh Scouts ( 8th national scout jamboree ) , 2010</p>
                        </section>

                        <section>
                            <h3>Program Committees</h3>
                            <p>Management Committee, Khulna University CSE Fest , 2017</p>
                            <p>Management Committee, Khulna University CSE Fest , 2019</p>
                        </section>

                        <section>
                            <h3>Sports</h3>
                            <p>Captain KU CSE Cricket Team , 2020</p>
                            <p>Captain School Cricket Team , 2012</p>
                            <p>Captain School Football Team , 2012</p>
                        </section>
                    </div>
                </section>
            </div>
        );
    }
}

export default Extracurriculars;

