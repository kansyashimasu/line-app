import React, { useState } from 'react'
import { auth, db } from '../firebase';
import firebase from "firebase/compat/app";

function SendMessage() {
    const [message, setMessage] = useState();
    const sendMessage = (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setMessage("");
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className='sendMsg'>
                    <input type="text" placeholder='Enter a Message' onChange={(e) => { setMessage(e.target.value) }}
                        value={message} />
                </div>
            </form>
        </div>
    )
}

export default SendMessage