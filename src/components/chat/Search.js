import React, { useContext, useState } from "react";
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   setDoc,
//   doc,
//   updateDoc,
//   serverTimestamp,
//   getDoc,
// } from "firebase/firestore";
// import { database } from "../../firebase";
// import { AuthContext } from "../context/AuthContext";
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  // const { currentUser } = useContext(AuthContext);

   const handleSearch = async () => {
  //   const q = query(
  //     collection(database, "users"),
  //     where("displayName", "==", username)
  //   );

  //   try {
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       setUser(doc.data());
  //     });
  //   } catch (err) {
  //     setErr(true);
  //   }
   };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
   
    // const combinedId =
    //   currentUser.uid > user.uid
    //     ? currentUser.uid + user.uid
    //     : user.uid + currentUser.uid;
    // try {
      // const res = await getDoc(doc(database, "chats", combinedId));
      // const res = await getDoc(doc(database, "chats", 2));

      // if (!res.exists()) {
        //create a chat in chats collection
        // await setDoc(doc(database, "chats", combinedId), { messages: [] });
        // await setDoc(doc(database, "chats", 2), { messages: [] });

        //create user chats
        // await updateDoc(doc(database, "userChats", currentUser.uid), {
        //   [combinedId + ".userInfo"]: {
        //     uid: user.uid,
        //     displayName: user.displayName,
        //     photoURL: user.photoURL,
        //   },
        //   [combinedId + ".date"]: serverTimestamp(),
        // });

        // await updateDoc(doc(database, "userChats", user.uid), {
        //   [combinedId + ".userInfo"]: {
        //     uid: currentUser.uid,
        //     displayName: currentUser.displayName,
        //     photoURL: currentUser.photoURL,
        //   },
        //   [combinedId + ".date"]: serverTimestamp(),
        // });
    //   }
    // } catch (err) {}

    // setUser(null);
    // setUsername("")
  };
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={'user.photoURL'} alt="" />
          <div className="userChatInfo">
            <span>{'brajesh'}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;