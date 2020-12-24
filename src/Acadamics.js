import React, { useEffect, useState } from 'react';
import {db, firebaseApp} from "./firebase";
import './Acadamics.css';

function Acadamics() {

  const [fileUrl, setFileUrl] = useState(null);
  const [users, setUsers] = useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    if (!username || !fileUrl) {
      return;
    }
    await db.collection("acadamics").doc(username).set({
      name: username,
      avatar: fileUrl,
    }).then(alert("Thank you!!")).catch((err)=> {alert(err);});
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("acadamics").get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);

  return (
    <>
    <div className="notice-content">
      <form className="notice-upload" onSubmit={onSubmit}>
        <input type="text" name="username" placeholder="HEADING OF NOTICE" className="notice-heading-input" /><br />
        <div className="file-button">
        <input type="file" onChange={onFileChange} className="choose-file" />
        <button type="submit" >Submit</button><br />
        </div>
      </form>
      <ul className="notice-list">
        {users.map((user) => {
          return (
            <li key={user.name}>
                <p className="notice-heading">{user.name}</p>
              <img className="notice-image" src={user.avatar} alt={user.name} />
              <div className="notice-line"></div>
            </li>
          );
        })}
      </ul>
    </div>
    </>
  );
}

export default Acadamics
