import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Minimize2,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
} from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Dr. Baidya Nath Saha's virtual assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Capture the current value at effect creation time
    const synth = synthRef.current;

    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join("");
        setInputMessage(transcript);
        if (event.results[0].isFinal) {
          setIsListening(false);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      // Use the captured value in cleanup
      synth.cancel();
    };
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert(
        "Speech recognition is not supported in your browser. Please use Chrome or Edge."
      );
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      synthRef.current.cancel();
      setIsSpeaking(false);
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const speakText = (text) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    const cleanText = text.replace(/[•\n]/g, ". ").replace(/\s+/g, " ");
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    synthRef.current.speak(utterance);
  };

  const stopSpeaking = () => {
    synthRef.current.cancel();
    setIsSpeaking(false);
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    if (
      lowerMessage.includes("teaching") &&
      (lowerMessage.includes("interest") || lowerMessage.includes("philosophy"))
    ) {
      return "Dr. Saha's teaching philosophy emphasizes creating a constructive, interactive, cooperative, and collaborative environment that facilitates learning with great enthusiasm.";
    } else if (
      lowerMessage.includes("teach") ||
      lowerMessage.includes("course") ||
      lowerMessage.includes("pg") ||
      lowerMessage.includes("ug")
    ) {
      return "Dr. Saha teaches both Graduate and Undergraduate courses at Concordia University of Edmonton, Canada. He has extensive experience in teaching computer science and IT courses.";
    } else if (
      lowerMessage.includes("supervis") ||
      lowerMessage.includes("student") ||
      lowerMessage.includes("mentor")
    ) {
      return "Dr. Saha has mentored thirty-five trainees with multidisciplinary backgrounds from multiple institutions.";
    } else if (
      lowerMessage.includes("research") &&
      lowerMessage.includes("interest")
    ) {
      return "Dr. Saha's research interests include: Industry 4.0/5.0/6.0, Artificial Intelligence and Machine Learning, Computer Vision and Robotics, Natural Language Processing, and Software Reliability Engineering.";
    } else if (
      lowerMessage.includes("publication") ||
      lowerMessage.includes("paper") ||
      lowerMessage.includes("citation")
    ) {
      return "Dr. Saha's research has received over 510 Google Scholar citations. His h-index is 9, i10-index is 9, and RG score is 14.15.";
    } else if (
      lowerMessage.includes("education") ||
      lowerMessage.includes("degree") ||
      lowerMessage.includes("phd")
    ) {
      return "Dr. Saha holds a PhD in Computer Science from University of Alberta, two Master's degrees from Indian Statistical Institute, and a Bachelor's in Mechanical Engineering from Jadavpur University.";
    } else if (
      lowerMessage.includes("position") ||
      lowerMessage.includes("job") ||
      lowerMessage.includes("work") ||
      lowerMessage.includes("employ")
    ) {
      return "Dr. Saha is currently an Associate Professor at Concordia University of Edmonton since July 2022. He previously served as Assistant Professor and held administrative roles including Chair of Mathematical and Physical Sciences.";
    } else if (
      lowerMessage.includes("grant") ||
      lowerMessage.includes("award") ||
      lowerMessage.includes("funding")
    ) {
      return "Dr. Saha has received several grants including NSERC Discovery Grant, MITACS Business Strategy Internship Grant, and NVIDIA Corporation Award.";
    } else if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("reach")
    ) {
      return "You can reach Dr. Saha at baidya.saha@concordia.ab.ca. He's also available on Google Scholar, LinkedIn, ResearchGate, and GitHub.";
    } else if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hey")
    ) {
      return "Hello! How can I assist you in learning more about Dr. Baidya Nath Saha's academic profile?";
    } else if (lowerMessage.includes("thank")) {
      return "You're welcome! Is there anything else you'd like to know?";
    } else {
      return "I can help you with information about research interests, teaching, education, employment, grants, student supervision, and contact information. What would you like to know?";
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;
    const newUserMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages([...messages, newUserMessage]);
    const userInput = inputMessage;
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const responseText = getBotResponse(userInput);
      const botResponse = {
        id: messages.length + 2,
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
      if (autoSpeak) speakText(responseText);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are your research interests?",
    "Tell me about your teaching",
    "What grants have you received?",
    "How can I contact you?",
  ];

  return (
    <div
      style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 9999 }}
    >
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: "rgb(52, 52, 52)",
            color: "white",
            padding: "16px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div
          style={{
            width: "384px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            height: isMinimized ? "64px" : "600px",
            transition: "all 0.3s ease",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              // background: "linear-gradient(to right, #2563eb, #1d4ed8)",
              background: "rgb(52, 52, 52)",
              color: "white",
              padding: "16px",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgb(52, 52, 52)",
                  fontWeight: "bold",
                }}
              >
                BS
              </div>
              <div>
                <h3 style={{ fontWeight: "600", fontSize: "14px", margin: 0 }}>
                  Dr. Baidya's Assistant
                </h3>
                <p style={{ fontSize: "12px", opacity: 0.9, margin: 0 }}>
                  {isListening
                    ? "🎤 Listening..."
                    : isSpeaking
                    ? "🔊 Speaking..."
                    : "Online"}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => setAutoSpeak(!autoSpeak)}
                style={{
                  background: autoSpeak
                    ? "rgba(255,255,255,0.2)"
                    : "transparent",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: "4px",
                  borderRadius: "4px",
                  display: "flex",
                }}
                title={autoSpeak ? "Auto-speak ON" : "Auto-speak OFF"}
              >
                {autoSpeak ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: "4px",
                  borderRadius: "4px",
                  display: "flex",
                }}
              >
                <Minimize2 size={20} />
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  stopSpeaking();
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: "4px",
                  borderRadius: "4px",
                  display: "flex",
                }}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "16px",
                  backgroundColor: "#f9fafb",
                }}
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    style={{
                      display: "flex",
                      justifyContent:
                        message.sender === "user" ? "flex-end" : "flex-start",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "80%",
                        padding: "12px",
                        borderRadius: "8px",
                        backgroundColor:
                          message.sender === "user"
                            ? "rgb(52, 52, 52)"
                            : "white",
                        color: message.sender === "user" ? "white" : "#1f2937",
                        boxShadow:
                          message.sender === "bot"
                            ? "0 1px 2px rgba(0,0,0,0.05)"
                            : "none",
                        whiteSpace: "pre-line",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          margin: 0,
                          marginBottom: "4px",
                        }}
                      >
                        {message.text}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "8px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "12px",
                            margin: 0,
                            color:
                              message.sender === "user"
                                ? "rgba(255,255,255,0.7)"
                                : "#6b7280",
                          }}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                        {message.sender === "bot" && (
                          <button
                            onClick={() =>
                              isSpeaking
                                ? stopSpeaking()
                                : speakText(message.text)
                            }
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              padding: "2px",
                              color: "#6b7280",
                            }}
                            title="Read aloud"
                          >
                            {isSpeaking ? (
                              <VolumeX size={14} />
                            ) : (
                              <Volume2 size={14} />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "white",
                        padding: "12px",
                        borderRadius: "8px",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                      }}
                    >
                      <div style={{ display: "flex", gap: "4px" }}>
                        {[0, 0.2, 0.4].map((delay, i) => (
                          <div
                            key={i}
                            style={{
                              width: "8px",
                              height: "8px",
                              backgroundColor: "#9ca3af",
                              borderRadius: "50%",
                              animation: `bounce 1s infinite ${delay}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {messages.length === 1 && (
                <div
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#f9fafb",
                    borderTop: "1px solid #e5e7eb",
                  }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      marginBottom: "8px",
                    }}
                  >
                    Quick questions:
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                  >
                    {quickQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setInputMessage(q);
                          setTimeout(handleSendMessage, 100);
                        }}
                        style={{
                          fontSize: "12px",
                          backgroundColor: "white",
                          border: "1px solid #d1d5db",
                          padding: "4px 12px",
                          borderRadius: "16px",
                          cursor: "pointer",
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div
                style={{
                  padding: "16px",
                  borderTop: "1px solid #e5e7eb",
                  backgroundColor: "white",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={toggleListening}
                    style={{
                      backgroundColor: isListening ? "#dc2626" : "#f3f4f6",
                      color: isListening ? "white" : "#374151",
                      padding: "8px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      animation: isListening ? "pulse 1.5s infinite" : "none",
                    }}
                    title={isListening ? "Stop listening" : "Start voice input"}
                  >
                    {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                  </button>
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={
                      isListening ? "Listening..." : "Type or speak..."
                    }
                    style={{
                      flex: 1,
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      padding: "8px 16px",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={inputMessage.trim() === ""}
                    style={{
                      backgroundColor:
                        inputMessage.trim() === ""
                          ? "#d1d5db"
                          : "rgb(52, 52, 52)",
                      color: "white",
                      padding: "8px",
                      borderRadius: "8px",
                      border: "none",
                      cursor:
                        inputMessage.trim() === "" ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Send size={20} />
                  </button>
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#9ca3af",
                    marginTop: "8px",
                    textAlign: "center",
                  }}
                >
                  🎤 Click mic to speak • 🔊 Responses read aloud
                </p>
              </div>
            </>
          )}
        </div>
      )}

      <style>{`
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
      `}</style>
    </div>
  );
};

export default Chatbot;
