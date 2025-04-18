
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
    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: message,
        isBot: false,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);

    // Placeholder for API integration
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "I'll connect to your FastAPI backend soon to provide real medical assistance. For now, I'm just a placeholder response.",
          isBot: true,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    }, 1000);
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
