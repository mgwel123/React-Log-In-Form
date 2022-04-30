import React from 'react';
import LoginButton from './login-button';
import Username from './username';
import Password from './password';


export default class LoginForm extends React.Component {
    render() {
        return (
            <form className="container">
                <div className="card w-50">
                    
                    <div className="card-body">
                        <h3>Log In</h3>

                        <Username />
                        <Password />
                        <br/>
                        <LoginButton />

                    </div>

                </div>
            </form>
        );

    }
}