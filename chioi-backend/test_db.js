const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
    try {
        const count = await prisma.users.count();
        console.log("DB connection successful, users count:", count);
    } catch (e) {
        console.error("DB connection error:", e);
    } finally {
        await prisma.$disconnect();
    }
}
main();
