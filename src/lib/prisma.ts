// lib/prisma.ts
import { PrismaClient as PrismaEdgeClient } from '@prisma/client/edge';

declare global {
	var prisma: PrismaEdgeClient | undefined;
}

let prisma: PrismaEdgeClient;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaEdgeClient();
} else {
	if (!global.prisma) {
		global.prisma = new PrismaEdgeClient({ log: ['query'] });
	}
	prisma = global.prisma;
}

export default prisma;
