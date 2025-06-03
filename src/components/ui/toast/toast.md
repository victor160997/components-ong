# Toast UI Component

Este componente fornece uma interface de notificação (toast) customizável baseada em [Radix UI Toast](https://www.radix-ui.com/primitives/docs/components/toast) para aplicações React.

---

## Funcionalidades

- Notificações empilháveis e animadas
- Suporte a variantes (`default`, `destructive`)
- Ações customizadas e botão de fechar
- Responsivo e acessível

---

## Como usar

### 1. Envolva sua aplicação com o `ToastProvider`

```tsx
import { ToastProvider } from "@/components/ui/toast"

function App() {
  return (
    <ToastProvider>
      {/* ...seu app... */}
    </ToastProvider>
  )
}
```

### 2. Adicione o `ToastViewport` próximo ao root

```tsx
import { ToastViewport } from "@/components/ui/toast"

function App() {
  return (
    <>
      {/* ...seu app... */}
      <ToastViewport />
    </>
  )
}
```

### 3. Renderize um Toast

```tsx
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from "@/components/ui/toast"

function ExampleToast() {
  return (
    <Toast variant="default" open>
      <ToastTitle>Sucesso!</ToastTitle>
      <ToastDescription>Seu cadastro foi realizado.</ToastDescription>
      <ToastAction altText="Desfazer">Desfazer</ToastAction>
      <ToastClose />
    </Toast>
  )
}
```

#### Variantes

- `variant="default"`: Notificação padrão
- `variant="destructive"`: Notificação de erro/alerta

---

## API

### Exports

- `ToastProvider`: Contexto do sistema de toasts
- `ToastViewport`: Container das notificações
- `Toast`: Componente principal do toast
- `ToastTitle`: Título do toast
- `ToastDescription`: Descrição do toast
- `ToastAction`: Botão de ação
- `ToastClose`: Botão de fechar

### Tipos

- `ToastProps`: Props do componente Toast
- `ToastActionElement`: Elemento de ação

---

## Exemplo completo

```tsx
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
} from "@/components/ui/toast"

function App() {
  return (
    <ToastProvider>
      <YourApp />
      <ToastViewport />
      <Toast variant="destructive" open>
        <ToastTitle>Erro!</ToastTitle>
        <ToastDescription>Falha ao salvar dados.</ToastDescription>
        <ToastAction altText="Tentar novamente">Tentar</ToastAction>
        <ToastClose />
      </Toast>
    </ToastProvider>
  )
}
```

---

## Customização

Você pode customizar estilos via classes utilitárias ou sobrescrever variantes usando o sistema de variantes do componente.

---

## Referências

- [Radix UI Toast](https://www.radix-ui.com/primitives/docs/components/toast)
- [class-variance-authority](https://cva.style/docs)