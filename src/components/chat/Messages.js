// import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
// import { ChatContext } from "../context/ChatContext";
import { collection, addDoc, deleteDoc, getDocs } from "firebase/firestore";
import { database } from "../../firebase";
import img from "../../assets/msgbg.png";
import Message from "./Message";

const Messages = (props) => {
  console.log("props = > ", props);
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchPost();
  }, []);

  // fetch
  const fetchPost = async () => {
    await getDocs(collection(database, "test")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      setMessages(newData);
      // console.log('nska', messages)
    });
  };

  let docRef;

  // add data
  const data = async () => {
    try {
      docRef = await addDoc(collection(database, "test"), {
        senderName: "aman",
        receiver: "Rohan",
        timeStamp: new Date().getDate(),
        message: "Hello",
      });
      setCount(count++);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // delete
  const deletQ = async () => {
    try {
      deleteDoc(docRef)
        .then(() => {
          console.log("Entire Document has been deleted successfully.");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {}
  };

  // const { data } = useContext(ChatContext);

  // useEffect(() => {
  //   const unSub = onSnapshot(doc(database, "chats", data.chatId), (doc) => {
  //     doc.exists() && setMessages(doc.data().messages);

  //   });

  //   return () => {
  //     unSub();
  //   };
  // }, [data.chatId]);

  // console.log('messages')

  return (
    <>
      <div
        style={{
          height: "78vh",
          backgroundImage: `url(${img})`,
          // overflow: "scroll",
          overflow: "auto",
          opacity: "0.1",
          scrollbarWidth: "none !important",
        }}
      >
        {messages.map((item, index) => (
          <div key={index} style={{ padding: "30px" }}>
            item.senderName ?
            <p style={{ textAlign: "end", color: "green", fontSize: "25px" }}>
              {item.senderName}
            </p>
            :<p>{item.senderName}</p>
            <Message>
              <p>{item.senderName}</p>
            </Message>
          </div>
        ))}
      </div>
    </>

    // <div className="messages">
    //  <p>message content</p>
    // </div>
  );
};

export default Messages;
