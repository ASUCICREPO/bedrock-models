import theme from "./theme"; // Import your theme
import { ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider
import { LanguageProvider } from "./utilities/LanguageContext"; // Adjust the import path
import { TranscriptProvider } from "./utilities/TranscriptContext";
import { ResponseLengthProvider } from "./contexts/ResponseLengthContext";
import { ModelProvider } from "./contexts/ModelContext";
import { UserProvider } from "./contexts/UserContext";
import { MessageProvider } from "./contexts/MessageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CompareModels,
  ChatBot,
  SelectModels,
  SignIn,
} from "./Pages";

function App() {

  return (
    <LanguageProvider>
      <UserProvider>
        <ResponseLengthProvider>
          <MessageProvider>
            <ModelProvider>
              <TranscriptProvider>
                <BrowserRouter>
                  <ThemeProvider theme={theme}>
                    <Routes>
                      <Route path="/" exact element={<ChatBot />} />
                      <Route
                        path="/compare"
                        exact
                        element={<CompareModels />}
                      />
                      <Route path="/select" exact element={<SelectModels />} />
                      <Route path="/signin" element={<SignIn />} />
                    </Routes>
                  </ThemeProvider>
                </BrowserRouter>
              </TranscriptProvider>
            </ModelProvider>
          </MessageProvider>
        </ResponseLengthProvider>
      </UserProvider>
    </LanguageProvider>
  );
}

export default App;
