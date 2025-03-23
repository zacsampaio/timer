<div align="center">
    <h1>Projeto: Timer</h1>
</div>

Este é um projeto criado durante o curso da Rocketseat, com o objetivo de implementar um temporizador funcional utilizando Vite, React e TypeScript. O projeto foi importante para aprender novos conceitos, bibliotecas e aprimorar o entendimento sobre gerenciamento de estados, navegação, controle de formulários e validação de dados.

## Tecnologias Utilizadas
- **Vite**: Ferramenta de build para um desenvolvimento mais rápido e otimizado.
- **React**: Biblioteca para construção de interfaces de usuário interativas.
- **TypeScript**: Superset do JavaScript que traz tipagem estática para o código.
- **Immer**: Biblioteca para facilitar o gerenciamento de estados imutáveis.
- **React Router Dom**: Biblioteca para gerenciamento de rotas e navegação dentro da aplicação.
- **React Hook Form**: Para controle e validação de formulários de forma simples e eficiente.
- **Zod**: Para validação de dados de maneira declarativa e segura.
- **Styled-components**: Para estilização de componentes utilizando CSS-in-JS.
- **date-fns**: Biblioteca para manipulação e formatação de datas de forma simples.
- **Phosphor-react**: Ícones para uma interface mais intuitiva e agradável.

## Funcionalidades da Aplicação
- **Temporizador funcional**: Permite iniciar, pausar e resetar um temporizador com contagem regressiva.
- **Controle do título da página**: O título da página é atualizado dinamicamente com o tempo restante.
- **Histórico de tarefas**: O aplicativo armazena o histórico de tarefas e seus respectivos tempos no `localStorage`, permitindo a consulta e visualização dos registros passados.
- **Gerenciamento de estados**: Utilização de Context, Reducer e Effect para controlar o fluxo de dados e ações.
- **Formulário controlado**: Usando React Hook Form para gerenciar entradas e validações com Zod.
- **Rotas**: Navegação entre diferentes páginas da aplicação usando React Router.

## Aprendizados e Melhorias
Durante o desenvolvimento deste projeto, foi possível aprimorar:
- O uso de **Vite** para otimização do build e desenvolvimento mais rápido.
- O desenvolvimento de aplicações com **React** e **TypeScript**, incluindo o gerenciamento de estados com **Context** e **Reducer**.
- A utilização de **Immer** para facilitar a manipulação de estados imutáveis.
- O controle de formulários com **React Hook Form** e a validação de dados com **Zod**.
- A implementação de **React Router** para controle de navegação entre páginas.
- O uso de **localStorage** para persistir o histórico de tarefas e tempos.
- O gerenciamento dinâmico do título da página para refletir o tempo restante no temporizador.
  
## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/zacsampaio/timer.git
2. Navegue até a pasta do projeto e instale as dependências:
   ```bash
   cd timer && npm install
3. Inicie o servidor:
   ```bash
   npm run dev
4. Acesse a aplicação no navegador através do endereço exibido no terminal.

## Observações
O projeto foi desenvolvido com base nas aulas de React ministradas pelo professor Diego Fernandes da Rocketseat. Novas funcionalidades e melhorias poderão ser implementadas conforme o aprendizado avança, visando aprimorar o projeto e expandir suas capacidades.
