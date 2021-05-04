import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'João Silva',
        email: 'js@example.com',
        password: bcrypt.hashSync('123456', 10),
        password: xxxx
    },
    {
        name: 'Maria Souza',
        email: 'ms@example.com',
        password: bcrypt.hashSync('123456', 10),
        password: xxxx
    },
]

export default users