import React, {Component} from 'react';

class Topbar extends Component {
    render() {
        return (
            <div className="topbar-one">
                <div className="container">
                    <div className="topbar-one__left">
                        <a href="#">needhelp@kipso.com</a>
                        <a href="#">444 888 0000</a>
                    </div>
                    <div className="topbar-one__right">
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;