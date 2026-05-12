"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() { const users = await prisma.users.findMany({ select: { phone: true, role: true, full_name: true } }); console.log(JSON.stringify(users, null, 2)); }
main().finally(() => prisma.$disconnect());
//# sourceMappingURL=test.js.map