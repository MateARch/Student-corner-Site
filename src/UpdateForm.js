import React, { useState } from 'react';
import './UpdateForm.css';
import {db} from './firebase';

function UpdateForm() {

    const[name,setName] = useState('');
    const[email, setEmail] = useState('');
    const[text,setText] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        db.collection('contribute').add({
            name: name,
            email: email,
            message: text,
        })
        .then(()=> {
            alert("Your message has been submitted!");
        })
        .catch((err)=> {
            alert(err.message);

        });
        setName("");
        setEmail('');
        setText('');
    }


    return (
        <div className="update-form">
            <h2>Leave a Reply</h2>
            <p>Your Email address will not be published.</p>
            <textarea rows="13" value={text} onChange={(e)=> setText(e.target.value)} ></textarea><br />
            <input type="text" value={name} placeholder="NAME" onChange={(e)=> setName(e.target.value)} /><br />
            <input type="email" value={email} placeholder="EMAIL" onChange={(e)=> setEmail(e.target.value)} /><br />
            <button type="submit" onClick={handleSubmit}>Post Comment</button><br />
           
        </div>
    )
}

export default UpdateForm
