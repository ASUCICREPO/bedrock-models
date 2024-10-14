import React, { useState, useEffect } from "react";
import { TextField, Grid, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useLanguage } from "../utilities/LanguageContext";
import { TEXT } from "../utilities/constants";
import { useTranscript } from "../utilities/TranscriptContext";
import InputAdornment from '@mui/material/InputAdornment';

function ChatInput({ onSendMessage, processing }) {
  const [message, setMessage] = useState("");
  const [helperText, setHelperText] = useState("");
  const { language } = useLanguage();
  const { transcript, setTranscript, isListening } = useTranscript();
  const [isMultilineAllowed, setIsMultilineAllowed] = useState(true); // State to track multiline

  // Effect to handle transcript updates
  useEffect(() => {
    if (!isListening && transcript) {
      setMessage(prevMessage => prevMessage ? `${prevMessage} ${transcript}` : transcript);
      setTranscript(""); 
    }
  }, [isListening, transcript, setTranscript]);

  // Effect to monitor window width and disable multiline for screens <= 1000px (This is due to a material UI error)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setIsMultilineAllowed(false); // Disable multiline for small screens
      } else {
        setIsMultilineAllowed(true); // Enable multiline for larger screens
      }
    };

    // Add event listener for resize events
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array means this effect runs once on mount and listens for resize events

  const handleTyping = (event) => {
    if (helperText) {
      setHelperText("");
    }
    setMessage(event.target.value);
  };

  // Function to handle sending the message when the user presses Enter or clicks the send icon
  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message); // Send the message
      setMessage(""); 
    } else {
      setHelperText(TEXT[language].HELPER_TEXT); // Show helper text if message is empty
    }
  };

  // Function to concatenate the message and transcript when applicable
  const getMessage = (message, transcript, isListening) => {
    if (isListening) {
      if (transcript.length) {
        return message.length ? `${message} ${transcript}` : transcript;
      }
    }
    return message;
  };

  return (
    <Grid container item className="sendMessageContainer">
      <TextField
        className="sendMessageContainer"
        multiline={isMultilineAllowed} // Dynamically allow/disallow multiline
        maxRows={8}
        fullWidth
        disabled={isListening} // Disable input while listening for voice input
        placeholder={TEXT[language].CHAT_INPUT_PLACEHOLDER}
        id="USERCHATINPUT"
        value={getMessage(message, transcript, isListening)} // Handle the message input value
        onKeyDown={(e) => {
          // Send message on Enter key press without Shift (to avoid new line in multiline mode)
          if (e.key === "Enter" && !e.shiftKey && !processing) {
            e.preventDefault(); 
            handleSendMessage(); 
          }
        }}
        onChange={handleTyping}
        helperText={isListening ? TEXT[language].SPEECH_RECOGNITION_HELPER_TEXT : helperText} // Helper text based on current state
        sx={{ "& fieldset": { border: "none" } }} 
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="send"
                disabled={processing || isListening} // Disable send button while processing or listening
                onClick={handleSendMessage} // Trigger message send on click
                color={message.trim() !== "" ? "primary" : "default"} // Change button color based on message content
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
}

export default ChatInput;
