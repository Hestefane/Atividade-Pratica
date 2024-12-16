import { v4 as uuidv4 } from 'uuid';
import { User } from './user'; // Importando o tipo User corretamente

interface BankAccountInfo {
  agency: string;
  number: string;
}

// Adicionando a exportação da interface BankAccount
export interface BankAccount {
  id: string;
  agency: string;
  number: string;
  balance: number;
  user: User;
}

const bankAccounts: BankAccount[] = [];

export function createBankAccount(user: User, basicInfo: BankAccountInfo): void {
  const bankAccount: BankAccount = {
    id: uuidv4(),
    agency: basicInfo.agency,
    number: basicInfo.number,
    balance: 0,
    user
  };
  bankAccounts.push(bankAccount);
}

export function withdraw(bankAccount: BankAccount, value: number): number {
  if (value <= bankAccount.balance) {
    bankAccount.balance -= value;
  } else {
    console.log('Saldo insuficiente');
  }
  return bankAccount.balance;
}

export function deposit(bankAccount: BankAccount, value: number): number {
  bankAccount.balance += value;
  return bankAccount.balance;
}

export function getBankAccountInfo(basicInfo: BankAccountInfo): BankAccount | undefined {
  return bankAccounts.find((item) => item.agency === basicInfo.agency && item.number === basicInfo.number);
}

