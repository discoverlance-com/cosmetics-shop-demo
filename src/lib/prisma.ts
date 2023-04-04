// lib/prisma.ts
import { PrismaClient as PrismaEdgeClient } from '@prisma/client/edge';
import { PrismaClient } from '@prisma/client';

declare global {
	var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaEdgeClient();
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient({ log: ['query'] });
	}
	prisma = global.prisma;
}

export default prisma;
