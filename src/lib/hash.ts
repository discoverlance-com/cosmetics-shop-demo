import { randomBytes, createDecipheriv, createCipheriv } from 'crypto';

const algorithm = 'aes-256-cbc';

const key = randomBytes(32);

export const encryptData = (data: string | number) => {
	const iv = randomBytes(16);
	const text = String(data);

	const cipher = createCipheriv(algorithm, key, iv);
	let encrypted = cipher.update(text);
	encrypted = Buffer.concat([encrypted, cipher.final()]);

	return iv.toString('hex') + ':' + encrypted.toString('hex');
};

export const decryptData = (data: string) => {
	const textParts = data.split(':');
	const iv = Buffer.from(textParts.shift() ?? '', 'hex');

	const encryptedText = Buffer.from(textParts.join(':'), 'hex');
	const decipher = createDecipheriv(algorithm, key, iv);
	let decrypted = decipher.update(encryptedText);
	decrypted = Buffer.concat([decrypted, decipher.final()]);

	return decrypted.toString();
};
