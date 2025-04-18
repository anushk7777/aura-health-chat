
import { Stethoscope } from "lucide-react";

export function ChatHeader() {
  return (
    <div className="flex items-center gap-3 p-4 border-b bg-white">
      <div className="bg-purple-100 p-2 rounded-full">
        <Stethoscope className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <h1 className="font-semibold text-lg">Medical Assistant</h1>
        <p className="text-sm text-gray-500">Ask me anything about your health</p>
      </div>
    </div>
  );
}
