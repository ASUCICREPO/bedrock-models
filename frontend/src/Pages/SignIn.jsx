import React, { useState, useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import { primary_50, PRIMARY_MAIN } from "../utilities/constants";
import { useNavigate } from "react-router-dom"; // For navigation
import { UserContext } from "../contexts/UserContext"; // Import context
import Logo from "../Assets/header_logo.jpg";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext); // Use context
  const navigate = useNavigate(); // For navigation

  const handleLogin = () => {
    login(username); // Set username and check if admin
    navigate("/chat"); // Navigate to chat page after login
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }} boxShadow={3}>
      {/* Left side with background */}
      <Box
        sx={{
          flex: 1,
          background: `linear-gradient(to bottom, ${primary_50}, ${PRIMARY_MAIN})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>

      {/* Right side with form */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: 400,
          }}
        >
          <img src={Logo} alt={`App main Logo`} height={100} />
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            sx={{
              backgroundColor: primary_50,
              color: "white",
              padding: 1,
              marginTop: 2,
              "&:hover": {
                backgroundColor: PRIMARY_MAIN,
                color: "white",
              },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
