"use client";

import { useState, FormEvent } from "react";
import { Send, MessageSquare, Paperclip, Mic, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/expandable-chat";
import { getAIResponse, shouldRedirectToWhatsApp, generateWhatsAppMessage } from "@/lib/ai-service";
import { ChatMessage } from "@/types";

export function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);

  const getUserData = () => {
    return {
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      location: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: Date.now(),
      userData: getUserData(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Verificar se deve redirecionar para WhatsApp
      if (shouldRedirectToWhatsApp(input)) {
        setShowWhatsAppButton(true);
        const whatsappMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          content: "Entendi seu interesse! No momento nossa funcionalidade de chat está em desenvolvimento. Para oferecer um atendimento mais personalizado e detalhado, sugiro continuarmos nossa conversa pelo WhatsApp. Lá poderemos discutir melhor suas necessidades e apresentar soluções específicas para seu caso. Clique no botão abaixo para iniciar uma conversa com nossa equipe especializada!",
          sender: "ai",
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, whatsappMessage]);
        return;
      }

      // Obter resposta da IA
      const aiResponse = await getAIResponse(input);
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: aiResponse.text,
        sender: "ai",
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Erro no chat:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = generateWhatsAppMessage(messages);
    window.open(`https://wa.me/5516999891209?text=${message}`, '_blank');
  };

  return (
    <ExpandableChat
      size="lg"
      position="bottom-right"
      icon={
        <div className="relative">
          <MessageSquare className="h-6 w-6" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#00FF88] rounded-full animate-pulse"></div>
        </div>
      }
      className=""
    >
      <ExpandableChatHeader className="flex-col text-center justify-center bg-[#1C1C1E]">
        <h1 className="text-xl font-semibold text-white">Assistente LinCode ✨</h1>
        <p className="text-sm text-white/60">
          Como posso ajudar você hoje?
        </p>
      </ExpandableChatHeader>

      <ExpandableChatBody className="p-4 space-y-4 bg-[#1C1C1E]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === "user"
                  ? "bg-gradient-to-r from-[#7F00FF] to-[#00FF88] text-white"
                  : "bg-white/10 text-white"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg p-3 bg-white/10 text-white">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}

        {showWhatsAppButton && (
          <div className="flex justify-center mt-4">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2"
            >
              <Phone className="h-4 w-4" />
              Falar com um Especialista no WhatsApp
            </Button>
          </div>
        )}
      </ExpandableChatBody>

      <ExpandableChatFooter>
        <form
          onSubmit={handleSubmit}
          className="relative rounded-lg border border-white/10 bg-[#1C1C1E] focus-within:ring-1 focus-within:ring-[#7F00FF] p-1"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="min-h-12 w-full resize-none rounded-lg bg-transparent text-white placeholder:text-white/40 border-0 p-3 focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <div className="flex items-center p-3 pt-0 justify-between">
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                className="text-white/60 hover:text-white hover:bg-white/10"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                className="text-white/60 hover:text-white hover:bg-white/10"
              >
                <Mic className="h-4 w-4" />
              </Button>
            </div>
            <Button
              type="submit"
              size="sm"
              className="bg-gradient-to-r from-[#7F00FF] to-[#00FF88] text-white hover:opacity-90"
              disabled={isLoading || !input.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
} 