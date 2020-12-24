import React from 'react';
import './Contribute.css';
import UpdateForm from './UpdateForm';

function Contibute() {
    return (
        <div className="contribute">
            <div className="contribute-container">
                <h1>Contribute</h1>
                <p>Please feel free to contact us at studentcornerymca@gmail.com.</p>
                <p> We will be glad if you contribute in any way.</p>
                <p>Want to share notes or papers?
                    <br />Mail us at studentcornerymca@gmail.com.</p>
                    
            </div>
            <div className="hr-line"></div>
            <UpdateForm />
        </div>
    )
}

export default Contibute
