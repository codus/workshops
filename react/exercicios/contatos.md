# Workshop ReactJS - Lista de contatos

## Entregável 1 - Lista de Contatos simples
Supondo que você receba um JSON com um Array de contatos, o objetivo é conseguir renderizar esta lista, com nome e telefone, na sua aplicação.

```javascript
[
	{ nome: 'Codus Tecnologia', telefone: '(11) 3262-4797' }
]
```
**Conceitos envolvidos**
- [Componentes e Props](https://facebook.github.io/react/docs/components-and-props.html)
- [Combinando javascript com HTML (JSX)](https://facebook.github.io/react/docs/introducing-jsx.html)

**Dicas**
- Pense em composição: Uma representação de Lista e uma representação individual do contato.
- Tente manter a aplicação mais atômica possível.
- Não se preocupe com a origem do Array, você pode usá-lo diretamente na sua interface.

### Desafios

#### Usando Estado e Ciclo de Vida
Para complementar, guarde o Array de contatos no estado do componente. Como sugestão, você pode fazer isso usando o construtor do seu componente.

**Conceitos envolvidos**
- [Estado e Ciclo de Vida](https://facebook.github.io/react/docs/state-and-lifecycle.html)


## Entregável 2 - Criação e Edição de Contatos
Agora, você quer adicionar e editar contatos da sua lista, pra não ter que ficar commitando no código toda vez que for adicionar um novo contato.

**Conceitos envolvidos**
- [Estado](https://facebook.github.io/react/docs/state-and-lifecycle.html)
- [Captura e emissão de Eventos](https://facebook.github.io/react/docs/handling-events.html)
- [Formulários](https://facebook.github.io/react/docs/forms.html)
- [Rendering Condicional](https://facebook.github.io/react/docs/conditional-rendering.html)

**Dicas**
- Tente manter sua Aplicação organizada. Tenha em mente que um componente pode ficar gigante em pouco tempo. Evite que isso aconteça.
- Lembre dos eventos que você já usa com HTML/Javascript: `onClick`, `focusIn`, `focusOut`. O que você vai fazer é criar eventos para as suas Tags.
- Domine o Estado dos componentes. Usando da maneira correta, fica mais fácil para gerenciar as mudanças na Aplicação.

## Entregável 3 - Detalhes do Contato
Depois de adicionar muitos contatos, você percebe que seria legal poder ver as informações resumidas e ver mais detalhes de um único contato em outro lugar.

```javascript
[
	{
		nome: 'Codus Tecnologia',
		telefone: '(11) 3262-4797',
		endereco: 'Av. Paulista, 1274 - 19º Andar',
		email: 'contato@codus.com.br'
	},
	{
		nome: 'Fulano da Silva',
		telefone: '(11) 2785-1850',
		endereco: 'Rua Gonçalo Moreira, 556',
		email: 'fulano-82@gmail.com'
	},
	{
		nome: 'Beltrano da Cunha',
		telefone: '(11) 3685-6947',
		endereco: 'Rua dos Clerigos, 24',
		email: 'beltranocunha@hotmail.com'
	}
]
```

**Conceitos envolvidos**
- [Composição e Hierarquia de Componentes](https://facebook.github.io/react/docs/composition-vs-inheritance.html)

**Dicas**
- Continue usando os conceitos dos entregáveis anteriores. A noção de [Componentes, Props](https://facebook.github.io/react/docs/components-and-props.html) e [Eventos](https://facebook.github.io/react/docs/handling-events.html) precisa estar bem sólida.

## Melhorando sua Aplicação
Agora você já sabe o que o React pode te oferecer. Se você quer melhorar sua aplicação. Temos desafios para solidificar seus conhecimentos. Fique à vontade para tentar e aprender mais sobre a plataforma.

Para seguir em frente, é recomendado refatorar sua aplicação seguindo a [mentalidade de React](https://facebook.github.io/react/docs/thinking-in-react.html). Depois tente fazer alguns desafios.

- Usar Redux para gerenciar o Estado
- Salvar contatos no LocalStorage
- Usar React Router e páginas diferentes para navegação na Aplicação
- Criar os próprios inputs no contato. Armazenar por exemplo, como `[{name: "Nome", value: "Codus"}, {name: "Telefone", value: "(11) 3262-4797"}]`
- Integrar com a API do Facebook para exibir dados do perfil a partir do Nome/Email
- Usar componentes prontos do *npm* para mascarar os inputs
- Colocar um Template/Framework CSS para incrementar o Design
- Sincronizar os contatos com chamadas para um servidor (Mock ou não)
- Upload de Fotos do contato e processamento
- Exportar como TXT, CSV, VCard, XML, JSON
