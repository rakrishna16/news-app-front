import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { requestNotificationPermission } from '../firebase';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// const express = require("express");
// const { messaging } = require("./firebaseAdmin");
const NotificationPush = () => {
    const [token, setToken] = useState(null);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        getTokenAsync();
    }, []);

    const getTokenAsync = async () => {
        try {
            const token = await Notification.requestPermission();
            setToken(token);
            console.log(token)
        }
        catch (error) {
            console.error('Error getting token:', error);
        }
    };

    console.log(token)
    const sendNotification = async () => {
        if (token) {
            await axios.post('https://news-app-back.onrender.com/api/auth/send-notification',
                { title, body, token, });
            console.log('Notification sent');
        }
        else {
            console.log('No token available');
        }
    };
    useEffect(() => {
        onMessage((payload) => {
            console.log('Message received:', payload);
        });
    }, []);

    return (
        <div>
            <h1>Firebase Push Notification</h1>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
            <button onClick={sendNotification}>Send Notification</button>
        </div>
    );
};

export default NotificationPush;