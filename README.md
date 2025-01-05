# Calculadora em React com Vite

Este projeto foi desenvolvido com **React** e **Vite** para criar uma calculadora simples e funcional. O objetivo é proporcionar uma interface de usuário interativa e de fácil utilização, onde é possível realizar operações matemáticas básicas.

---

### **O que é um contexto?**

No React, um **contexto** é uma maneira de compartilhar dados entre componentes sem precisar passar props manualmente em cada nível da árvore de componentes. Isso é útil quando tem dados que precisam ser acessados por muitos componentes em diferentes níveis da aplicação. 

A principal vantagem de usar um contexto é simplificar o compartilhamento de dados globais como temas, idiomas ou  estados de autenticação sem a necessidade de prop drilling.

Para criar e usar um contexto, o React fornece a API `createContext`, `Provider` e `Consumer`, facilitando a passagem de dados entre componentes de forma eficiente.

---

### **O que são React Hooks?**

Os **React Hooks** são funções introduzidas no React 16.8 que permitem usar o estado e outros recursos do React em componentes funcionais. Antes dos hooks, somente componentes de classe podiam ter estado e métodos de ciclo de vida. Com os hooks, podemos gerenciar o estado, efeitos colaterais, e outros recursos, mesmo em componentes funcionais.

Alguns hooks importantes são:
- `useState`: Permite adicionar estado ao componente funcional.
- `useEffect`: Permite realizar efeitos colaterais, como chamadas de API ou manipulação de eventos.
- `useContext`: Permite acessar o contexto em componentes funcionais.

---

### **O que esse contexto possibilita?**

O uso de **React Context** juntamente com **React Hooks** possibilita a criação de componentes mais limpos e reutilizáveis. No contexto de uma aplicação como a calculadora, você pode usar o contexto para gerenciar o estado global (como o valor exibido na tela da calculadora) sem precisar passar props entre os componentes manualmente.

Por exemplo:
- O estado da calculadora pode ser mantido em um contexto global, e os componentes da calculadora podem acessá-lo sem precisar de prop drilling.
- A utilização de hooks como `useState` e `useContext` facilita a manipulação e acesso ao estado da aplicação de forma centralizada, tornando a manutenção do código mais simples.

### **Integração do contexto na aplicação**

Neste projeto, utilizamos o **React Hooks** para gerenciar o estado da aplicação e garantir a interação entre os diferentes botões da calculadora. O estado é controlado através do hook `useState`, e os valores de entrada e operações são atualizados de maneira dinâmica conforme o usuário interage com os botões.

Adicionalmente, o **React Context** poderia ser utilizado para expandir a aplicação, como no caso de temas (modo escuro/claro), configuração de preferências ou até controle de histórico de cálculos, tornando a aplicação mais flexível e escalável.

---

