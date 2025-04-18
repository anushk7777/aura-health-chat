import { useState } from "react";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatInput } from "@/components/ChatInput";
import { ChatMessage } from "@/components/ChatMessage";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your medical AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const handleSendMessage = (message: string) => {
    // Add user message to chat
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: message,
        isBot: false,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);

    // Call FastAPI backend
    fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: message }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: data.answer || "Sorry, I couldn't find an answer.",
            isBot: true,
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
      })
      .catch((err) => {
        console.error("API error:", err);
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: "Oops! Something went wrong with the chatbot.",
            isBot: true,
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
      });
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto bg-gray-50">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.text}
            isBot={message.isBot}
            timestamp={message.timestamp}
          />
        ))}
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Index;
