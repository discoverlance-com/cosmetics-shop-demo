// lib/prisma.ts
import { PrismaClient } from '@prisma/client/edge';

declare global {
	var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient({ log: ['query'] });
	}
	prisma = global.prisma;
}

export default prisma;
