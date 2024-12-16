# Perguntas e Respostas sobre Typescript

## 1. O que exatamente é o Typescript?
**Typescript** é uma linguagem de programação de codigo aberto desenvolvida pela Microsoft que estende o JavaScript, ou seja,  um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.

## 2.  Descreva os tipos básicos do Typescript
Os tipos básicos em TypeScript são:

- **`string`**: Representa textos. Exemplo: `"Hello"`.
- **`number`**: Representa números, sejam inteiros ou decimais. Exemplo: `44`, `3.16`.
- **`boolean`**: Representa valores lógicos: `true` ou `false`.
- **`any`**: Permite armazenar qualquer tipo, mas desativa a verificação de tipo.
- **`void`**: Representa ausência de valor. É geralmente usado para funções que não retornam nada.
- **`null` e `undefined`**: Representam valores ausentes ou indefinidos.
- **`array`**: É Uma lista de elementos do mesmo tipo. Exemplo: `number[]` ou `Array<string>`.
- **`tuple`**: Um array com um número fixo de elementos de tipos específicos. Exemplo: `[string, number]`.
- **`enum`**: Conjunto de valores nomeados. Exemplo:
  ```typescript
  enum Color {
    Red,
    Green,
    Blue,
  }

## 3. O que é uma interface?

Em TypeScript, uma interface é uma estrutura que define a forma de um objeto. Ela especifica as propriedades e métodos que um objeto deve ter,  garantindo que ele siga um formato específico.

### Exemplo:

```typescript
interface User {
  id: number;         
  name: string;      
  email?: string;     
}

const user: User = {
  id: 1,
  name: "Hestefane",
};

_OBS:_  
- A propriedade `id` deve ser um número.  
- A propriedade `name` deve ser uma string.  
- A propriedade `email` é opcional.


## 4. O que é uma classe?

Uma classe em TypeScript é uma estrutura que permite criar objetos com propriedades e comportamentos definidos. Ela combina dados (propriedades) e funcionalidades (métodos) em um único bloco de código, facilitando a reutilização e a organização do projeto.

### Exemplo:

```typescript
class ResearchProject {
  title: string;
  researcher: string;

  // para inicializar as propriedades
  constructor(title: string, researcher: string) {
    this.title = title;
    this.researcher = researcher;
  }

  // para exibir informações do projeto
  getProjectInfo(): string {
    return `O projeto "${this.title}" está sendo desenvolvido por ${this.researcher} no TerraLab.`;
  }
}

// instância da classe
const project = new ResearchProject("Monitoramento de Dados Ambientais", "Maria"); // Maria é um exemplo ipotetico de nome
console.log(project.getProjectInfo());
// O projeto "Monitoramento de Dados Ambientais" está sendo desenvolvido por Maria no TerraLab.



## 5. O que é uma herança?
Herança é um conceito fundamental da programação orientada a objetos (POO) que permite a uma classe **herdar** propriedades e métodos de outra classe. Promovendo o reuso de código e a criação de hierarquias, permitindo-nos definir comportamentos comuns em uma classe base e especializar esses comportamentos em classes derivadas.

Em TypeScript, a palavra-chave `extends` é usada para criar uma classe filha que herda de uma classe pai.

### Exemplo:

```typescript
class Employee {
  name: string;
  position: string;

  constructor(name: string, position: string) {
    this.name = name;
    this.position = position;
  }

  getDetails(): string {
    return `${this.name} trabalha como ${this.position}.`;
  }
}

class Manager extends Employee {
  department: string;

  constructor(name: string, position: string, department: string) {
    super(name, position); // Chama o construtor da classe pai (Employee)
    this.department = department;
  }

  // Sobrescreve o método getDetails da classe pai
  getDetails(): string {
    return `${this.name} é o gerente do departamento de ${this.department}.`;
  }
}

const manager = new Manager("Caio Lucas", "Gerente", "Front-end");
console.log(manager.getDetails()); // Caio Lucas é o gerente do departamento de Front-end.


## 6. Quais as vantagens de usar o Typescript ao invés de somente o Javascript?
Algumas das vantagens:

### 1. **Tipagem Estática**
TypeScript permite a definição de tipos para variáveis, parâmetros e valores de retorno, ajudando a evitar erros durante a execução. A tipagem estática oferece mais segurança porque permite que o compilador verifique se o código está correto em tempo de desenvolvimento.

### 2. **Detecção de erros Antecipado**
O TypeScript ajuda a identificar erros de tipo durante o desenvolvimento, antes mesmo de rodar o código. Isso reduz a probabilidade de bugs em produção.

### 3. **Suporte a Classes e Interfaces**
TypeScript facilita o uso de conceitos de programação orientada a objetos, como classes e interfaces.

### 4. **Refatoração Mais Segura**
Quando altera o código, a verificação de tipos do TypeScript garante que não cometa erros acidentais, o que facilita a refatoração de grandes trechos de código com maior confiança.

### 5. **Compatibilidade com JavaScript**
O TypeScript é compatível com qualquer código JavaScript.

### 6. Melhor Manutenção e Escalabilidade
Projetos grandes, com várias pessoas trabalhando no código, podem se beneficiar significativamente da estrutura e dos tipos definidos pelo TypeScript. Isso facilita a manutenção e a escalabilidade do código à medida que o projeto cresce, garantindo maior consistência e menos erros.

### 7. Intellisense