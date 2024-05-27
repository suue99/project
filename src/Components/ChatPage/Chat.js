import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';
import '../ChatPage/chat.css';

function Chat() {

    const [physioResponse, setPhysioResponse] = useState('');
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        signInAnonymously()
            .catch(console.error);

        const physioRef = collection(db, 'physioResponse');

        const fetchPhysioResponse = async () => {
            await onSnapshot(physioRef, (querySnapshot) => {
                if (!querySnapshot.empty) {
                    const physioData = querySnapshot.docs[0].data();
                    setPhysioResponse(physioData.responseText);
                }
            });
        };

        fetchPhysioResponse();

    }, []);


    return (
        <div className="chat-container">
            <div>
                <h1 className='chatroom'>Chat Room</h1>
            </div>
            <ul>
                <li className="physio-message">
                    <span>Physiotherapist:</span> {physioResponse}
                </li>
            </ul>
            <form >
                <input placeholder='Type a message' type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chat;

//code assistance: https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/ and youtube