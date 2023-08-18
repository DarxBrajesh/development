// src/components/ChatComponent.js
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Paper, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  chatPreview: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    height: "70px",
    borderBottom: "1px solid #fafafa",
  },
  detailss: {
    flex: "1",
    textAlign: "initial",
    textDecoration: "none",
    "& p": {
      color: "gray",
      textDecoration: "none",
      margin: "0"
    },
    "& h2": {
      color: "black",
      margin: "0"
    },
  },
  img: {
    marginRight: "20px",
  },
  timeStamp: {
    color: "lightgray",
    textDecoration: "none",
  },
  a: {
    textDecoration: "none",
    color: "inherit"
},
root: {
  textDecoration: "none"
}
}))
const ChatComponent = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = ({ name, message, timeStamp, profileImg}) => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div style={{height:'70vh'}} className={classes.root}>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px',height:'70vh',overflowX:'scroll' }} className={classes.chatPreview}>
      <Avatar className={classes.img}/>
        <List sx={{overflow:'auto'}}>
          {messages.map((message, index) => (
            <ListItem key={index} >
              <ListItemText primary={message} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <div style={{ display: 'flex', gap: '10px',padding:'10px' }}>
        <TextField
          // label="Message"
          variant="outlined"
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          sx={{
            color:'#fff',cursor:'pointer',
            marginBottom:'0px',
            
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
