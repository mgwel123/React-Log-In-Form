import React from 'react';


export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Green Thumbs</a>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">Create Profile</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            
            

        );
    }
}


