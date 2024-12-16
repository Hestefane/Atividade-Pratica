import { v4 as uuidv4 } from 'uuid';

export interface User {
  id: string;
  name: string;
  age: number;
  email: string;
}

const users: User[] = [];

export function createUser(user: Omit<User, 'id'>): User { // Retornar o usuário criado
  const newUser = { ...user, id: uuidv4() };
  users.push(newUser);
  return newUser; // Retorna o usuário com id gerado
}

export function updateUser(user: User): void {
  const index = users.findIndex((item) => item.id === user.id);
  if (index !== -1) {
    users[index] = user;
  }
}

export function getUserByEmail(email: string): User | undefined {
  return users.find((item) => item.email === email);
}

export function removeUser(id: string): void {
  const index = users.findIndex((item) => item.id === id);
  if (index !== -1) {
    users.splice(index, 1);
  }
}
