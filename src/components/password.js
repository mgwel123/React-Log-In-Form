import React from 'react';

export default class Password extends React.Component {
    render () {
        return (
            <div>
                <label className='form-label'>Password</label>
                <input className='form-control'/>
            </div>
        );
    }
}