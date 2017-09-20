# Workshop ReactJS - Lista de tarefas

## Entregável 1 - Lista simples
Supondo que você receba um JSON com um Array de tarefas, o objetivo é conseguir renderizar esta lista.

```javascript
[
  "Aprender React",
  "Completar o exercício",
  "Dominar o mundo"
]
```
**Conceitos envolvidos**
- [Componentes e Props](https://facebook.github.io/react/docs/components-and-props.html)
- [Estado](https://facebook.github.io/react/docs/state-and-lifecycle.html)
- [Combinando javascript com HTML (JSX)](https://facebook.github.io/react/docs/introducing-jsx.html)

**Dicas**
- Pense na interação entre Props e Estado.
- Pense em composição: Uma representação de Lista e uma representação individual da tarefa.
- Não se preocupe com a origem do Array, você pode usá-lo diretamente na sua interface.

## Entregável 2 - Completando uma tarefa
Ao clicar numa tarefa, ela deve ser retirada da lista.

**Conceitos envolvidos**
- [Estado](https://facebook.github.io/react/docs/state-and-lifecycle.html)
- [Captura e emissão de Eventos](https://facebook.github.io/react/docs/handling-events.html)

**Dicas**
- Lembre-se dos eventos que já usou com Javascript [Vanilla](http://vanilla-js.com/) (onClick, keyPress, etc).

## Entregável 3 - Adicionando uma nova tarefa
Só falta uma interface para adicionar novas tarefas! Um formulário com um input para o nome da tarefa deve ser o suficiente.

**Conceitos envolvidos**
- [Formulários](https://facebook.github.io/react/docs/forms.html)
- [Mudança de componente com estado](https://facebook.github.io/react/docs/lifting-state-up.html)

**Dicas**
- Pense na lista e no formulário como coisas separadas, e então, pense em como se comunicarão.
- Continue usando os conceitos dos entregáveis anteriores. A noção de [Componentes, Props](https://facebook.github.io/react/docs/components-and-props.html) e [Eventos](https://facebook.github.io/react/docs/handling-events.html) precisa estar bem sólida.

## Melhorando sua Aplicação
Agora você já sabe o que o React pode te oferecer. Se você quer melhorar sua aplicação. Temos desafios para solidificar seus conhecimentos. Fique à vontade para tentar e aprender mais sobre a plataforma.

Para seguir em frente, é recomendado refatorar sua aplicação seguindo a [mentalidade de React](https://facebook.github.io/react/docs/thinking-in-react.html). Depois tente fazer alguns desafios.

- Usar Redux para gerenciar o Estado
- Histórico das tarefas completas
- Adicionar uma tarefa do histórico
- Salvar tarefas no LocalStorage
- Sincronizar as tarefas com requisições para um servidor (Mock ou não)
- Configurar tarefas para adicionar todo dia.
- Exportar como TXT, CSV, XML, JSON