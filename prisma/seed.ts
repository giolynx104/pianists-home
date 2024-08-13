import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //TODO: I don't know how to seed my database =(
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
