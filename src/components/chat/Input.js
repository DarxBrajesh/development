import React, { useContext, useState } from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";
import { collection, addDoc, deleteDoc, getDocs } from "firebase/firestore";
import { database } from "../../firebase";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";
// import {
//   arrayUnion,
//   doc,
//   serverTimestamp,
//   Timestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { database, storage } from "../../firebase";
// import { v4 as uuid } from "uuid";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [count, setCount] = useState(0);
  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);

  const handleSend = async () => {
    // let docRef;
    // if (img) {
    //   const storageRef = ref(storage, uuid());
    //   const uploadTask = uploadBytesResumable(storageRef, img);
    //   uploadTask.on(
    //     (error) => {
    //       //TODO:Handle Error
    //     },
    //     () => {
    //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
    //         await updateDoc(doc(database, "test", data.chatId), {
    //           messages: arrayUnion({
    //             id: uuid(),
    //             text,
    //             senderId: currentUser.uid,
    //             date: Timestamp.now(),
    //             img: downloadURL,
    //           }),
    //         });
    //       });
    //     }
    //   );
    // } else {
    //   await updateDoc(doc(database, "test", data.chatId), {
    //     messages: arrayUnion({
    //       id: uuid(),
    //       text,
    //       senderId: currentUser.uid,
    //       date: Timestamp.now(),
    //     }),
    //   });
    // }
    // const data = async () => {
    //   try {
    //     docRef = await addDoc(collection(database, "test"), {
    //       senderName: "aman",
    //       receiver: "Rohan",
    //       timeStamp: new Date().getDate(),
    //       message: "Hello",
    //     });
    //     setCount(count++);
    //     console.log("Document written with ID: ", docRef.id);
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
    // };
    // await updateDoc(doc(database, "test", currentUser.uid), {
    //   [data.chatId + ".lastMessage"]: {
    //     text,
    //   },
    //   [data.chatId + ".date"]: serverTimestamp(),
    // });
    // await updateDoc(doc(database, "test", data.user.uid), {
    //   [data.chatId + ".lastMessage"]: {
    //     text,
    //   },
    //   [data.chatId + ".date"]: serverTimestamp(),
    // });
    // setText("");
    // setImg(null);
  };
  return (
    <div className="input" style={{ borderTop: "2px solid red" }}>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        {/* <img src={Attach} alt="" /> */}
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) =>
            setImg(
              "https://e1.pxfuel.com/desktop-wallpaper/46/855/desktop-wallpaper-radhe-salman-khan-salman-khan.jpg"
            )
          }
        />
        {/* <label htmlFor="file">
          <img src={Img} alt="" />
        </label> */}
        <button
          onClick={handleSend}
          style={{
            background: "red",
            color: "#f1f1f1",
            borderRadius: "5px",
            padding: "10px",
            width: "100px",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
