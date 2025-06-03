import { ChatMessage } from '@/types';

const HUGGINGFACE_API_URL = 'https://api-inference.huggingface.co/models/meta-llama/Llama-2-70b-chat-hf';

export async function getAIResponse(message: string): Promise<{ text: string }> {
  try {
    const response = await fetch(HUGGINGFACE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_HUGGINGFACE_API_KEY}`,
      },
      body: JSON.stringify({
        inputs: message,
        parameters: {
          max_length: 500,
          temperature: 0.7,
          top_p: 0.9,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao obter resposta da IA');
    }

    const data = await response.json();
    return { text: data[0].generated_text };
  } catch (error) {
    console.error('Erro ao obter resposta da IA:', error);
    return { 
      text: 'Desculpe, não consegui entender sua mensagem no momento. Por favor, tente novamente mais tarde ou tente outras palavras chaves.' 
    };
  }
}

export function shouldRedirectToWhatsApp(message: string): boolean {
  const keywords = [
    'preço', 'valor', 'custo', 'orçamento',
    'contrato', 'proposta', 'comercial', 'vendas',
    'compra', 'adquirir', 'investimento',
  ];

  return keywords.some(keyword => 
    message.toLowerCase().includes(keyword.toLowerCase())
  );
}

export function generateWhatsAppMessage(messages: ChatMessage[]): string {
  const lastUserMessage = messages
    .filter(m => m.sender === 'user')
    .pop()?.content || '';

  const userData = messages[0]?.userData;

  let message = 'Olá! Sou um cliente interessado nos serviços da LinCode.';
  message += '\n\nBaseado na nossa conversa inicial:';
  message += lastUserMessage ? `\n"${lastUserMessage}"` : '';
  message += '\n\nGostaria de conversar mais sobre como vocês podem ajudar no meu projeto.';
  message += '\n\nPodemos agendar uma conversa para discutir mais detalhes?';

  return encodeURIComponent(message);
} 