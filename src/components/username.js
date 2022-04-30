import React from 'react';

export default class Username extends React.Component {
    render () {
        return (
            <div>
                <label className='form-label'>Username</label>
                <input className='form-control'/>
            </div>
        );
    }
}