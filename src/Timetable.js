import React,{useEffect, useState} from 'react';
import './Timetable.css';
import {db} from './firebase';

function Timetable() {

    const[subject,setSubject] = useState('');
    const[message, setMessage] = useState('');
    const[change, setChange] = useState(false);
    const[msgPrint , setMsgPrint] = useState([]);

    const handleModal = ()=> {
      return (
        setChange(!change)
      )
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        db.collection('timetable').add({
            subject: subject,
            message:message,
        })
        .then(()=> {
            alert("Your message has been submitted!");
        })
        .catch((err)=> {
            alert(err.message);

        });
        setSubject("");
        setMessage('');
    }

    useEffect(()=> {
      const fetchMsgs = async () => {
        const msgCollection = await db.collection('timetable').get();
        setMsgPrint(
          msgCollection.docs.map((doc)=> {
            return (doc.data()
               )
          })
        );
      };
      fetchMsgs();
    },[])

    return (

        <div className="timetable">
          {(change)?
           <div className="timetable-prompt">
           <h1>Enter Message for students</h1>
           
             <input type="text" placeholder="Subject" value={subject} onChange={(e)=> setSubject(e.target.value)} /><br />
             <textarea placeholder="Enter text" value={message} onChange={(e)=> setMessage(e.target.value)} ></textarea>
             <div className="buttons">
             <button onClick={handleSubmit}>Send...</button>
             <button onClick={handleModal}>Cancel</button>
             </div>
         </div>
         :
         ""}
            <ul className="update-timetable-list">
              {msgPrint.map((item)=> {
                return (
                  <li className="list-of-timetable-update">
                    <p><span>{item.subject} </span>: {item.message}</p>
                  </li>
                )
              })}
            </ul>
          
<div className="table">
          <table >
  <thead >
    <tr>
      <th></th>
      <th>09:00-09:50</th>
      <th>10:00-10:50</th>
      <th>11:00-11:50</th>
      <th>11:50-02:00</th>
      <th>02:00-02:50</th>
      <th>03:00-03:50</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Monday </th>
      <td>ETC<br />(Ms. Mamta)</td>
      <td>AEC<br />(Dr. Archana Aggarwal)</td>
      <td>Mathematics-III<br />(Dr. Ramu Dubey)</td>
      <td>B</td>
      <td>DE<br />(Dr. Vinod Rathor)</td>
      <td></td>
    </tr>
    <tr>
      <th>Tuesday</th>
      <td>AEC<br />(Dr. Archana Aggarwal)</td>
      <td>DE<br />(Dr. Vinod Rathor)</td>
      <td>ETC<br />(Ms. Mamta)</td>
      <td>R</td>
      <td colSpan="2">DSA Lab-G1(Mr. Piyush)/<br /> IT Workshop-G2 (Dr.Sapna)</td>
    </tr>
    <tr>
      <th>Wednesday</th>
      <td>Mathematics-III<br />(Dr. Ramu Dubey)</td>
      <td colSpan="2">AEC LAB (G1) (AA1,NY) (COMM-1 W/S)/<br /> DE LAB (G2) (VR,Sandeep) (PCIW/S)</td>
      <td>E</td>
      <td colSpan="2">AEC LAB (G2) (AA1,NY) (COMM-1 W/S)/<br /> DE LAB (G1) (VR,Sandeep) (PCIW/S)</td>
    </tr>
    <tr>
        <th>Thursday</th>
        <td>AEC<br />(Dr. Archana Aggarwal)</td>
        <td>DSA (Mr. Piyush)</td>
        <td></td>
        <td>A</td>
        <td colSpan="2">DSA Lab-G2(Mr. Piyush)/<br /> IT Workshop-G1 (Dr.Sapna)</td>
    </tr>
    <tr>
        <th>Friday</th>
        <td>DE<br />(Dr. Vinod Rathor)</td>
        <td>DSA (Mr. Piyush)</td>
        <td>Mathematics-III<br />(Dr. Ramu Dubey)</td>
        <td>K</td>
        <td>ETC<br />(Ms. Mamta)</td>
        <td></td>
    </tr>
    <tr>
        <th>Saturday</th>
        <td>
        </td>
        <td></td>
        <td>DSA (Mr. Piyush)</td>
        <td></td>
        <td colSpan="2">Project-G2(Dr. Sapna) <br /> Project-G1(Dr. Rewa + Mr. Piyush)</td>
    </tr>
  </tbody>
          
  </table>
  </div>
  <button className="changeTime" onClick={ handleModal}>Change Time</button>
          </div>
    )
}

export default Timetable
