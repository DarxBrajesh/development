// src/components/ChatComponent.js
import React, { useState } from 'react';
import { Paper, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div style={{background:'black',height:'100vh'}}>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index}>
              <ListItemText primary={message} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <div style={{ display: 'flex', gap: '10px', }}>
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          sx={{
            background:'grey',color:'#fff'
          }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatComponent;
