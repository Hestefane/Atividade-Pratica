import { createUser as createUserFromModels, getUserByEmail, User as UserType } from './models/user'; // Renomeando 'createUser' e 'User'
import { createBankAccount, deposit, withdraw, getBankAccountInfo, BankAccount as BankAccountType } from './models/bankAccount'; // Renomeando 'BankAccount'

// Criar um novo usuário
const newUser: UserType = {
  name: 'John Doe', age: 21, email: 'john.doe@example.com', id: ''
}; // Tipando a variável newUser com o tipo User
const createdUser = createUserFromModels(newUser); // Usando a função renomeada

// Obter o usuário criado 
const user: UserType | undefined = getUserByEmail('john.doe@example.com'); // Tipando user como User ou undefined

// Verificar se o usuário foi encontrado
if (user) {
  // Criar uma conta bancária para o usuário
  const bankAccountInfo: BankAccountType | undefined = getBankAccountInfo({ agency: '0001', number: '12345' });

  // Verificar se a conta foi encontrada
  if (bankAccountInfo) {
    // Depositar 1000 unidades monetárias
    deposit(bankAccountInfo, 1000);

    // Sacar 200 unidades monetárias
    withdraw(bankAccountInfo, 200);

    // Exibir informações da conta bancária
    console.log(bankAccountInfo);
  }
} else {
  console.log('Usuário não encontrado.');
}
