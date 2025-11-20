import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";

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
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Teaching-related responses
    if (
      lowerMessage.includes("teaching") &&
      (lowerMessage.includes("interest") || lowerMessage.includes("philosophy"))
    ) {
      return "Dr. Saha's teaching philosophy emphasizes creating a constructive, interactive, cooperative, and collaborative environment that facilitates learning with great enthusiasm. He believes in actively engaging students in the learning process.";
    } else if (
      lowerMessage.includes("teach") ||
      lowerMessage.includes("course") ||
      lowerMessage.includes("pg") ||
      lowerMessage.includes("ug")
    ) {
      return "Dr. Saha teaches both Graduate (PG) and Undergraduate (UG) courses at Concordia University of Edmonton, Canada. He has extensive experience in teaching computer science and IT courses at various levels.";
    } else if (
      lowerMessage.includes("supervis") ||
      lowerMessage.includes("student") ||
      lowerMessage.includes("mentor")
    ) {
      return "Dr. Saha has had the opportunity to mentor thirty-five (35) trainees having multidisciplinary backgrounds from multiple institutions. He provides comprehensive supervision to graduate and undergraduate students.";
    }
    // Research-related responses
    else if (
      lowerMessage.includes("research") &&
      lowerMessage.includes("interest")
    ) {
      return "Dr. Saha's research interests include:\n• Industry 4.0/5.0/6.0\n• Artificial Intelligence/Machine Learning\n• Computer Vision/Robotics\n• Natural Language Processing\n• Software Reliability/Quality Engineering\n\nHis work spans across multiple cutting-edge domains in computer science.";
    } else if (
      lowerMessage.includes("publication") ||
      lowerMessage.includes("paper") ||
      lowerMessage.includes("citation")
    ) {
      return "Dr. Saha's research articles have received 510+ Google Scholar citations and 9,823 reads on ResearchGate. His present h-index is 9, i10-index is 9, and RG score is 14.15. His work has made significant impact in the research community.";
    }
    // Education responses
    else if (
      lowerMessage.includes("education") ||
      lowerMessage.includes("degree") ||
      lowerMessage.includes("phd")
    ) {
      return "Dr. Saha holds:\n• Ph.D. in Computer Science from University of Alberta, Canada\n• Master of Technology in Computer Science from Indian Statistical Institute, India\n• Master of Technology in Quality, Reliability & Operations Research from Indian Statistical Institute, India\n• Bachelor of Mechanical Engineering from Jadavpur University, India";
    }
    // Employment/Position responses
    else if (
      lowerMessage.includes("position") ||
      lowerMessage.includes("job") ||
      lowerMessage.includes("work") ||
      lowerMessage.includes("employ")
    ) {
      return "Dr. Saha is currently:\n• Associate Professor (July 2022 - Present) at Concordia University of Edmonton\n• Previously: Assistant Professor (July 2019 - June 2022) at Concordia University of Edmonton\n• He also served as Chair of Mathematical and Physical Sciences, Program Director of MScIT program, and Coordinator of IT Program (July 2021 - June 2024)\n• Previously worked as Assistant Professor at CIMAT, Mexico (August 2014 - June 2019)";
    }
    // Grants and Awards
    else if (
      lowerMessage.includes("grant") ||
      lowerMessage.includes("award") ||
      lowerMessage.includes("funding") ||
      lowerMessage.includes("achievement")
    ) {
      return "Dr. Saha has received several prestigious grants:\n• NSERC Discovery and Launch Supplement Grant (2020-2027)\n• MITACS Business Strategy Internship (BSI) Grant (2025-2026)\n• NVIDIA Corporation Accelerated Data Science Call for Proposals Award (2019)\n• Basic Science research fund from Conacyt, Mexico (2016-2019)\n• MITACS ACCELERATE internship Award, Canada (2010)";
    }
    // Contact information
    else if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("reach")
    ) {
      return "You can reach Dr. Saha at:\n• Email: baidya.saha@concordia.ab.ca\n• You can also connect via:\n  - Google Scholar\n  - LinkedIn\n  - ResearchGate\n  - Academia.edu\n  - GitHub\n\nAll links are available in the social media section of the website.";
    }
    // Administrative roles
    else if (
      lowerMessage.includes("admin") ||
      lowerMessage.includes("chair") ||
      lowerMessage.includes("director")
    ) {
      return "Dr. Saha has served in several administrative roles:\n• Chair of Mathematical and Physical Sciences (July 2021 - June 2024)\n• Program Director of MScIT program (July 2021 - June 2024)\n• Coordinator of IT Program (July 2021 - June 2024)\n\nAll at Concordia University of Edmonton.";
    }
    // CV and documents
    else if (
      lowerMessage.includes("cv") ||
      lowerMessage.includes("resume") ||
      lowerMessage.includes("document")
    ) {
      return "Dr. Saha's CV and various academic documents are available on the website, including:\n• CV\n• Leadership Philosophy\n• Research Statements (Industry 4.0, NLP, Computer Vision)\n• Teaching Statement\n• Diversity Statement\n\nYou can access these from the documents section at the top of the homepage.";
    }
    // Greetings
    else if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hey")
    ) {
      return "Hello! How can I assist you in learning more about Dr. Baidya Nath Saha's academic profile, research, teaching, or achievements?";
    } else if (lowerMessage.includes("thank")) {
      return "You're welcome! Is there anything else you'd like to know about Dr. Saha's work, research, teaching, or background?";
    }
    // Default response
    else {
      return "I can help you with information about:\n• Research interests and publications\n• Teaching philosophy and courses\n• Education background\n• Employment history\n• Grants and awards\n• Student supervision\n• Contact information\n• Administrative roles\n\nWhat would you like to know?";
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
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
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
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "16px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1d4ed8";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#2563eb";
            e.currentTarget.style.transform = "scale(1)";
          }}
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            width: "384px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "column",
            height: isMinimized ? "64px" : "600px",
            transition: "all 0.3s ease",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(to right, #2563eb, #1d4ed8)",
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
                  color: "#2563eb",
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
                  Online
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
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
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
                aria-label="Minimize chat"
              >
                <Minimize2 size={20} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  padding: "4px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
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
                          message.sender === "user" ? "#2563eb" : "white",
                        color: message.sender === "user" ? "white" : "#1f2937",
                        boxShadow:
                          message.sender === "bot"
                            ? "0 1px 2px rgba(0,0,0,0.05)"
                            : "none",
                        borderBottomRightRadius:
                          message.sender === "user" ? 0 : "8px",
                        borderBottomLeftRadius:
                          message.sender === "bot" ? 0 : "8px",
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
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#9ca3af",
                            borderRadius: "50%",
                            animation: "bounce 1s infinite",
                          }}
                        ></div>
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#9ca3af",
                            borderRadius: "50%",
                            animation: "bounce 1s infinite 0.2s",
                          }}
                        ></div>
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "#9ca3af",
                            borderRadius: "50%",
                            animation: "bounce 1s infinite 0.4s",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
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
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setInputMessage(question);
                          setTimeout(() => handleSendMessage(), 100);
                        }}
                        style={{
                          fontSize: "12px",
                          backgroundColor: "white",
                          border: "1px solid #d1d5db",
                          padding: "4px 12px",
                          borderRadius: "16px",
                          cursor: "pointer",
                          transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "#f3f4f6")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = "white")
                        }
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div
                style={{
                  padding: "16px",
                  borderTop: "1px solid #e5e7eb",
                  backgroundColor: "white",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    style={{
                      flex: 1,
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      padding: "8px 16px",
                      fontSize: "14px",
                      outline: "none",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 0 2px rgba(37, 99, 235, 0.2)")
                    }
                    onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={inputMessage.trim() === ""}
                    style={{
                      backgroundColor:
                        inputMessage.trim() === "" ? "#d1d5db" : "#2563eb",
                      color: "white",
                      padding: "8px",
                      borderRadius: "8px",
                      border: "none",
                      cursor:
                        inputMessage.trim() === "" ? "not-allowed" : "pointer",
                      transition: "background-color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseEnter={(e) => {
                      if (inputMessage.trim() !== "")
                        e.currentTarget.style.backgroundColor = "#1d4ed8";
                    }}
                    onMouseLeave={(e) => {
                      if (inputMessage.trim() !== "")
                        e.currentTarget.style.backgroundColor = "#2563eb";
                    }}
                    aria-label="Send message"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
