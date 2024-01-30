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

  const handleSelect = async () => {};
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
          <img src={"user.photoURL"} alt="" />
          <div className="userChatInfo">
            <span>{"brajesh"}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
