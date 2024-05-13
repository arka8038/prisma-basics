import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// <----------------------INSERT/CREATE Operation---------------------->
async function insertUser(email: string, firstName: string, lastName: string, password: string) {
    const res = await prisma.user.create({
        data: {
            email,
            firstName,
            lastName,
            password
        }
    })
    console.log(res)
}

// insertUser("logicarka@gmail.com", "Arkaprovo", "Ghosh", "password")


// <----------------------UPDATE Operation---------------------->
interface UserUpdate {
    firstName: string
    lastName: string
}

async function updateUser(email: string, { firstName, lastName }: UserUpdate) {
    const res = await prisma.user.update({
        where: {
            email
        },
        data: {
            firstName,
            lastName,

        }
    })
    console.log(res)
}

//updateUser("logicarka@gmail.com", { firstName: "Kroton", lastName: "Dey"})

// <----------------------GET Operation---------------------->
async function getUser(email: string) {
    const res = await prisma.user.findFirst({
        where : {
            email
        }
    })
    console.log(res)
}

// getUser("logicarka@gmail.com")


// <----------------------Relationships and Join Operation---------------------->


async function createTodo(title: string, done: boolean, description: string, userId: number) {
    const res = await prisma.todo.create({
        data: {
            title,
            done,
            description,
            userId
        }
    })
    console.log(res)
}

// createTodo('Park', false, 'Walk', 3);


async function getTodo(userId: number) {
    const res = await prisma.todo.findMany({
        where : {
            userId
        },
        select: {
            user: true,
            title: true,
            description: true,
        }
    })
    console.log(res)
}

getTodo(3)