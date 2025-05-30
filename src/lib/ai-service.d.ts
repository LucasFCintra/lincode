declare module '@/lib/ai-service' {
  import { ChatMessage } from '@/types';
  
  export function getAIResponse(message: string): Promise<{ text: string }>;
  export function shouldRedirectToWhatsApp(message: string): boolean;
  export function generateWhatsAppMessage(messages: ChatMessage[]): string;
} 