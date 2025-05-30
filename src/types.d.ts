declare module '@/types' {
  export interface ChatMessage {
    id: string;
    content: string;
    sender: "user" | "ai";
    timestamp: number;
    userData?: {
      userAgent: string;
      referrer: string;
      location: string;
    };
  }
} 