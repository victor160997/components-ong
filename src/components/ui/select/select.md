# Select UI Component

Este componente fornece um campo de seleção customizável baseado em [Radix UI Select](https://www.radix-ui.com/primitives/docs/components/select) para aplicações React.

---

## Funcionalidades

- Dropdown acessível e estilizado
- Suporte a grupos, labels, separadores e rolagem
- Ícones customizados para seleção e navegação
- Totalmente controlável e responsivo

---

## Como usar

### Exemplo básico

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

function Example() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Selecione uma opção" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="opcao1">Opção 1</SelectItem>
        <SelectItem value="opcao2">Opção 2</SelectItem>
        <SelectItem value="opcao3">Opção 3</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

---

## API

### Exports

- `Select`: Componente raiz do select
- `SelectGroup`: Agrupa itens (opcional)
- `SelectValue`: Valor selecionado
- `SelectTrigger`: Botão que abre o dropdown
- `SelectContent`: Container das opções
- `SelectLabel`: Label de grupo
- `SelectItem`: Item de seleção
- `SelectSeparator`: Separador visual entre itens
- `SelectScrollUpButton` / `SelectScrollDownButton`: Botões de rolagem para listas longas

---

## Customização

Você pode passar a prop `className` para qualquer subcomponente para sobrescrever estilos. Os ícones e animações já vêm prontos para uso, mas podem ser substituídos conforme necessário.

---

## Referências

- [Radix UI Select](https://www.radix-ui.com/primitives/docs/components/select)
- [lucide-react](https://lucide.dev/icons/)
- [class-variance-authority](https://cva.style/docs)