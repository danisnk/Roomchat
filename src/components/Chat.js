import React from "react";
import SignOut from "./SignOut";
import { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebase";
import SendMessage from "./SendMessage";
import "../App.css";
import "./css.css";

function Chat() {
  const scroll = useRef();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(30)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img className="rounded-full h-12 p-1" src={photoURL} alt="" />
              <p className="text-lg font-normal p-1">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </div>
  );
}

export default Chat;
