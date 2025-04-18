
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t bg-white">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your health-related question..."
        className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-purple-400"
      />
      <Button 
        type="submit" 
        size="icon"
        className="rounded-full bg-purple-600 hover:bg-purple-700"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
