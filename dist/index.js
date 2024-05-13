"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// <----------------------INSERT/CREATE Operation---------------------->
function insertUser(email, firstName, lastName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email,
                firstName,
                lastName,
                password
            }
        });
        console.log(res);
    });
}
function updateUser(email, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: {
                email
            },
            data: {
                firstName,
                lastName,
            }
        });
        console.log(res);
    });
}
//updateUser("logicarka@gmail.com", { firstName: "Kroton", lastName: "Dey"})
// <----------------------GET Operation---------------------->
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: {
                email
            }
        });
        console.log(res);
    });
}
// getUser("logicarka@gmail.com")
// <----------------------Relationships and Join Operation---------------------->
function createTodo(title, done, description, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.create({
            data: {
                title,
                done,
                description,
                userId
            }
        });
        console.log(res);
    });
}
// createTodo('Park', false, 'Walk', 3);
function getTodo(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findMany({
            where: {
                userId
            },
            select: {
                user: true,
                title: true,
                description: true,
            }
        });
        console.log(res);
    });
}
getTodo(3);
