import React from 'react';
import LoginButton from './login-button';


export default class LoginForm extends React.Component {
    render() {
        return (
            <form>
                <div className="card w-75">
                    
                    <div className="card-body">
                        <h3>Log In</h3>
                        
                        <Username />
                        <Password />
                        <LoginButton />

                    </div>

                </div>
            </form>
        );

    }
}