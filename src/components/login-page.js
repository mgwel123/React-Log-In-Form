import React from 'react';
import Navbar from './navbar';
import LoginForm from './login-form';

export default class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <div>
                <Navbar />
                </div>
                <div className="container">
                <LoginForm />
                </div>
            </div>
            
        );
    }
}