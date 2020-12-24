import React,{useState} from 'react';
import './Registration.css';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import GroupIcon from '@material-ui/icons/Group';
import LanguageIcon from '@material-ui/icons/Language';
import PermDeviceInformationIcon from '@material-ui/icons/PermDeviceInformation';
import {auth} from "./firebase";



function Registration() {

    const[email, setEmail ] = useState('');
    const[password, setPassword] = useState('');
    const[error , setError] = useState(false);

    const handleRegistration = ()=> {
        auth.createUserWithEmailAndPassword(email , password)
        .then((response)=> {
            setEmail(response.user.email);
            alert("Thank you! for register yourself")
        })
        .catch((err)=> {
            setError(err.message);
        })
        setEmail("");
        setPassword("");
        setPassword("");
    }


    return (
        <div className="registration">
            <div className="registration-section">
                    <div className="registration-info-1">
                        <div className="registration-info-1-1">
                            <div className="registration-info-1-1-1">
                            <h2 className="registration-icon-info"><span class="registration-info-icon"><PermDeviceInformationIcon /></span>NOTICES</h2>
                            <p>Check out the latest updates from YMCA admin without any hassle. Now no more running to the admin at the last minute.</p>
                            </div>
                            <div className="registration-info-1-1-1">
                                
                                <h2 className="registration-icon-info"> <span class="registration-info-icon"><MenuBookIcon /></span>NOTES AND PAPERS</h2>
                                <p>Find the notes and previous year examination papers for all semesters. Additionally, class assignments and lab work to get you going for that perfect grade.</p>
                            </div>
                        </div>
                        <div className="registration-info-1-1">
                            <div className="registration-info-1-1-1">
                                <h2 className="registration-icon-info"><span class="registration-info-icon"><LanguageIcon /></span>YMCAPEDIA</h2>
                                <p>The ultimate destination to explore YMCA! A single platform that presents a humongous pack of movie and food reviews, latest technological releases, thought provoking poetries and the latest trends in the campus.</p>
                            </div>
                            <div className="registration-info-1-1-1">
                                <h2 className="registration-icon-info"><span class="registration-info-icon"><GroupIcon /></span>SOCIETIES AND FACULTY </h2>
                                <p>
                                Myriad of societies and our experienced faculty make YMCA what it is. Read on to find out about your honorable professors, society events and much more!</p>
                            </div>
                        </div>
                    </div>
                    <div className="registration-form">
                        <h2>REGISTER FOR LATEST UPDATES</h2>
                        <hr />
                        <input type="text" placeholder="Name" /><br />
                        <input type="gmail" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} /><br />
                        <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} /><br />
                        {error}
                        <button type="submit" className="btn" onClick={handleRegistration}>REGISTER</button>
                </div>
            </div>
        </div>
    )
}

export default Registration
