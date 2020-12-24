import React, {useState, useEffect} from 'react';
import './Contact.css';
import {db} from "./firebase";

function Contact() {

    const[name,setName] = useState('');
    const[email, setEmail] = useState('');
    const[phone , setPhone] = useState('');
    const[text,setText] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        db.collection('contact').add({
            name: name,
            email: email,
            phone: phone,
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
        setPhone('');
        setText('');
    }
    return (
        <div className="contact">
            <section id="contactUs">
        <div className="contact-image">
            <div class="fixed-back">
                <span>CONTACT</span>   
            </div>
            <div className="contact-image-2">
                <span><span>HOME</span>  / CONTACT US</span>
            </div>
        </div>
        
    <div class="contact-container">
        
        <div class="form-container">
            <form class="form-1">
            <h3>Send Us Message</h3>
            <input type="text" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} /><br />
            <input type="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
            <input type="text" placeholder="Your Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} /><br />
            <textarea class="message-hide" placeholder="Your Message" rows="8" value={text} onChange={(e)=>setText(e.target.value)} ></textarea>
            <button type="button" class="contactus-btn" onClick={handleSubmit} >SEND</button>
            </form>
            <div class="message-container">
                <textarea class="message" placeholder="Your Message" rows="9" cols="45" value={text} onChange={(e)=>setText(e.target.value)} ></textarea>
            </div>
        <div class="contact-info">
            <h3>Contact Info</h3>
           <p> YMCA Faridabad , Haryana</p>
           <div class="contact-info-2">
            <span><span>Phone:</span> 1234567897</span><br />
            <span><span>Fax: </span> 1234567897 </span><br />
           <span><span>Email: </span> studentcornerymca@gmail.com </span><br />
           <span><span>Web: </span> http://studentcornerymca.com</span> <br />
           <span><span>Availabe: </span> Monday-Friday 08:00-18:00</span>
        </div>
        </div>
        </div>
        <div class="contact-info-3">
            <h3>Contact Info</h3>
           <p> YMCA Faridabad , Haryana
               <br />
             Near Metro Station Faridabad , Haryana , INDIA</p>
           <div class="contact-info-2">
            <span><span>Phone: </span>  1234567897</span><br />
            <span><span>Fax: </span> 1234567897 </span><br />
           <span><span>Email: </span> studentcornerymca@gmail.com </span><br />
           <span><span>Web: </span> http://studentcornerymca.com</span> <br />
           <span><span>Availabe: </span> Monday-Friday 08:00-18:00</span>
        </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default Contact
