import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="content-wrap">
                        <h2>Let's Keep in Touch!</h2>

                        <ul className="contact-list">
                            <li><a href="https://mail.google.com" target="_blank">kamrul1728@cseku.ac.bd</a></li>
                            <li><a href="https://web.facebook.com/kk.hasan.1/" target="_blank">Facebook</a></li>
                            <li><a href="https://github.com/Kamrul-28" target="_blank">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/md-kamrul-hasan-539337193/" target="_blank">LinkedIn</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;