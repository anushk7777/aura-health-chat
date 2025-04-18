
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: string;
}

export function ChatMessage({ message, isBot, timestamp }: ChatMessageProps) {
  return (
    <div className={cn("flex w-full", isBot ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "flex flex-col max-w-[80%] rounded-lg px-4 py-2 my-1",
          isBot
            ? "bg-purple-100 text-gray-800"
            : "bg-purple-600 text-white ml-auto"
        )}
      >
        <p className="text-sm">{message}</p>
        <span className="text-xs opacity-70 mt-1">{timestamp}</span>
      </div>
    </div>
  );
}
