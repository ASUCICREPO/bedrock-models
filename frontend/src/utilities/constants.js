// --------------------------------------------------------------------------------------------------------//
// Primary color constants for the theme
export const PRIMARY_MAIN = "#444E56"; // The main primary color used for buttons, highlights, etc.
export const primary_50 = "#E7B00C";
// Background color constants
export const SECONDARY_MAIN = "#D3D3D3"; // The main secondary color used for less prominent elements

// Chat component background colors
export const CHAT_BODY_BACKGROUND = "#FFFFFF"; // Background color for the chat body area
export const CHAT_LEFT_PANEL_BACKGROUND = "#444E56"; // Background color for the left panel in the chat
export const ABOUT_US_HEADER_BACKGROUND = "#FFFFFF"; // Background color for the About Us section in the left panel
export const FAQ_HEADER_BACKGROUND = "#FFFFFF"; // Background color for the FAQ section in the left panel
export const ABOUT_US_TEXT = "#FFFFFF"; // Text color for the About Us section in the left panel
export const FAQ_TEXT = "#FFFFFF"; // Text color for the FAQ section in the left panel
export const HEADER_BACKGROUND = "#FFFFFF"; // Background color for the header
export const HEADER_TEXT_GRADIENT = "#444E56"; // Text gradient color for the header

// Message background colors
export const BOTMESSAGE_BACKGROUND = "#F5F5F5"; // Background color for messages sent by the bot
export const USERMESSAGE_BACKGROUND = "#FFEFCA"; // Background color for messages sent by the user

// --------------------------------------------------------------------------------------------------------//
// --------------------------------------------------------------------------------------------------------//

// Text Constants
export const TEXT = {
    EN: {
      APP_NAME: "Kelvyn Park",
      APP_ASSISTANT_NAME: "Kelvyn Park GenAI Bot",
      ABOUT_US_TITLE: "About us",
      ABOUT_US: "Welcome to the Kelvyn Park GenAI chat bot! We're here to assist to quickly access relevant information.",
      FAQ_TITLE: "Frequently Asked Questions",
      FAQS: [
        "What are the school hours?",
        "What core values does the school have?",
        "What academic programs are offered?",
        "What sports are offered at the school?",
        "How do I get involved in the school?"
      ],
      CHAT_HEADER_TITLE: "Kelvyn Park AI Chat Assistant",
      CHAT_INPUT_PLACEHOLDER: "Type a Query...",
      HELPER_TEXT: "Cannot send empty message",
      SPEECH_RECOGNITION_START: "Start Listening",
      SPEECH_RECOGNITION_STOP: "Stop Listening",
      SPEECH_RECOGNITION_HELPER_TEXT: "Stop speaking to send the message" // New helper text
    },
    ES: {
      APP_NAME: "Kelvyn Park",
      APP_ASSISTANT_NAME: "Bot GenAI de Kelvyn Park",
      ABOUT_US_TITLE: "Acerca de nosotros",
      ABOUT_US: "¡Bienvenido al chatbot GenAI de Kelvyn Park! Estamos aquí para ayudarle a acceder rápidamente a la información relevante.",
      FAQ_TITLE: "Preguntas frecuentes",
      FAQS: [
        "¿Cuáles son los horarios escolares?",
        "¿Cuáles son los valores fundamentales de la escuela?",
        "¿Qué programas académicos se ofrecen?",
        "¿Qué deportes se ofrecen en la escuela?",
        "¿Cómo puedo involucrarme en la escuela?"
      ],
      CHAT_HEADER_TITLE: "Asistente de Chat AI de Kelvyn Park",
      CHAT_INPUT_PLACEHOLDER: "Escribe una consulta...",
      HELPER_TEXT: "No se puede enviar un mensaje vacío",
      SPEECH_RECOGNITION_START: "Comenzar a escuchar",
      SPEECH_RECOGNITION_STOP: "Dejar de escuchar",
      SPEECH_RECOGNITION_HELPER_TEXT: "Deja de hablar para enviar el mensaje" // New helper text
    }
};
export const SWITCH_TEXT ={
  SWITCH_LANGUAGE_ENGLISH :  "English",
  SWITCH_TOOLTIP_ENGLISH : "Language",
  SWITCH_LANGUAGE_SPANISH : "Español",
  SWITCH_TOOLTIP_SPANISH : "Idioma"};

export const LANDING_PAGE_TEXT = {
  EN: {
    CHOOSE_LANGUAGE: "Choose language:",
    ENGLISH: "English",
    SPANISH: "Español",
    SAVE_CONTINUE: "Save and Continue",
    APP_ASSISTANT_NAME: "Kelvyn Park GenAI Bot",
  },
  ES: {
    CHOOSE_LANGUAGE: "Elige el idioma:",
    ENGLISH: "English",
    SPANISH: "Español",
    SAVE_CONTINUE: "Guardar y continuar",
    APP_ASSISTANT_NAME: "Bot GenAI de Kelvyn Park",
  }
};

// --------------------------------------------------------------------------------------------------------//
// --------------------------------------------------------------------------------------------------------//

// API endpoints
export const CHAT_API = "https://v1npsugq9g.execute-api.us-west-2.amazonaws.com/dev/upload"; // URL for the chat API endpoint
export const WEBSOCKET_API = "wss://p41tv6njhg.execute-api.us-west-2.amazonaws.com/production/"; // URL for the WebSocket API endpoint

// --------------------------------------------------------------------------------------------------------//
// --------------------------------------------------------------------------------------------------------//

// Features
export const ALLOW_FILE_UPLOAD = false; // Set to true to enable file upload feature
export const ALLOW_VOICE_RECOGNITION = true;
export const ALLOW_FAQ = true; // Set to true to enable the FAQs to be visible in Chat body // Set to true to enable voice recognition feature
export const ALLOW_MULTLINGUAL = true; // Set to true to enable multilingual support
export const ALLOW_LANDING_PAGE = true; // Set to true to enable the landing page
