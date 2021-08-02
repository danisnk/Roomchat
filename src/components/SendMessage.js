import React, { useState } from "react";
import { db, auth } from "../firebase";
import firebase from "firebase";
import { Button, Input } from "@material-ui/core";
import "../App.css";

function SendMessage({ scroll }) {
  const [message, setMessage] = useState("");

  async function sendMessage(e) {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="Message..."
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            style={{
              width: "18%",
              fontSize: "15px",
              fontWeight: "550",
              margin: "4px 5% -13px 5%",
              maxWidth: "200px",
            }}
            className="bg-gray-900"
            type="submit"
            disabled={!message}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
