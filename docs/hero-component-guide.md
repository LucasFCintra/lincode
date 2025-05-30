# Guia de Criação do Componente Hero com Elementos Flutuantes

Este guia explica como recriar o componente Hero com seus elementos flutuantes de analytics, leads e performance.

## Prompt para o Cursor

```
Crie um componente Hero em React/Next.js com Typescript e Tailwind CSS que contenha:

1. Layout Principal:
- Seção hero ocupando 90vh de altura
- Divisão em duas colunas em telas grandes (lg)
- Coluna da esquerda com texto e CTA
- Coluna da direita com componente flutuante interativo

2. Componente Principal (Analytics):
- Fundo escuro (#1C1C1E)
- Borda com opacidade (white/10)
- Barra superior com "dots" decorativos
- Grid 2x2 para métricas
- Gráfico de visitantes semanal
- Métricas de conversão por origem

3. Componentes Flutuantes:
- Leads (superior direito)
- Engajamento (inferior esquerdo)
- Performance (inferior direito)
- Cada um com gradientes e efeitos de profundidade

4. Estilo Visual:
- Cores principais: #7F00FF (roxo) e #00FF88 (verde)
- Gradientes entre as cores principais
- Sombras e bordas com opacidade
- Animações suaves
- Tipografia em diferentes tamanhos

5. Responsividade:
- Layout adaptável para mobile
- Componentes flutuantes ajustáveis
- Espaçamento responsivo

6. Dependências Necessárias:
- @radix-ui/react-avatar
- lucide-react (para ícones)
- tailwindcss
- @/components/ui/button (do shadcn/ui)
- @/components/ui/avatar (do shadcn/ui)

7. Características Específicas:
- Animação de flutuação no container principal
- Indicadores "ao vivo" com animação pulse
- Gráficos interativos
- Métricas dinâmicas
```

## Estrutura de Arquivos

```
src/
  components/
    Hero.tsx
    ui/
      button.tsx
      avatar.tsx
```

## Configuração do Tailwind

Adicione ao seu `tailwind.config.js`:

```js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: [],
}
```

## Instalação das Dependências

```bash
npm install @radix-ui/react-avatar lucide-react
npm install -D tailwindcss postcss autoprefixer
```

## Componentes Necessários do shadcn/ui

Instale os componentes base do shadcn/ui:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add avatar
```

## Detalhes de Implementação

### Cores e Gradientes

- Cor Principal 1: #7F00FF (Roxo)
- Cor Principal 2: #00FF88 (Verde)
- Fundo: #1C1C1E
- Textos: white com diferentes opacidades (60%, 80%)
- Gradientes: 
  - from-[#7F00FF] to-[#00FF88]
  - opacity: 10% a 50%

### Posicionamento dos Componentes Flutuantes

1. Leads (Superior Direito):
```css
absolute -right-8 -top-8 w-64
```

2. Engajamento (Inferior Esquerdo):
```css
absolute -left-12 -bottom-6 w-64
```

3. Performance (Inferior Direito):
```css
absolute -right-16 bottom-12 w-72
```

### Animações

1. Flutuação Principal:
```css
animate-float
```

2. Indicador "Ao Vivo":
```css
animate-pulse
```

### Responsividade

- Mobile: componentes empilhados
- Tablet: layout ajustado com margens
- Desktop: layout completo com componentes flutuantes

## Dicas de Implementação

1. **Gradientes e Transparências**:
- Use `bg-gradient-to-r` ou `bg-gradient-to-br` para direção
- Combine com opacidades usando `/20` ou `/10`
- Aplique `blur-xl` para efeitos de brilho

2. **Componentes Flutuantes**:
- Use `absolute` com valores negativos para sobrepor
- Aplique `z-index` quando necessário
- Mantenha consistência nos espaçamentos

3. **Performance**:
- Use `transform` para animações
- Evite animações em elementos que mudam frequentemente
- Prefira `opacity` e `transform` para animações

4. **Acessibilidade**:
- Mantenha contraste adequado nos textos
- Adicione `aria-label` em elementos interativos
- Use semântica HTML apropriada

## Observações Finais

- O componente é altamente customizável
- As cores podem ser ajustadas via Tailwind config
- Os dados podem ser dinâmicos via props
- Considere adicionar loading states
- Mantenha consistência no design system

## Recursos Adicionais

- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Radix UI Primitives](https://www.radix-ui.com)
- [Lucide Icons](https://lucide.dev) 