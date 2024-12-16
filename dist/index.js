"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./models/user"); // Renomeando 'createUser' e 'User'
const bankAccount_1 = require("./models/bankAccount"); // Renomeando 'BankAccount'
// Criar um novo usuário
const newUser = {
    name: 'John Doe', age: 21, email: 'john.doe@example.com', id: ''
}; // Tipando a variável newUser com o tipo User
const createdUser = (0, user_1.createUser)(newUser); // Usando a função renomeada
// Obter o usuário criado 
const user = (0, user_1.getUserByEmail)('john.doe@example.com'); // Tipando user como User ou undefined
// Verificar se o usuário foi encontrado
if (user) {
    // Criar uma conta bancária para o usuário
    const bankAccountInfo = (0, bankAccount_1.getBankAccountInfo)({ agency: '0001', number: '12345' });
    // Verificar se a conta foi encontrada
    if (bankAccountInfo) {
        // Depositar 1000 unidades monetárias
        (0, bankAccount_1.deposit)(bankAccountInfo, 1000);
        // Sacar 200 unidades monetárias
        (0, bankAccount_1.withdraw)(bankAccountInfo, 200);
        // Exibir informações da conta bancária
        console.log(bankAccountInfo);
    }
}
else {
    console.log('Usuário não encontrado.');
}
