import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'user-messages'), {
            username: 'Test User',
            messageText: newMessage,
        });
        setNewMessage('');
    };

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
            <form onSubmit={handleSubmit}>
                <input placeholder='Type a message' type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chat;
