"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.getUserByEmail = getUserByEmail;
exports.removeUser = removeUser;
const uuid_1 = require("uuid");
const users = [];
function createUser(user) {
    const newUser = Object.assign(Object.assign({}, user), { id: (0, uuid_1.v4)() });
    users.push(newUser);
    return newUser; // Retorna o usuário com id gerado
}
function updateUser(user) {
    const index = users.findIndex((item) => item.id === user.id);
    if (index !== -1) {
        users[index] = user;
    }
}
function getUserByEmail(email) {
    return users.find((item) => item.email === email);
}
function removeUser(id) {
    const index = users.findIndex((item) => item.id === id);
    if (index !== -1) {
        users.splice(index, 1);
    }
}
